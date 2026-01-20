const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
};

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const fullSrc = item.getAttribute('data-full');
    const caption = item.querySelector('figcaption')?.textContent || '';
    if (lightbox && lightboxImage && lightboxCaption && fullSrc) {
      lightboxImage.src = fullSrc;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

const whatsappForm = document.getElementById('whatsapp-form');
whatsappForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(whatsappForm);
  const name = formData.get('name');
  const message = formData.get('message');
  const text = `Hello Andreas, my name is ${name}. ${message}`;
  const url = `https://wa.me/307945471491?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
});
