document.addEventListener('DOMContentLoaded', () => {
  const slots = document.querySelectorAll('.slot');

  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      // Si une carte est déjà là, on ne fait rien
      if (slot.querySelector('img')) return;

      const card = document.createElement('img');
      card.src = 'imagescard/CAT.jpg'; // Exemple d'une carte
      card.alt = 'Carte';
      card.style.width = '100%';
      card.style.height = '100%';
      card.style.objectFit = 'cover';
      card.style.borderRadius = '6px';

      slot.innerHTML = ''; // On efface le texte de la case
      slot.appendChild(card);
    });
  });
});
