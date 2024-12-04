
  
  // script.js
function showDescription(card) {
    // Seleciona o parágrafo de descrição dentro do card clicado
    const description = card.querySelector('.description');
  
    // Alterna a exibição do texto (aparece/desaparece)
    if (description.style.display === 'block') {
      description.style.display = 'none';
    } else {
      description.style.display = 'block';
    }
  }