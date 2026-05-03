// Dados para os componentes (Facilidade de Manutenção)
const galleryData = [
    { year: '2023', images: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400', 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400'] },
    { year: '2024', images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400'] },
    { year: '2025', images: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400'] }
];

const rulesData = [
    { title: 'Regulamento Geral FETI', description: 'Diretrizes de participação, comportamento e critérios de avaliação para todos os expositores.', link: '#' },
    { title: 'Competição de Robótica', description: 'Regras técnicas para as arenas de combate e percurso.', link: '#' },
    { title: 'Mostra Científica', description: 'Normas para submissão de artigos e apresentação de banners.', link: '#' }
];

// Renderizar Galeria
const galleryTabs = document.getElementById('gallery-tabs');
const galleryContent = document.getElementById('gallery-content');

function renderGallery(year) {
    galleryContent.innerHTML = '';
    const selected = galleryData.find(item => item.year === year);
    selected.images.forEach(img => {
        const div = document.createElement('div');
        div.className = 'photo-card';
        div.innerHTML = `<img src="${img}" alt="FETI ${year}">`;
        galleryContent.appendChild(div);
    });
}

galleryData.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = item.year;
    btn.onclick = (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderGallery(item.year);
    };
    galleryTabs.appendChild(btn);
});

// Renderizar Acordeão de Regras
const accordionContainer = document.getElementById('rules-accordion');
rulesData.forEach(rule => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
        <div class="accordion-header">
            <span><strong>${rule.title}</strong></span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="accordion-content">
            <p>${rule.description}</p>
            <br>
            <a href="${rule.link}" class="btn-primary" style="color:var(--primary)">Baixar PDF (Regras)</a>
        </div>
    `;
    item.querySelector('.accordion-header').onclick = () => {
        const content = item.querySelector('.accordion-content');
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
    };
    accordionContainer.appendChild(item);
});

// Acessibilidade: Fonte
let currentFontSize = 16;
function changeFontSize(delta) {
    const newSize = currentFontSize + delta;
    if (newSize >= 12 && newSize <= 24) {
        currentFontSize = newSize;
        document.body.style.fontSize = currentFontSize + 'px';
    }
}

// Acessibilidade: Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Inicializar
renderGallery('2023');