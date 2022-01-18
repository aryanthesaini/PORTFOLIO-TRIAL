
const navslide = () => {
    const blank = document.querySelector('.blank');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //toggle nav
    blank.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animate nav
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }

        })

        //blank animation
        blank.classList.toggle('toggle');
    })


}


const app = () => {
    navslide();
}


app();


ScrollTrigger.matchMedia({
    "(max-width: 768px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".second-page",
                start: "-100%",
                end: "100%",
                scrub: true,
                pin: true,
            },
        });

        tl.fromTo('.second-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 3 });
        tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
        tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
        // tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });
    },
    "(min-width: 768px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".second-page",
                start: "top",
                end: "100%",
                scrub: true,
                pin: true,
                markers: true
            },
        });

        tl.fromTo('.second-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 3 });
        tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
        tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
        // tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });


    }
});

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".second-page",
//         start: "top",
//         end: "100%",
//         scrub: true,
//         pin: true,
//         markers: true
//     },
// });

// tl.fromTo('.second-page', { clipPath: 'circle(4%)' }, { clipPath: 'circle(75%)', duration: 3 });
// tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
// tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
// // tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });

