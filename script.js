const data = window.siteData;

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

const renderList = (id, items, renderItem) => {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = items.map(renderItem).join('');
};

setText('brandName', data.profile.name);
setText('heroRole', data.profile.role);
setText('heroName', data.profile.name);
setText('heroSubtitle', data.profile.subtitle);
setText('heroDescription', data.profile.description);
setText('heroAffiliation', data.profile.affiliation);
setText('aboutText', data.profile.about);
setText('avatarBadge', data.profile.initials);
setText('contactText', data.profile.contactText);

document.title = `${data.profile.name} | Academic Homepage`;

renderList(
  'focusTags',
  data.profile.focus,
  (item) => `<li>${item}</li>`
);

renderList(
  'quickLinks',
  data.profile.quickLinks,
  (item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`
);

renderList(
  'researchList',
  data.research,
  (item) => `
    <article class="stack-item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `
);

renderList(
  'newsList',
  data.news,
  (item) => `
    <article class="timeline-item">
      <p class="item-meta">${item.date}</p>
      <p>${item.text}</p>
    </article>
  `
);

renderList(
  'projectList',
  data.projects,
  (item) => `
    <article class="project-item">
      <div class="project-head">
        <h3>${item.title}</h3>
        <p class="item-meta">${item.period}</p>
      </div>
      <div class="project-summary">
        <p>${item.summary}</p>
        <div class="project-tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
      <div class="media-grid">
        ${item.media
          .map((media) => {
            if (media.type === 'video') {
              return `
                <figure class="media-card">
                  <video controls preload="metadata" playsinline poster="${media.poster || ''}">
                    <source src="${media.src}" type="video/mp4" />
                    你的浏览器暂不支持视频播放。
                  </video>
                  <figcaption class="media-caption">${media.caption || ''}</figcaption>
                </figure>
              `;
            }

            return `
              <figure class="media-card">
                <img src="${media.src}" alt="${media.alt || item.title}" loading="lazy" />
                <figcaption class="media-caption">${media.caption || ''}</figcaption>
              </figure>
            `;
          })
          .join('')}
      </div>
      <div class="project-links">
        ${item.links
          .map(
            (link) =>
              `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
          )
          .join('')}
      </div>
    </article>
  `
);

renderList(
  'publicationList',
  data.publications,
  (item) => `
    <article class="publication-item">
      <p class="item-meta">${item.venue}</p>
      <h3>${item.title}</h3>
      <p>${item.authors}</p>
      <p>${item.summary}</p>
      <div class="paper-links">
        ${item.links
          .map(
            (link) =>
              `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
          )
          .join('')}
      </div>
    </article>
  `
);

renderList(
  'experienceList',
  data.experience,
  (item) => `
    <article class="timeline-item">
      <p class="item-meta">${item.period}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `
);

renderList(
  'serviceList',
  data.service,
  (item) => `
    <article class="stack-item">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `
);

renderList(
  'contactLinks',
  data.profile.contact,
  (item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`
);

const primaryLink = document.getElementById('primaryLink');
const secondaryLink = document.getElementById('secondaryLink');

if (primaryLink && data.profile.contact[0]) {
  primaryLink.href = data.profile.contact[0].href;
}

if (secondaryLink) {
  secondaryLink.href = '#publications';
}
