const data = window.siteData;

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value || '';
};

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const isInternalLink = (href = '') => href.startsWith('#') || href.startsWith('./');

const renderList = (id, items, renderItem) => {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = items.map(renderItem).join('');
};

const mediaImage = (media, fallback = '') => media.poster || media.src || fallback;

const mediaAlt = (media, title) => media.alt || `${title} ${media.label || 'media'}`;

const renderMediaTrigger = (media, projectTitle, className) => {
  const image = mediaImage(media);
  const label = media.label || (media.type === 'video' ? 'Video' : 'Media');
  const title = media.title || projectTitle;
  const caption = media.caption || '';
  const loading = 'eager';

  if (media.type === 'external-video') {
    return `
      <a class="${className} media-trigger-link" href="${escapeHtml(media.href)}" target="_blank" rel="noreferrer">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(mediaAlt(media, projectTitle))}" loading="${loading}" />
        <span class="media-kind">${escapeHtml(label)}</span>
        <span class="media-trigger-title">${escapeHtml(title)}</span>
      </a>
    `;
  }

  const kind = media.type === 'video' ? 'video' : 'image';
  const src = media.type === 'video' ? media.src : image;

  return `
    <button
      class="${className} media-trigger"
      type="button"
      data-kind="${escapeHtml(kind)}"
      data-src="${escapeHtml(src)}"
      data-poster="${escapeHtml(media.poster || '')}"
      data-alt="${escapeHtml(mediaAlt(media, projectTitle))}"
      data-caption="${escapeHtml(caption)}"
      aria-label="查看 ${escapeHtml(title)}"
    >
      <img src="${escapeHtml(image)}" alt="${escapeHtml(mediaAlt(media, projectTitle))}" loading="${loading}" />
      <span class="media-kind">${escapeHtml(label)}</span>
      <span class="media-trigger-title">${escapeHtml(title)}</span>
      <span class="media-play">${media.type === 'video' ? 'Play' : 'View'}</span>
    </button>
  `;
};

const renderProject = (item, index) => {
  const heroMedia = item.heroMedia || item.media?.[0] || {
    type: 'image',
    src: item.cover?.src,
    alt: item.cover?.alt,
    title: item.title
  };
  const secondaryMedia = item.secondaryMedia ?? item.media?.slice(1) ?? [];
  const ordinal = String(index + 1).padStart(2, '0');

  return `
    <article class="project-record">
      <div class="project-record-copy">
        <div class="record-meta">
          <span>${ordinal}</span>
          <span>${escapeHtml(item.period)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="project-summary-line">${escapeHtml(item.summary)}</p>
        <p class="project-description">${escapeHtml(item.description)}</p>
        <ul class="project-highlights">
          ${(item.highlights || []).map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
        </ul>
        <div class="project-tags">
          ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${item.links
            .map(
              (link) =>
                `<a href="${escapeHtml(link.href)}" ${
                  isInternalLink(link.href) ? '' : 'target="_blank" rel="noreferrer"'
                }>${escapeHtml(link.label)}</a>`
            )
            .join('')}
        </div>
      </div>
      <div class="project-record-media">
        ${renderMediaTrigger(heroMedia, item.title, 'hero-media')}
        ${
          secondaryMedia.length
            ? `<div class="secondary-media-list">
                ${secondaryMedia
                  .map((media) => renderMediaTrigger(media, item.title, 'secondary-media-item'))
                  .join('')}
              </div>`
            : ''
        }
      </div>
    </article>
  `;
};

setText('brandName', data.profile.name);
setText('heroName', data.profile.name);
setText('heroRole', data.profile.role);
setText('heroAffiliation', data.profile.affiliation);
setText('aboutText', data.profile.subtitle || data.profile.about);
setText('contactText', data.profile.contactText);

document.title = `${data.profile.name} | Academic Homepage`;

renderList('focusTags', data.profile.focus, (item) => `<li>${escapeHtml(item)}</li>`);

renderList(
  'quickLinks',
  data.profile.quickLinks,
  (item) =>
    `<a href="${escapeHtml(item.href)}" ${
      isInternalLink(item.href) ? '' : 'target="_blank" rel="noreferrer"'
    }>${escapeHtml(item.label)}</a>`
);

renderList('projectList', data.projects, renderProject);

renderList(
  'researchList',
  data.research,
  (item) => `
    <article class="info-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `
);

renderList(
  'newsList',
  data.news,
  (item) => `
    <article class="info-item timeline-item">
      <p class="item-meta">${escapeHtml(item.date)}</p>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `
);

renderList(
  'publicationList',
  data.publications,
  (item) => `
    <article class="publication-item">
      <p class="item-meta">${escapeHtml(item.venue)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.authors)}</p>
      <p>${escapeHtml(item.summary)}</p>
      ${
        item.links.length
          ? `<div class="paper-links">${item.links
              .map(
                (link) =>
                  `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
              )
              .join('')}</div>`
          : ''
      }
    </article>
  `
);

renderList(
  'experienceList',
  data.experience,
  (item) => `
    <article class="info-item timeline-item">
      <p class="item-meta">${escapeHtml(item.period)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `
);

renderList(
  'serviceList',
  data.service,
  (item) => `
    <article class="info-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `
);

renderList(
  'contactLinks',
  data.profile.contact,
  (item) => `<a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`
);

const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxCaption = document.getElementById('lightboxCaption');

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightboxVideo || !lightboxCaption) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.hidden = true;
  lightboxImage.removeAttribute('src');
  lightboxImage.removeAttribute('alt');
  lightboxVideo.hidden = true;
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
  lightboxVideo.removeAttribute('poster');
  lightboxVideo.innerHTML = '';
  lightboxVideo.load();
  lightboxCaption.textContent = '';
  document.body.classList.remove('lightbox-open');
};

const openLightbox = (button) => {
  if (!lightbox || !lightboxImage || !lightboxVideo || !lightboxCaption) return;
  const kind = button.dataset.kind;
  const src = button.dataset.src;
  const caption = button.dataset.caption || '';
  if (!src) return;

  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightboxCaption.textContent = caption;
  document.body.classList.add('lightbox-open');

  if (kind === 'video') {
    lightboxImage.hidden = true;
    lightboxImage.removeAttribute('src');
    lightboxImage.removeAttribute('alt');
    lightboxVideo.hidden = false;
    lightboxVideo.poster = button.dataset.poster || '';
    lightboxVideo.innerHTML = `<source src="${escapeHtml(src)}" type="video/mp4" />`;
    lightboxVideo.load();
    return;
  }

  lightboxVideo.hidden = true;
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
  lightboxVideo.removeAttribute('poster');
  lightboxVideo.innerHTML = '';
  lightboxVideo.load();
  lightboxImage.hidden = false;
  lightboxImage.src = src;
  lightboxImage.alt = button.dataset.alt || '';
};

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.media-trigger');
  if (trigger) {
    openLightbox(trigger);
    return;
  }

  if (
    lightbox &&
    lightbox.classList.contains('is-open') &&
    (event.target === lightbox || event.target === lightboxClose)
  ) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});
