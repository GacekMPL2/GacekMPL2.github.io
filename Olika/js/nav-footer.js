function loadMenuFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(xhttp.responseText, 'text/html');

            var notificationContent = doc.querySelector('#notification').outerHTML;
            var navContent = doc.querySelector('nav').outerHTML;
            var footerContent = doc.querySelector('footer').outerHTML;
            var cookieContent = doc.querySelector('#cookiePopup').outerHTML;

            document.body.insertAdjacentHTML('afterbegin', navContent);
            document.body.insertAdjacentHTML('afterbegin', notificationContent);
            document.body.insertAdjacentHTML('beforeend', footerContent);
            document.body.insertAdjacentHTML('beforeend', cookieContent);

            initializeHoverInput();
        }
    };
    xhttp.open('GET', 'nav-footer.html', true);
    xhttp.send();
}

window.onload = function() {
    loadMenuFooter();
};



function closeNotification() {
    document.getElementById('notification').style.display = 'none';
    document.querySelector('.navbar').style.top = '0';
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.closest('.close-popup')) { 
            document.getElementById('cookiePopup').style.display = 'none';
            const footer = document.querySelector('footer');
            if (window.innerWidth <= 768) {
                footer.classList.add('footer-padding-small');
                footer.classList.remove('footer-padding-large');
            } else {
                footer.classList.add('footer-padding-large');
                footer.classList.remove('footer-padding-small');
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    initializeHoverInput();
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
