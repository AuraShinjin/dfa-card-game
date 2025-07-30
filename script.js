<script>
document.addEventListener("DOMContentLoaded", function () {
  // Liste des cartes de la pioche (à personnaliser)
  const piocheCartes = [
    "imagescard/CAT.jpg",
    "imagescard/LOMBRICOR.jpg"
    ];

  // Mélange aléatoire
  function melanger(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  melanger(piocheCartes);

  // Création du bouton de pioche
  const boutonPioche = document.createElement("button");
  boutonPioche.textContent = "Piocher";
  boutonPioche.style.position = "absolute";
  boutonPioche.style.bottom = "320px";
  boutonPioche.style.left = "180px";
  boutonPioche.style.zIndex = "10";
  boutonPioche.style.padding = "10px 20px";
  boutonPioche.style.backgroundColor = "#a02038";
  boutonPioche.style.border = "none";
  boutonPioche.style.borderRadius = "8px";
  boutonPioche.style.color = "white";
  boutonPioche.style.cursor = "pointer";

  document.body.appendChild(boutonPioche);

  // La main du joueur 1 est en bas à gauche (près de l'image "MAIN JOUEUR1")
  const mainJoueur = document.createElement("div");
  mainJoueur.style.position = "absolute";
  mainJoueur.style.bottom = "100px";
  mainJoueur.style.left = "50px";
  mainJoueur.style.display = "flex";
  mainJoueur.style.gap = "10px";
  mainJoueur.style.zIndex = "10";
  document.body.appendChild(mainJoueur);

  // Action de pioche
  boutonPioche.addEventListener("click", () => {
    if (piocheCartes.length === 0) {
      alert("La pioche est vide !");
      return;
    }

    const carteURL = piocheCartes.pop();
    const carte = document.createElement("img");
    carte.src = carteURL;
    carte.style.width = "110px";
    carte.style.height = "140px";
    carte.style.cursor = "grab";
    carte.draggable = true;

    // Permet de déplacer la carte librement
    carte.addEventListener("mousedown", function (e) {
      carte.style.position = "absolute";
      carte.style.zIndex = 1000;

      const shiftX = e.clientX - carte.getBoundingClientRect().left;
      const shiftY = e.clientY - carte.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        carte.style.left = pageX - shiftX + 'px';
        carte.style.top = pageY - shiftY + 'px';
      }

      moveAt(e.pageX, e.pageY);

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      carte.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        carte.onmouseup = null;
      };
    });

    carte.ondragstart = () => false;

    mainJoueur.appendChild(carte);
  });
});
</script>
