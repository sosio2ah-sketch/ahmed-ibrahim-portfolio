// ============================
// عرض المشاريع تلقائياً (1.jpg - 33.jpg)
// يدعم صيغ: jpg, JPG, png, jpeg
// ============================
const projectsGallery = document.getElementById('projectsGallery');
const totalProjects = 33;

const extensions = ['.jpg', '.JPG', '.png', '.PNG', '.jpeg'];

function tryLoadImage(basePath, extensions, onSuccess, onFail) {
    let index = 0;
    
    function tryNext() {
        if (index >= extensions.length) {
            onFail();
            return;
        }
        
        const testImg = new Image();
        testImg.onload = () => onSuccess(basePath + extensions[index]);
        testImg.onerror = () => {
            index++;
            tryNext();
        };
        testImg.src = basePath + extensions[index];
    }
    
    tryNext();
}

for (let i = 1; i <= totalProjects; i++) {
    const img = document.createElement('img');
    img.alt = 'مشروع ' + i;
    img.loading = 'lazy';
    
    tryLoadImage(
        i.toString(),
        extensions,
        (src) => {
            img.src = src;
            img.onclick = () => openLightbox(src);
            projectsGallery.appendChild(img);
        },
        () => {
            // إذا ما لقى الصورة، ما يضيف شي
            console.warn('لم يتم العثور على صورة المشروع رقم ' + i);
        }
    );
}

// ============================
// عرض الشهادات تلقائياً (Cert1.jpg - Cert13.jpg)
// ============================
const certificatesGrid = document.getElementById('certificatesGrid');
const totalCertificates = 13;
const certExtensions = ['.jpg', '.JPG', '.png', '.PNG', '.jpeg'];

for (let i = 1; i <= totalCertificates; i++) {
    const img = document.createElement('img');
    img.alt = 'شهادة ' + i;
    img.loading = 'lazy';
    
    tryLoadImage(
        'Cert' + i,
        certExtensions,
        (src) => {
            img.src = src;
            img.onclick = () => openLightbox(src);
            certificatesGrid.appendChild(img);
        },
        () => {
            console.warn('لم يتم العثور على الشهادة رقم ' + i);
        }
    );
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
