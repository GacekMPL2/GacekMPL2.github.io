function closeNotification() {
    document.getElementById('notification').style.display = 'none';
    document.querySelector('.navbar').style.top = '0';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close-popup').addEventListener('click', function() {
        document.getElementById('cookiePopup').style.display = 'none';
        const footer = document.querySelector('footer');
        if (window.innerWidth <= 768) {
            footer.classList.add('footer-padding-small');
            footer.classList.remove('footer-padding-large');
        } else {
            footer.classList.add('footer-padding-large');
            footer.classList.remove('footer-padding-small');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    initializeHoverInput();
});


document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.no-favourite, .favourite');
    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (image.classList.contains('no-favourite')) {
                image.classList.remove('no-favourite');
                image.classList.add('favourite');
            } else if (image.classList.contains('favourite')) {
                image.classList.remove('favourite');
                image.classList.add('no-favourite');
            }
        });
    });
});
function initializeHoverInput() {
    const navInput = document.querySelector('.nav-input');
    const input = document.getElementById('search-input');

    function showInput() {
        if (window.innerWidth >= 1200) {
            navInput.classList.add('show-input');
        }
    }

    function hideInput() {
        if (window.innerWidth >= 1200 && input.value.trim() === '') {
            navInput.classList.remove('show-input');
        }
    }

    navInput.addEventListener('mouseenter', showInput);
    navInput.addEventListener('mouseleave', hideInput);

    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            navInput.classList.add('show-input');
        }
    });
}

document.querySelectorAll('.carousel').forEach(carousel => {
    const carouselId = carousel.getAttribute('id');
    const indicators = document.querySelectorAll(`[data-bs-target="#${carouselId}"]`);

    carousel.addEventListener('slid.bs.carousel', function (event) {
        const activeIndex = event.to;

        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.removeAttribute('aria-current');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        
        document.querySelectorAll('.accordion-body').forEach(body => {
          body.classList.remove('show');
        });
        
        target.classList.add('show');
      });
    });
  });