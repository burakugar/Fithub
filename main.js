const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav__hamburger"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}


const hamburgerButton = document.getElementById("nav__hamburger");
const closeButton = document.getElementById("nav-close");
const sideMenu = document.getElementById("nav-menu");

const toggleMenu = () => {
    if (hamburgerButton.style.display === "block") {
        hamburgerButton.style.display = "none";
        closeButton.style.display = "block";
        sideMenu.style.transform = "translateX(0)";
        sideMenu.style.display = "block";
    } else {
        hamburgerButton.style.display = "block";
        closeButton.style.display = "none";
        sideMenu.style.transform = "translateX(-100%)";
        sideMenu.style.display = "none";
    }
};

hamburgerButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY >= 50) {
        navbar.classList.add('bg-header');
    } else {
        navbar.classList.remove('bg-header');
    }
};
window.addEventListener("scroll", scrollHeader);

const navLinks = document.querySelectorAll('.nav__menu a');

const makeLinkActive = (id) => {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-link');
        }
    });
};

const scrollSpy = () => {
    const fromTop = window.scrollY + 58;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            makeLinkActive(section.getAttribute('id'));
        }
    });
};

window.addEventListener('scroll', scrollSpy);

document.querySelectorAll('.program__shape').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.borderRadius = '0%';
    });
    item.addEventListener('mouseout', () => {
        item.style.borderRadius = '50%';
    });
});

window.addEventListener('scroll', () => {
    const divs = document.querySelectorAll('.div-transition');

    divs.forEach(div => {
        const divRect = div.getBoundingClientRect();
        const divTop = divRect.top;
        const divBottom = divRect.bottom;

        if (divTop < window.innerHeight && divBottom >= 0) {
            const visibleRatio = Math.min(divBottom, window.innerHeight) / window.innerHeight;
            div.style.opacity = visibleRatio;
            div.style.transform = `scale(${0.95 + visibleRatio * 0.05})`;
        } else {
            div.style.opacity = 0;
            div.style.transform = 'scale(0.95)';
        }
    });
});

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message'),
contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactUser.value === '') {
        contactMessage.classList.remove("color-green");
        contactMessage.classList.add("color-red");
        contactMessage.textContent = 'You must enter your email';
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    } else {
        contactUser.value = '';
    }
};

contactForm.addEventListener("submit", sendEmail);

const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

let intervalId;

const updateCarousel = (number = 0) => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - number) * 100}%)`;
    });
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        clearInterval(intervalId);

        button.dataset.button == "next" ? ++currSlide : --currSlide;

        if (currSlide > maxSlide) {
            currSlide = 0;
        } else if (currSlide < 0) {
            currSlide = maxSlide;
        }

        updateCarousel(currSlide);

        setTimeout(() => {
            intervalId = setInterval(() => {
                currSlide++;
                if (currSlide > maxSlide) {
                    currSlide = 0;
                }
                updateCarousel(currSlide);
            }, 2000);
        }, 3000); 
    });
});

updateCarousel();

intervalId = setInterval(() => {
    currSlide++;
    if (currSlide > maxSlide) {
        currSlide = 0;
    }
    updateCarousel(currSlide);
}, 2500);

let html = '<div class="popup" style="background-color: #333; color: #fff; padding: 10px; border-radius: 5px; font-family: Arial, sans-serif; font-size: 16px;">FITHUB</div>';

let popup = new mapboxgl.Popup().setHTML(html);

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';

let gps = [14.419972261923986, 50.088594071059776];

let map = new mapboxgl.Map({
    container: 'mymap',
    center: gps,
    zoom: 15,
    style: 'mapbox://style/mapbox/dark-v10'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let elm = document.createElement('div');
elm.className = 'pin';

new mapboxgl.Marker({
    element: elm,
    anchor: 'bottom'
}).setLngLat(gps).addTo(map).setPopup(popup);

btnreset.addEventListener('click', () => {
    form.classList.remove('validate');
});

function redirectToBookPage(url) {
    window.location.href = url;
}
