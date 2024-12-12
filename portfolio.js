const portfolioData = [
    { src: "Illustrations/Illustration_sans_titre 9.jpg", alt: "Carte Magic : the Gathering", dataId: "carte-magic", caption: "Carte Magic : the Gathering" },
    { src: "Illustrations/cadavre_exquis_OK.jpg", alt: "Pepperovni", dataId: "Pepperovni", caption: "Pepperovni" },
    { src: "Illustrations/Cueille-la-nuit.jpg", alt: "Cueille la Nuit", dataId: "Cueille-la-nuit", caption: "Cueille la Nuit" },
    { src: "Illustrations/skateandpizza.jpg", alt: "Skate and pizza", dataId: "skateandpizza", caption: "Skate and pizza" },
    { src: "Illustrations/Illustration_sans_titre (8).jpg", alt: "Vacarme magazine", caption: "Vacarme magazine" },
    { src: "Illustrations/vacarme1.jpeg", alt: "Vacarme magazine", dataId: "vacarme", caption: "Vacarme magazine" },
    { src: "Illustrations/Carnet1.jpg", alt: "Projet Aventure", dataId: "carnet de correspondance", caption: "Projet Aventure" },
    { src: "Illustrations/monster.jpg", alt: "Projet Aventure", dataId: "monster", caption: "Projet Aventure" },
    { src: "Illustrations/InjectionTesto.png", alt: "Projet Aventure", dataId: "Trans", caption: "Projet Aventure" },
    { src: "Illustrations/MamTamAffiche.png", alt: "Projet Aventure", dataId: "MamTamAffiche", caption: "Projet Aventure" }
];

const portfolioSection = document.createElement('section');
portfolioSection.id = 'portfolio';

const galleryDiv = document.createElement('div');
galleryDiv.className = 'gallery';

portfolioData.forEach(item => {
    const figure = document.createElement('figure');
    figure.setAttribute('tabindex', '0');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt || "Illustration sans description";
    img.loading = "lazy";  // Lazy loading

    if (item.dataId) {
        img.setAttribute('data-id', item.dataId);
    }

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    galleryDiv.appendChild(figure);
});

portfolioSection.appendChild(galleryDiv);

// Insérer la section du portfolio avant la section de contact si elle existe
const contactSection = document.querySelector('#contact');
if (contactSection) {
    contactSection.parentNode.insertBefore(portfolioSection, contactSection);
}



