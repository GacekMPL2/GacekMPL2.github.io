function CurlingText() {
    const checkbox = document.getElementById('expandable-checkbox');
    const textPosition = document.querySelector('.text-position');
    const expandButton = document.querySelector('.expand-button');
    const buttonText = expandButton.querySelector('.button-text');
    const expandIcon = expandButton.querySelector('.expand-icon');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        textPosition.classList.add('expanded');
        buttonText.textContent = 'Zwiń';
        expandIcon.src = 'img/zwin.png';
      } else {
        textPosition.classList.remove('expanded');
        buttonText.textContent = 'Rozwiń';
        expandIcon.src = 'img/rozwin.png';
      }
    });
  
    if (checkbox.checked) {
      expandButton.classList.add('expanded');
      buttonText.textContent = 'Zwiń';
      expandIcon.src = 'img/zwin.png';
    } else {
      expandButton.classList.remove('expanded');
      buttonText.textContent = 'Rozwiń';
      expandIcon.src = 'img/rozwin.png';
    }
  }
  
  document.addEventListener('DOMContentLoaded', CurlingText);
