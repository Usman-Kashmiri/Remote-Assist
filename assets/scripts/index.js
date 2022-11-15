$(document).ready(function() {

    // Menu toggle btn
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });

    // sticky navbar on scroll script
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("sticky");
        } else {
            $('.nav-bar').removeClass("sticky");
        }
    });


    $('.menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Dark theme mode
    var checkBox = document.getElementById('chk');

    var theme = window.localStorage.getItem('data-theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    checkBox.checked = theme == 'darkMode' ? true : false;

    if (checkBox.checked) {
        $('body').addClass('dark');
        $('.home-layer').addClass('dark-bg').removeClass('light-bg');
        $('.alert').hide();
    } else {
        $('body').removeClass('dark');
        $('.home-layer').addClass('light-bg').removeClass('dark-bg');
        $(".alert").hide().delay(5000).fadeIn();
    }

    $('#chk').click(function() {
        if (checkBox.checked) {
            $('.home-layer').addClass('dark-bg').removeClass('light-bg');
        } else {
            $('.home-layer').addClass('light-bg').removeClass('dark-bg');
        }
    });

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'darkMode');
            $('body').addClass('dark');
            window.localStorage.setItem('data-theme', 'darkMode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            $('body').removeClass('dark');
            window.localStorage.setItem('data-theme', 'light');
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Website Design", "Web Development", "Video Editing", "Content Writing", "Social Media Marketing", "SEO", "Social Media Accounts Managment"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });

    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);

    // For About Section
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-content",
            pin: false,
            start: "top bottom"
        }
    })
    tl.from('.col-left', { opacity: 0, duration: 0.8, x: -100 })
    tl.from('.col-right', { opacity: 0, duration: 0.5, x: 100 })

    gsap.from('.services .card', {
        scrollTrigger: {
            trigger: ".card",
            start: "top bottom"
        },
        opacity: 0,
        duration: 0.5,
        y: 50,
        stagger: 0.2
    });


    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".member1",
            pin: false,
            start: "top center"
        }
    })
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".member2",
            pin: false,
            start: "top center"
        }
    })
    tl2.from('.member1 .img-container', { opacity: 0, duration: 0.5, x: -100 })
    tl3.from('.member2 .img-container', { opacity: 0, duration: 0.5, x: 100 })
    tl2.from('.member1 .description', { opacity: 0, duration: 0.5, x: 100 })
    tl3.from('.member2 .description', { opacity: 0, duration: 0.5, x: -100 })
    tl2.from('.member1 .links', { opacity: 0, duration: 0.8, y: 50 })
    tl3.from('.member2 .links', { opacity: 0, duration: 0.8, y: 50 })

});