/*----------> Scroll section ovtive Link <--------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/*----------> Scroll section ovtive Link <--------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /* sticky navbar */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*----------> remove toggle icon and navbar when click link (scroll) <--------------*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    /*----------> scroll reveal <--------------*/
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        deley: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img', { origin: 'right' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    ScrollReveal().reveal('.education', { origin: 'top' });
    ScrollReveal().reveal('.education-box', { origin: 'left' });
    ScrollReveal().reveal('.portfolio-box', { origin: 'right' });
    ScrollReveal().reveal('.mian h3', { origin: 'top' });
    ScrollReveal().reveal('.row2 h2', { origin: 'left' });
    ScrollReveal().reveal('.row2_col2 h2', { origin: 'left' });
    ScrollReveal().reveal('.Skills h1, .progress-bar', { origin: 'left' });
    ScrollReveal().reveal('.row2_col2, .progress-bar', { origin: 'right' });
    ScrollReveal().reveal('.row2_col2 h1,', { origin: 'right' });
    ScrollReveal().reveal('.contact', { origin: 'right' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    

    /*----------> typed js <--------------*/

    const typed = new Typed('.multiple-text',{
        strings: ['FrontEnd Developer', 'YouTuber', 'CSE Student'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });


   