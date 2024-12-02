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
  });

  

  const projectDetails = {
    "carte-magic": {
      title: "Cartes Magic : The Gathering", // Titre ajouté ici
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
        { src: "Illustrations/Vacarme12.jpeg" },
      ]
    },
    "Pepperovni":  {
        title: "Pepperovni",
        description: "Coloriage réalisé pour le collectif Rien à Feutre, en partenariat avec le magazine Kiblind. Ce dessin, créé à six mains en collaboration avec Julian Lagoutte et Ariane Corfmat, s'appuie sur le principe du cadavre exquis : la première personne initie un dessin, la deuxième prolonge les lignes de celui-ci, et la troisième l'enrichit pour donner vie à une œuvre collective et spontanée.",
        images: [
          { src: "Illustrations/cadavre_exquis_OK.jpg" }
        ]
      },
      "skateandpizza":  {
        title: "Skate and pizza",
        description: "Affiche conçue sous la direction artistique d'Océane Urvois pour La CIB de La Réunion, annonçant un événement inclusif au skatepark de La Saline.",
        images: [
          { src: "Illustrations/skateandpizza.jpg" }
        ]
      },
      "Cueille-la-nuit":  {
        title: "Cueille la nuit",
        description: "Illustration créée pour des t-shirts en collaboration avec un collectif de sérigraphie “Cueille La Nuit”. J'ai fait plusieurs déclinaison de couleurs.",
        images: [
          { src: "Illustrations/Cueille-la-nuit.jpg" }
        ]
      },
      "monster":  {
        title: "monster",
        description: "Projet de BD. L'idée de départ était de dessiner plusieurs planche et de laisser des bulles au personnage non remplies et proposer à différente personnes de ls remplir",
        images: [
          { src: "Illustrations/monster.jpg" }
        ]
      },
      "carnet de correspondance":  {
        title: "carnet de correspondance",
        description: "Brouillon de Procreate. Un ensemble de dessin sans destination ou de projets perdu et laisser de coter sur procreate",
        images: [
          { src: "Illustrations/Carnet1.jpg" },
          { src: "Illustrations/Carnet2.jpg" },
          { src: "Illustrations/Carnet3.jpg" },
          { src: "Illustrations/Carnet7.jpg" }
          
        ]
      },
      "Trans":  {
        title: "Trans",
        description: "Mon quotidien",
        images: [
          { src: "Illustrations/Design.jpg" },
          { src: "Illustrations/Test2.png" },
          
        ]
      },
      "MamTamAffiche":  {
        title: "Mam Tam Affiche",
        description: "Affiche réalisée à six mains avec Chloé Lozano et Océane Urvois pour le MamTam Shitfest, organisé par Fkliemfest Asso à l'International Paris. Nous avons imprimé ce visuel sur place grâce à un atelier de sérigraphie, sur divers supports tels que des t-shirts et du papier.",
        images: [
          { src: "Illustrations/MamTamAffiche.png" }
          
        ]
      },
      
      
  };
  

  
  document.addEventListener("DOMContentLoaded", () => {
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
  
    // Fonction pour afficher la lightbox avec le projet sélectionné
    function showLightbox(projectId) {
      const project = projectDetails[projectId];
      if (project) {
        currentProject = project;
        currentImageIndex = 0; // Réinitialiser à la première image
        updateLightboxContent();
        lightbox.style.display = "flex"; // Afficher la lightbox
        backdrop.style.display = "block"; // Afficher l'overlay (backdrop)
        backdrop.style.backdropFilter = "blur(10px)"; // Ajouter un flou de fond sur l'overlay
  
        // Réinitialiser la visibilité de l'image si la modale était ouverte
        lightboxImage.style.visibility = modal.style.display === "block" ? "hidden" : "visible";
  
        // Fermer la modale si elle est ouverte
        closeModal();
      }
    }
  
    // Fonction pour mettre à jour le contenu de la lightbox
    function updateLightboxContent() {
      const imageDetails = currentProject.images[currentImageIndex];
      lightboxImage.src = imageDetails.src;
      lightboxTitle.textContent = currentProject.title;
      lightboxDescription.textContent = currentProject.description;
  
      // Gérer la visibilité des flèches
      prevImage.style.display = currentImageIndex > 0 ? "block" : "none";
      nextImage.style.display = currentImageIndex < currentProject.images.length - 1 ? "block" : "none";
    }
  
    // Fonction pour fermer la lightbox
    function closeLightboxView() {
      lightbox.style.display = "none";
      backdrop.style.display = "none"; // Masquer l'overlay lorsque la lightbox est fermée
      closeModal(); // Fermer la modale si elle est ouverte
      openButton.textContent = "Bavardages"; // Réinitialiser le texte du bouton
    
  
      // Toujours rendre l'image visible après fermeture de la lightbox
      lightboxImage.style.visibility = "visible";
    }
  
    // Fonction pour ouvrir la modale
    function openModal() {
      modal.style.display = "block"; // Afficher la modale
      lightboxImage.style.visibility = "hidden"; // Masquer l'image derrière
  
      // Réinitialiser le contenu de la modale avant d'ajouter de nouvelles données
      modalContent.innerHTML = "";
      const modalTitle = document.createElement("h3");
      modalTitle.textContent = currentProject.title;
      const modalDescription = document.createElement("p");
      modalDescription.textContent = currentProject.description;
  
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(modalDescription);
    }
  
    // Fonction pour fermer la modale
    function closeModal() {
      modal.style.display = "none"; // Cacher la modale
      modalContent.innerHTML = ""; // Vider le contenu de la modale
      lightboxImage.style.visibility = "visible"; // Toujours rendre l'image visible après fermeture
    }
  
    // Navigation entre les images
    function showPrevImage() {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxContent();
      }
    }
  
    function showNextImage() {
      if (currentImageIndex < currentProject.images.length - 1) {
        currentImageIndex++;
        updateLightboxContent();
      }
    }
    
  
    // Ajouter des événements sur les images de la galerie
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        const projectId = img.getAttribute("data-id");
        showLightbox(projectId); // Ouvrir la lightbox pour ce projet
      });
    });
  
    // Écouteurs pour les boutons de navigation
    prevImage.addEventListener("click", showPrevImage);
    nextImage.addEventListener("click", showNextImage);
    closeLightbox.addEventListener("click", closeLightboxView);
  
    // Écouteur pour le bouton "Open"
   // Écouteur pour le bouton "Open"
openButton.addEventListener("click", () => {
  if (modal.style.display === "none" || modal.style.display === "") {
    openModal(); // Ouvrir la modale
    openButton.textContent = "CHUUTT !"; // Changer le texte du bouton
  } else {
    closeModal(); // Fermer la modale
    openButton.textContent = "Bavardages"; // Réinitialiser le texte du bouton
  }
});


  });
  
  document.addEventListener("DOMContentLoaded", () => {
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Distance minimale pour détecter un swipe
    
    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance < 0) {
          // Swipe gauche
          showNextImage();
        } else {
          // Swipe droite
          showPrevImage();
        }
      }
    }
  
    // Ajouter des événements pour les gestes de balayage
    lightboxImage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
  
    lightboxImage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  
    lightboxImage.addEventListener("touchmove", (e) => {
      e.preventDefault(); 
    }, { passive: false });
  });
  