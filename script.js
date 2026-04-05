const data = window.siteData;

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const renderList = (id, items, renderItem) => {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = items.map(renderItem).join('');
};

const renderProjectMedia = (mediaItems, title) =>
  mediaItems
    .map((media) => {
      if (media.type === 'video') {
        return `
          <figure class="media-card media-card-video">
            <button
              class="media-expand"
              type="button"
              data-kind="video"
              data-src="${escapeHtml(media.src)}"
              data-poster="${escapeHtml(media.poster || '')}"
              data-caption="${escapeHtml(media.caption || '')}"
              aria-label="放大查看视频"
            >
              放大
            </button>
            <video controls preload="metadata" playsinline poster="${escapeHtml(media.poster || '')}">
              <source src="${escapeHtml(media.src)}" type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
            <figcaption class="media-caption">${escapeHtml(media.caption || '')}</figcaption>
          </figure>
        `;
      }

      if (media.type === 'external-video') {
        return `
          <a class="media-card media-card-link" href="${escapeHtml(media.href)}" target="_blank" rel="noreferrer">
            <img src="${escapeHtml(media.poster)}" alt="${escapeHtml(title)} 视频封面" loading="lazy" />
            <span class="media-badge">外部视频</span>
            <span class="media-caption">${escapeHtml(media.caption || '')}</span>
          </a>
        `;
      }

      return `
        <figure class="media-card">
          <button
            class="media-expand"
            type="button"
            data-kind="image"
            data-src="${escapeHtml(media.src)}"
            data-alt="${escapeHtml(media.alt || title)}"
            data-caption="${escapeHtml(media.caption || '')}"
            aria-label="放大查看图片"
          >
            放大
          </button>
          <img src="${escapeHtml(media.src)}" alt="${escapeHtml(media.alt || title)}" loading="lazy" />
          <figcaption class="media-caption">${escapeHtml(media.caption || '')}</figcaption>
        </figure>
      `;
    })
    .join('');

setText('brandName', data.profile.name);
setText('heroRole', data.profile.role);
setText('heroName', data.profile.name);
setText('heroSubtitle', data.profile.subtitle);
setText('heroAffiliation', data.profile.affiliation);
setText('aboutText', data.profile.about);
setText('avatarBadge', data.profile.initials);
setText('contactText', data.profile.contactText);

document.title = `${data.profile.name} | Academic Homepage`;

renderList('focusTags', data.profile.focus, (item) => `<li>${escapeHtml(item)}</li>`);

renderList(
  'quickLinks',
  data.profile.quickLinks,
  (item) => `<a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`
);

renderList(
  'researchList',
  data.research,
  (item) => `
    <article class="stack-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `
);

renderList(
  'newsList',
  data.news,
  (item) => `
    <article class="timeline-item">
      <p class="item-meta">${escapeHtml(item.date)}</p>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `
);

renderList(
  'projectList',
  data.projects,
  (item) => `
    <article class="project-item">
      <div class="project-hero">
        <div class="project-copy">
          <div class="project-head">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="item-meta">${escapeHtml(item.period)}</p>
          </div>
          <p class="project-summary-line">${escapeHtml(item.summary)}</p>
          <p>${escapeHtml(item.description)}</p>
          <div class="project-tags">
            ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
          </div>
          <div class="project-links">
            ${item.links
              .map(
                (link) =>
                  `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
              )
              .join('')}
          </div>
        </div>
        <div class="project-cover-wrap">
          <img class="project-cover" src="${escapeHtml(item.cover.src)}" alt="${escapeHtml(item.cover.alt)}" loading="lazy" />
        </div>
      </div>
      <div class="media-grid ${item.media.length === 1 ? 'media-grid-single' : ''}">
        ${renderProjectMedia(item.media, item.title)}
      </div>
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
      ${item.links.length ? `<div class="paper-links">${item.links
        .map(
          (link) =>
            `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
        )
        .join('')}</div>` : ''}
    </article>
  `
);

renderList(
  'experienceList',
  data.experience,
  (item) => `
    <article class="timeline-item">
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
    <article class="stack-item">
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

const primaryLink = document.getElementById('primaryLink');
const secondaryLink = document.getElementById('secondaryLink');

if (primaryLink) {
  primaryLink.href = '#projects';
  primaryLink.textContent = '查看项目';
}

if (secondaryLink) {
  secondaryLink.href = 'https://github.com/sanyueuy';
  secondaryLink.textContent = '访问 GitHub';
  secondaryLink.target = '_blank';
  secondaryLink.rel = 'noreferrer';
}

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
    lightboxVideo.innerHTML = `<source src="${src}" type="video/mp4" />`;
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
  const expandButton = event.target.closest('.media-expand');
  if (expandButton) {
    openLightbox(expandButton);
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
