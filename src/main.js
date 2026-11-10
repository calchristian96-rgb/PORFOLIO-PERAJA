import './style.css';
import './icons.css';
import { personal, skills, techMarquee, projects, certificates, seminars, achievements, education } from './data.js';
import phpLogo from 'simple-icons/icons/php.svg?raw';
import htmlLogo from 'simple-icons/icons/html5.svg?raw';
import cssLogo from 'simple-icons/icons/css.svg?raw';
import jsLogo from 'simple-icons/icons/javascript.svg?raw';
import dartLogo from 'simple-icons/icons/dart.svg?raw';
import laravelLogo from 'simple-icons/icons/laravel.svg?raw';
import reactLogo from 'simple-icons/icons/react.svg?raw';
import nodeLogo from 'simple-icons/icons/nodedotjs.svg?raw';
import expressLogo from 'simple-icons/icons/express.svg?raw';
import flutterLogo from 'simple-icons/icons/flutter.svg?raw';
import mysqlLogo from 'simple-icons/icons/mysql.svg?raw';
import mongoLogo from 'simple-icons/icons/mongodb.svg?raw';
import postgresLogo from 'simple-icons/icons/postgresql.svg?raw';
import gitLogo from 'simple-icons/icons/git.svg?raw';
import githubLogo from 'simple-icons/icons/github.svg?raw';

const $ = (selector, root = document) => root.querySelector(selector);
const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const technologyLogos = {
  PHP: phpLogo, HTML: htmlLogo, CSS: cssLogo, JavaScript: jsLogo, Dart: dartLogo,
  Laravel: laravelLogo, React: reactLogo, 'Node.js': nodeLogo, 'Express.js': expressLogo,
  Flutter: flutterLogo, MySQL: mysqlLogo, MongoDB: mongoLogo, PostgreSQL: postgresLogo,
  Git: gitLogo, GitHub: githubLogo
};
const icon = name => `<span class="tech-icon" aria-hidden="true">${technologyLogos[name] || escapeHTML(name.replace(/[^A-Za-z0-9]/g, '').slice(0, 3))}</span>`;
const navItems = ['Home','About','Skills','Projects','Certificates','Seminars','Achievements','Education','Contact'];

function projectCard(project) {
  const media = project.image
    ? `<img src="${escapeHTML(project.image)}" alt="Screenshot of ${escapeHTML(project.title)}" loading="lazy">`
    : `<div class="project-placeholder"><span class="placeholder-orbit">${escapeHTML(project.number)}</span><p>${escapeHTML(project.note || 'Add a project image path in src/data.js')}</p></div>`;
  const tech = project.technologies?.length ? `<div class="tag-row">${project.technologies.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>` : '';
  return `<article class="project-card reveal"><div class="project-media">${media}<span class="project-index">${escapeHTML(project.number)}</span></div><div class="project-copy"><p class="eyebrow">${escapeHTML(project.eyebrow || project.category || 'Project')}</p><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p>${project.role ? `<p class="role"><b>Role</b> ${escapeHTML(project.role)}</p>` : ''}${tech}<div class="project-links">${project.live ? `<a class="text-link" href="${escapeHTML(project.live)}" target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>` : ''}${project.github ? `<a class="text-link" href="${escapeHTML(project.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>` : ''}</div></div></article>`;
}

function certificateCard(certificate, index) {
  const image = certificate.image || '';
  return `<article class="certificate-card reveal"><button class="certificate-art" type="button" data-certificate="${index}" aria-label="Preview certificate: ${escapeHTML(certificate.title)}">${image ? `<img src="${escapeHTML(image)}" alt="Certificate for ${escapeHTML(certificate.title)}" loading="lazy">` : `<span class="cert-seal">✳</span><span class="cert-label">Certificate<br>preview</span><span class="cert-lines"></span>`}<span class="preview-hint">View preview ↗</span></button><div class="certificate-info"><p class="eyebrow">${escapeHTML(certificate.date)} · ${escapeHTML(certificate.platform || 'Certificate')}</p><h3>${escapeHTML(certificate.title)}</h3><p>${escapeHTML(certificate.issuer)}</p></div></article>`;
}

function timelineCard(entry, label, index) {
  return `<article class="timeline-entry reveal"><span class="timeline-dot">${String(index + 1).padStart(2,'0')}</span><div class="timeline-copy"><p class="eyebrow">${escapeHTML(entry.date || label)}</p><h3>${escapeHTML(entry.title || entry.degree || entry.school)}</h3><p>${escapeHTML(entry.description || entry.issuer || entry.organizer || entry.status || '')}</p>${entry.image ? `<img class="timeline-image" src="${escapeHTML(entry.image)}" alt="${escapeHTML(entry.title || label)}" loading="lazy">` : ''}</div></article>`;
}

const skillsMarkup = skills.map(group => `<article class="skill-card reveal"><div class="skill-heading"><span class="skill-symbol">${group.icon}</span><h3>${escapeHTML(group.group)}</h3></div><div class="skill-list">${group.items.map(([name, desc]) => `<div class="skill-item">${icon(name)}<span><b>${escapeHTML(name)}</b><small>${escapeHTML(desc)}</small></span></div>`).join('')}</div></article>`).join('');
const marqueeItems = [...techMarquee, ...techMarquee].map((name, i) => `<span class="marquee-item" ${i === techMarquee.length ? 'aria-hidden="true"' : ''}>${icon(name)}<b>${escapeHTML(name)}</b></span>`).join('');
const hasEmail = Boolean(personal.email);
const hasSocial = Boolean(personal.github);

$('#app').innerHTML = `
  <div class="ambient ambient-one" aria-hidden="true"></div><div class="ambient ambient-two" aria-hidden="true"></div>
  <header class="site-header"><a class="brand" href="#home" aria-label="${escapeHTML(personal.name)} home"><span class="brand-mark">p.</span><span>peraja<span class="brand-dot">.</span></span></a><nav class="desktop-nav" aria-label="Main navigation">${navItems.map(item => `<a href="#${item.toLowerCase()}">${item}</a>`).join('')}</nav><div class="header-actions"><button class="theme-toggle" aria-label="Switch to dark theme" title="Toggle theme"><span class="theme-glyph">☾</span></button><button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></div></header>
  <nav class="mobile-nav" aria-label="Mobile navigation">${navItems.map(item => `<a href="#${item.toLowerCase()}">${item}<span>↗</span></a>`).join('')}</nav>
  <main>
    <section class="hero section-shell" id="home"><div class="hero-copy"><p class="eyebrow hero-kicker"><span class="status-dot"></span> A creative mind in progress</p><p class="hello">HELLO, I'M ${escapeHTML(personal.firstName.toUpperCase())}<span class="pink-period">!</span></p><h1>Creative Developer <span class="ampersand">&</span><br><span class="heading-serif">IT Student</span></h1><p class="hero-description">${escapeHTML(personal.tagline)}</p><div class="hero-actions"><a class="button button-primary" href="#projects">Explore my projects <span>↗</span></a><a class="button button-soft" href="#contact">Contact me <span>♡</span></a></div><div class="hero-footnote"><span class="mini-sparkle">✳</span> Building, learning, and imagining what comes next.</div></div><div class="hero-art" aria-label="Illustration of a floating creative workspace"><div class="art-halo"></div><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><span class="float-star star-a">✳</span><span class="float-star star-b">✦</span><span class="float-star star-c">✧</span><span class="float-flower flower-a">✿</span><span class="float-flower flower-b">✿</span><div class="art-note note-a">{ ideas }</div><div class="art-note note-b">design · code · repeat</div><div class="laptop-scene"><div class="laptop-screen"><div class="screen-top"><span></span><span></span><span></span><i>workspace.exe</i></div><div class="screen-code"><span class="code-pink">const</span> <span class="code-yellow">dream</span> = () =&gt; {<br><span class="indent code-blue">create</span>(<span class="code-green">"something lovely"</span>);<br><span class="code-pink">return</span> <span class="code-yellow">keepGoing</span>();<br>}</div><div class="screen-sticker">✿</div></div><div class="laptop-base"></div><div class="laptop-shadow"></div></div><div class="coffee-cup"><span>♡</span></div><div class="art-cube"><span></span><span></span><span></span></div><div class="art-sphere"></div><div class="art-flower-pot"><i>✿</i><i>✿</i><b></b></div></div><a href="#about" class="scroll-cue"><span></span> Scroll to explore</a></section>
    <section class="intro-band"><div class="intro-inner"><span>CREATIVE CODE</span><i>✳</i><span>THOUGHTFUL DESIGN</span><i>✳</i><span>ALWAYS LEARNING</span><i>✳</i><span>CREATIVE CODE</span></div></section>
    <section class="section-shell section-pad" id="about"><div class="section-heading reveal"><p class="eyebrow">01 · A little about me</p><h2>Curious by nature.<br><span class="heading-serif">Creative by choice.</span></h2></div><div class="about-grid"><div class="about-photo-wrap reveal"><div class="photo-frame"><img src="${escapeHTML(personal.photo)}" alt="Portrait of ${escapeHTML(personal.name)}" loading="lazy"><span class="photo-caption">hello, it's me <span>♡</span></span></div><span class="photo-sparkle">✳</span><span class="photo-flower">✿</span></div><div class="about-copy reveal"><p class="large-copy">I'm <b>${escapeHTML(personal.name)}</b>, a ${escapeHTML(personal.year.toLowerCase())} exploring the space where creativity meets technology.</p><p>My interests include programming, web development, mobile applications, and learning how technology can make useful ideas real. I'm working toward becoming a thoughtful developer who creates meaningful digital experiences.</p><div class="about-facts"><div><span>Currently studying</span><b>${escapeHTML(personal.degree)}</b></div><div><span>At</span><b>${escapeHTML(personal.school)}</b></div></div><a class="text-link" href="#education">More about my journey <span>↗</span></a></div></div></section>
    <section class="skills-section section-pad" id="skills"><div class="section-shell"><div class="section-heading reveal"><p class="eyebrow">02 · The things I work with</p><h2>Tools for making<br><span class="heading-serif">ideas happen.</span></h2><p class="section-subtitle">A growing toolkit for building across the web, mobile, and data.</p></div><div class="marquee-window"><div class="marquee-track">${marqueeItems}</div></div><div class="skill-grid">${skillsMarkup}</div><div class="build-panel reveal"><div><p class="eyebrow">And what I can build</p><h3>Useful things, made with care.</h3></div><div class="build-list">${['Web applications','Mobile applications','Database-driven systems','Management systems','Responsive websites'].map((x,i) => `<span><i>0${i+1}</i>${x}</span>`).join('')}</div></div></div></section>
    <section class="section-shell section-pad" id="projects"><div class="section-heading heading-row reveal"><div><p class="eyebrow">03 · Selected work</p><h2>Ideas made <span class="heading-serif">real.</span></h2></div><span class="heading-aside">A few things I've helped bring to life <i>↘</i></span></div><div class="project-grid">${projects.map(projectCard).join('')}</div></section>
    <section class="cert-section section-pad" id="certificates"><div class="section-shell"><div class="section-heading heading-row reveal"><div><p class="eyebrow">04 · Learning milestones</p><h2>Little pieces of <span class="heading-serif">proof.</span></h2></div><p class="heading-aside">Learning is a journey worth keeping track of.</p></div><div class="certificate-grid">${certificates.length ? certificates.map(certificateCard).join('') : '<p class="empty-note">Certificates will appear here when added to <code>src/data.js</code>.</p>'}</div></div></section>
    <section class="section-shell section-pad" id="seminars"><div class="section-heading reveal"><p class="eyebrow">05 · Learning together</p><h2>Seminars & <span class="heading-serif">trainings.</span></h2><p class="section-subtitle">Places where I can keep listening, learning, and growing.</p></div><div class="timeline">${seminars.length ? seminars.map((e,i) => timelineCard(e,'Seminar',i)).join('') : '<div class="empty-state reveal"><span>✳</span><p>Seminars and training details can be added here as they are confirmed.</p><small>No attendance details have been supplied yet.</small></div>'}</div></section>
    <section class="achievement-section section-pad" id="achievements"><div class="section-shell"><div class="section-heading reveal"><p class="eyebrow">06 · Milestones along the way</p><h2>Moments worth <span class="heading-serif">celebrating.</span></h2></div><div class="achievement-grid">${achievements.length ? achievements.map((e,i) => timelineCard(e,'Achievement',i)).join('') : '<div class="achievement-note reveal"><span class="large-asterisk">✳</span><div><h3>Room for what comes next.</h3><p>Verified recognitions and achievements can be added in <code>src/data.js</code> whenever you’re ready.</p></div></div>'}</div></div></section>
    <section class="section-shell section-pad" id="education"><div class="section-heading reveal"><p class="eyebrow">07 · Where I'm learning</p><h2>Building a strong <span class="heading-serif">foundation.</span></h2></div><div class="education-card reveal"><div class="education-badge">✿</div><div><p class="eyebrow">${escapeHTML(education[0].status)}</p><h3>${escapeHTML(education[0].degree)}</h3><p>${escapeHTML(education[0].school)}</p></div><span class="education-line"></span><span class="education-date">${escapeHTML(education[0].date || 'Learning in progress')}</span></div></section>
    <section class="contact-section section-pad" id="contact"><div class="section-shell contact-grid"><div class="contact-copy reveal"><p class="eyebrow">08 · Say hello</p><h2>Have an idea?<br><span class="heading-serif">Let's talk.</span></h2><p>Have a question, a project idea, or just want to connect? Leave a note and I'll be glad to hear from you.</p><div class="contact-links">${hasEmail ? `<a href="mailto:${escapeHTML(personal.email)}">${escapeHTML(personal.email)} ↗</a>` : '<span class="muted-link">Add a verified email in src/data.js</span>'}${hasSocial ? `<a href="${escapeHTML(personal.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>` : ''}</div><span class="contact-doodle" aria-hidden="true">✳</span></div><form class="contact-form reveal" id="contact-form"><label>Your name<input name="name" autocomplete="name" required maxlength="100" placeholder="What should I call you?"></label><label>Your email<input name="email" type="email" autocomplete="email" required maxlength="200" placeholder="you@example.com"></label><label>Subject<input name="subject" required maxlength="160" placeholder="What's on your mind?"></label><label>Your message<textarea name="message" required maxlength="3000" rows="4" placeholder="A little note goes here..."></textarea></label><button class="button button-primary" type="submit">Prepare email <span>↗</span></button><p class="form-status" id="form-status" role="status" aria-live="polite">${hasEmail ? 'Your email app will open with your note ready to send.' : 'Add a verified email in src/data.js to enable email delivery.'}</p></form></div></section>
  </main><footer class="site-footer"><a class="brand" href="#home"><span class="brand-mark">p.</span><span>peraja<span class="brand-dot">.</span></span></a><p>Made with curiosity & a little extra pink <span>♡</span></p><a class="back-top" href="#home">Back to top ↑</a></footer>
  <dialog class="certificate-dialog" aria-label="Certificate preview"><button class="dialog-close" aria-label="Close preview">×</button><button class="dialog-zoom" aria-label="Zoom certificate" title="Zoom certificate">＋</button><div class="dialog-content"></div><p class="dialog-caption"></p></dialog>`;

// Theme preference, reduced motion, and simple pointer-reactive hero depth.
const themeToggle = $('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
function updateThemeControl() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  $('.theme-glyph').textContent = dark ? '☀' : '☾';
}
updateThemeControl();
themeToggle.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  updateThemeControl();
});

const menuToggle = $('.menu-toggle');
function closeMenu() { document.body.classList.remove('menu-open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Open menu'); }
menuToggle.addEventListener('click', () => {
  const open = !document.body.classList.contains('menu-open');
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
$('.mobile-nav').addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  }), { rootMargin: '-34% 0px -58% 0px' });
  sections.forEach(section => sectionObserver.observe(section));
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));

const heroArt = $('.hero-art');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(pointer: fine)').matches) {
  heroArt.addEventListener('pointermove', e => {
    const rect = heroArt.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroArt.style.setProperty('--tilt-x', `${(-y * 4).toFixed(2)}deg`);
    heroArt.style.setProperty('--tilt-y', `${(x * 5).toFixed(2)}deg`);
  });
  heroArt.addEventListener('pointerleave', () => { heroArt.style.setProperty('--tilt-x','0deg'); heroArt.style.setProperty('--tilt-y','0deg'); });
}

const dialog = $('.certificate-dialog');
document.querySelectorAll('[data-certificate]').forEach(button => button.addEventListener('click', () => {
  const cert = certificates[Number(button.dataset.certificate)];
  $('.dialog-content').classList.remove('zoomed');
  $('.dialog-zoom').textContent = '＋';
  $('.dialog-zoom').setAttribute('aria-label', 'Zoom certificate');
  $('.dialog-content').innerHTML = cert.image ? `<img src="${escapeHTML(cert.image)}" alt="Certificate for ${escapeHTML(cert.title)}">` : `<div class="certificate-placeholder-large"><span>✳</span><b>Certificate image coming soon</b><small>Add the real certificate path in src/data.js</small></div>`;
  $('.dialog-caption').textContent = cert.title;
  dialog.showModal();
}));
$('.dialog-close').addEventListener('click', () => dialog.close());
$('.dialog-zoom').addEventListener('click', () => {
  const content = $('.dialog-content');
  const zoomed = content.classList.toggle('zoomed');
  $('.dialog-zoom').textContent = zoomed ? '−' : '＋';
  $('.dialog-zoom').setAttribute('aria-label', zoomed ? 'Fit certificate to window' : 'Zoom certificate');
});
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

$('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = $('#form-status');
  if (!personal.email) { status.textContent = 'Messages are not configured yet. Add a verified email in src/data.js first.'; status.classList.add('error'); return; }
  const formData = new FormData(e.currentTarget);
  const subject = encodeURIComponent(formData.get('subject'));
  const body = encodeURIComponent(`From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`);
  status.textContent = 'Opening your email app with the message ready. It has not been sent yet.';
  status.classList.remove('error');
  window.location.href = `mailto:${encodeURIComponent(personal.email)}?subject=${subject}&body=${body}`;
});
