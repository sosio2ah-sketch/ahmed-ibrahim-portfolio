// ============================
// عرض المشاريع تلقائياً (1.jpg - 33.jpg)
// ============================
const projectsGallery = document.getElementById('projectsGallery');
const totalProjects = 33;

for (let i = 1; i <= totalProjects; i++) {
    const img = document.createElement('img');
    img.src = i + '.jpg';
    img.alt = 'مشروع ' + i;
    img.loading = 'lazy';
    img.onclick = () => openLightbox(img.src);
    projectsGallery.appendChild(img);
}

// ============================
// عرض الشهادات تلقائياً (Cert1.jpg - Cert13.jpg)
// ============================
const certificatesGrid = document.getElementById('certificatesGrid');
const totalCertificates = 13;

for (let i = 1; i <= totalCertificates; i++) {
    const img = document.createElement('img');
    img.src = 'Cert' + i + '.jpg';
    img.alt = 'شهادة ' + i;
    img.loading = 'lazy';
    img.onclick = () => openLightbox(img.src);
    certificatesGrid.appendChild(img);
}

// ============================
// نافذة عرض الصور (Lightbox)
// ============================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
}

closeBtn.onclick = closeLightbox;

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
};

// إغلاق بـ ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ============================
// التمرير السلس (Smooth Scroll)
// ============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
