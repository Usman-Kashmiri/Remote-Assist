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
        // $('img#lightimg').hide();
        // $('#darkimg').show();
        $('.alert').hide();
    } else {
        $('body').removeClass('dark');
        $('.home-layer').addClass('light-bg').removeClass('dark-bg');
        // $('img#darkimg').hide();
        // $('#lightimg').show();
        $(".alert").hide().delay(5000).fadeIn();
    }

    $('#chk').click(function() {
        if (checkBox.checked) {
            $('.home-layer').addClass('dark-bg').removeClass('light-bg');
            // $('img#lightimg').hide();
            // $('#darkimg').show();
        } else {
            $('.home-layer').addClass('light-bg').removeClass('dark-bg');
            // $('img#darkimg').hide();
            // $('#lightimg').show();
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

    // var tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".services",
    //         pin: false,
    //         start: "top center"
    //     }
    // })

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

    
    // Messenger Chat Integration
    // var chatbox = document.getElementById('fb-customer-chat');
    // chatbox.setAttribute("page_id", "593965871093444");
    // chatbox.setAttribute("attribution", "biz_inbox");

    // window.fbAsyncInit = function() {
    //     FB.init({
    //         xfbml: true,
    //         version: 'v11.0'
    //     });
    // };

    // (function(d, s, id) {
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s);
    //     js.id = id;
    //     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    //     fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
});