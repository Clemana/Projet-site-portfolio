document.addEventListener("DOMContentLoaded", () => {
  const notes = [
    { score: "8/20", comment: "Pas assez de travail, il faut persévérer !" },
    { score: "12/20", comment: "Des efforts notables, continuez ainsi !" },
    { score: "16/20", comment: "Très bon travail, bravo !" },
    { score: "5/20", comment: "Il faut vraiment travailler plus sérieusement." },
    { score: "18/20", comment: "Excellent, presque parfait !" }
  ];

  const noteElement = document.getElementById("note");
  const scoreElement = noteElement.querySelector("span");
  const commentElement = noteElement.querySelector("p");

  noteElement.addEventListener("click", () => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    scoreElement.textContent = randomNote.score;
    commentElement.textContent = randomNote.comment;
  });

  const projectDetails = {
    "carte-magic": {
      title: "Cartes Magic : The Gathering",
      description: "J'ai eu comme projet de réimaginer des cartes Magic: The Gathering avec mon propre style artistique",
      images: [
        { src: "Illustrations/Illustration_sans_titre 9.jpg" },
        { src: "Illustrations/Carte_magic_1.jpg" },
        { src: "Illustrations/Carte_magic_2.jpg" }
      ]
    },
    "vacarme": {
      title: "Vacarme magazine",
      description: "J’ai réalisé les illustrations pour la revue Littéraire Main Blanche à Montréal. Graphisme par Solène Lautridou.",
      images: [
        { src: "Illustrations/vacarme1.jpeg" },
        { src: "Illustrations/vacarme2.jpeg" },
        { src: "Illustrations/Vacarme5.jpeg" },
        { src: "Illustrations/Vacarme4.jpeg" },
        { src: "Illustrations/Vacarme6.jpeg" },
        { src: "Illustrations/Vacarme11.jpeg" },
        { src: "Illustrations/Vacarme12.jpeg" }
      ]
    },
    "Pepperovni": {
      title: "Pepperovni",
      description: "Coloriage réalisé pour le collectif Rien à Feutre, en partenariat avec le magazine Kiblind...",
      images: [{ src: "Illustrations/cadavre_exquis_OK.jpg" }]
    },
    "skateandpizza": {
      title: "Skate and pizza",
      description: "Affiche conçue sous la direction artistique d'Océane Urvois pour La CIB de La Réunion...",
      images: [{ src: "Illustrations/skateandpizza.jpg" }]
    },
    "Cueille-la-nuit": {
      title: "Cueille la nuit",
      description: "Illustration créée pour des t-shirts en collaboration avec un collectif de sérigraphie “Cueille La Nuit”.",
      images: [{ src: "Illustrations/Cueille-la-nuit.jpg" }]
    },
    "monster": {
      title: "monster",
      description: "Projet de BD. L'idée de départ était de dessiner plusieurs planche...",
      images: [{ src: "Illustrations/monster.jpg" }]
    },
    "carnet de correspondance": {
      title: "carnet de correspondance",
      description: "Brouillon de Procreate. Un ensemble de dessin sans destination...",
      images: [
        { src: "Illustrations/Carnet1.jpg" },
        { src: "Illustrations/Carnet2.jpg" },
        { src: "Illustrations/Carnet3.jpg" },
        { src: "Illustrations/Carnet7.jpg" }
      ]
    },
    "Trans": {
      title: "ok",
      description: "",
      images: [
        { src: "Illustrations/Design.jpg" },
        { src: "Illustrations/Test2.png" }
      ]
    },
    "MamTamAffiche": {
      title: "Mam Tam Affiche",
      description: "Affiche réalisée à six mains avec Chloé Lozano et Océane Urvois...",
      images: [{ src: "Illustrations/MamTamAffiche.png" }]
    }
  };

  const galleryImages = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("modal-title");
  const lightboxDescription = document.getElementById("modal-description");
  const closeLightbox = document.getElementById("close-lightbox");
  const prevImage = document.getElementById("prev-image");
  const nextImage = document.getElementById("next-image");
  const backdrop = document.getElementById("backdrop");
  const openButton = document.getElementById("open-button");
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");

  let currentProject = null;
  let currentImageIndex = 0;

  // Fonction pour mettre à jour le contenu de la lightbox
  function updateLightboxContent() {
    const imageDetails = currentProject.images[currentImageIndex];
    lightboxImage.src = imageDetails.src;
    lightboxTitle.textContent = currentProject.title;
    lightboxDescription.textContent = currentProject.description;
    prevImage.style.display = currentImageIndex > 0 ? "block" : "none";
    nextImage.style.display = currentImageIndex < currentProject.images.length - 1 ? "block" : "none";
  }

  // Ouvrir la lightbox
  galleryImages.forEach((img) => img.addEventListener("click", () => {
    // Fermer la modal avant d'ouvrir un nouveau projet
    modal.style.display = "none";
    modalContent.innerHTML = "";
    openButton.textContent = "Bavardages";

    currentProject = projectDetails[img.dataset.id];
    currentImageIndex = 0;
    updateLightboxContent();
    lightbox.style.display = "flex";
    backdrop.style.display = "block";
  }));

  // Changer d'image dans la lightbox
  prevImage.addEventListener("click", () => { 
    if (currentImageIndex > 0) currentImageIndex--; 
    updateLightboxContent(); 
  });
  nextImage.addEventListener("click", () => { 
    if (currentImageIndex < currentProject.images.length - 1) currentImageIndex++; 
    updateLightboxContent(); 
  });

  // Fermer la lightbox et la modal
  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    backdrop.style.display = "none";
    modal.style.display = "none";  // Ajouté pour fermer la modal
    modalContent.innerHTML = "";  // Réinitialisation du contenu de la modal
    lightboxImage.style.visibility = "visible";
    openButton.textContent = "Bavardages";  // Réinitialisation du texte du bouton
  });

  // Fonction pour ouvrir/fermer la modal
  openButton.addEventListener("click", () => {
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
      lightboxImage.style.visibility = "hidden";
      modalContent.innerHTML = `<h3>${currentProject.title}</h3><p>${currentProject.description}</p>`;
      openButton.textContent = "CHUUTT !";
    } else {
      modal.style.display = "none";
      modalContent.innerHTML = "";
      lightboxImage.style.visibility = "visible";
      openButton.textContent = "Bavardages";
    }
  });

  // Gestion du swipe sur mobile
  let touchStartX = 0;
  let touchEndX = 0;
  lightboxImage.addEventListener("touchstart", (e) => touchStartX = e.changedTouches[0].screenX);
  lightboxImage.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (Math.abs(touchEndX - touchStartX) > 50) (touchEndX < touchStartX ? nextImage : prevImage).click();
  });
});
