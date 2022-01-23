
// const navslide = () => {
//     const blank = document.querySelector('.blank');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li')

//     //toggle nav
//     blank.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         //animate nav
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ``;
//             }
//             else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
//             }

//         })

//         //blank animation
//         blank.classList.toggle('toggle');
//     })


// }


// const app = () => {
//     navslide();
// }


// app();


// ScrollTrigger.matchMedia({
//     "(max-width: 768px)": function () {
//         let tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".second-page",
//                 start: "-100%",
//                 end: "100%",
//                 scrub: true,
//                 pin: true,
//             },
//         });

//         tl.fromTo('.second-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 3 });
//         tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
//         tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
//         tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
//         // tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });
//     },
//     "(min-width: 768px)": function () {
//         let tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".second-page",
//                 start: "top",
//                 end: "100%",
//                 scrub: true,
//                 pin: true,
//                 markers: true
//             },
//         });

//         tl.fromTo('.second-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 3 });
//         tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
//         tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
//         tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
//         // tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });


//     }
// });
// document.querySelector('video').playbackRate = 0.1;


const form = document.querySelector('.contact')

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.querySelector('.status');
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.style = 'display: flex; border-left:18px solid #3AD66E; left:0;';
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.style = 'display: flex; border-left:18px solid #d63a64;';
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}

form.addEventListener("submit", handleSubmit);


var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});




let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a')
window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })
})



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        start: "top",
        end: "100%",
        scrub: true,
        pin: true,
    },
});

tl.fromTo('.second-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 3 });
tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.third-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 1 });
// tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "top",
        end: "20%",
        scrub: true,
        pin: true,
    },
});

tl2.fromTo('.third-page', { scale: 0 }, { scale: 1, opacity: 1, duration: 0.2 });
