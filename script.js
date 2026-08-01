/*==================================================
  PORTFOLIO WEBSITE
  SCRIPT.JS
  PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      LOADER
    ==============================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loader) {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }
        }, 800);
    });

    /*==============================
      MOBILE MENU
    ==============================*/

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            menuBtn.textContent =
                nav.classList.contains("active")
                ? "✕"
                : "☰";

        });

        document.querySelectorAll("nav a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                menuBtn.textContent = "☰";

            });

        });

    }

    /*==============================
      PARTICLE BACKGROUND
    ==============================*/

    const particles = document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 80; i++) {

            const star = document.createElement("span");

            const size = Math.random() * 4 + 2;

            star.style.width = size + "px";
            star.style.height = size + "px";

            star.style.left = Math.random() * 100 + "%";

            star.style.animationDuration =
                (8 + Math.random() * 12) + "s";

            star.style.animationDelay =
                Math.random() * 10 + "s";

            particles.appendChild(star);

        }

    }

    /*==============================
      FLOATING PROFILE CARD
    ==============================*/

    const profile = document.querySelector(".profile-card");

    if (profile) {

        window.addEventListener("mousemove", (e) => {

            const x =
                (window.innerWidth / 2 - e.clientX) / 40;

            const y =
                (window.innerHeight / 2 - e.clientY) / 40;

            profile.style.transform =
                `rotateY(${x}deg) rotateX(${-y}deg)`;

        });

        window.addEventListener("mouseleave", () => {

            profile.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        });

    }
  

});
/*==================================================
  SCRIPT.JS
  PART 2
  Scroll Animations / Skill Bars / Counters
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      SCROLL REVEAL
    ==============================*/

    const revealElements = document.querySelectorAll(
        ".reveal, .fade-up, .service, .card, .exp-card, .social-card, .project-card, .team-card, .feature-card, .timeline-item"
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");
                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /*==============================
      SKILL BAR ANIMATION
    ==============================*/

    const skillBars = document.querySelectorAll(".progress-fill");

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const bar = entry.target;

            const width = bar.dataset.width || "100%";

            bar.style.width = width;

            skillObserver.unobserve(bar);

        });

    }, {
        threshold: 0.35
    });

    skillBars.forEach(bar => skillObserver.observe(bar));

    /*==============================
      ACHIEVEMENT COUNTERS
    ==============================*/

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const step = Math.max(1, Math.ceil(target / 100));

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 20);

            counterObserver.unobserve(counter);

        });

    }, {
        threshold: 0.4
    });

    counters.forEach(counter => counterObserver.observe(counter));

    /*==============================
      HEADER BACKGROUND ON SCROLL
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background = "rgba(8,10,20,.75)";
            header.style.backdropFilter = "blur(18px)";

        } else {

            header.style.background = "rgba(0,0,0,.15)";

        }

    });
  
});
/*==================================================
  SCRIPT.JS
  PART 3
  Final Animations & Effects
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      SMOOTH PAGE TRANSITIONS
    ==============================*/

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {
        document.body.style.transition = "opacity .6s ease";
        document.body.style.opacity = "1";
    });

    document.querySelectorAll("a[href]").forEach(link => {

        const href = link.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:")
        ) return;

        link.addEventListener("click", function(e){

            e.preventDefault();

            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = href;
            }, 350);

        });

    });

    /*==============================
      ACTIVE NAVIGATION
    ==============================*/

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");

        }else{

            link.classList.remove("active");

        }

    });

    /*==============================
      BUTTON RIPPLE EFFECT
    ==============================*/

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            const rect=this.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            ripple.style.width=size+"px";
            ripple.style.height=size+"px";

            ripple.style.left=(e.clientX-rect.left-size/2)+"px";
            ripple.style.top=(e.clientY-rect.top-size/2)+"px";

            ripple.className="ripple";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

    /*==============================
      PARALLAX EFFECT
    ==============================*/

    const hero=document.querySelector(".hero");

    window.addEventListener("mousemove",(e)=>{

        if(!hero) return;

        const x=(e.clientX/window.innerWidth-.5)*20;

        const y=(e.clientY/window.innerHeight-.5)*20;

        hero.style.transform=
        `translate(${x}px,${y}px)`;

    });

    /*==============================
      BACK TO TOP BUTTON
    ==============================*/

    const topBtn=document.createElement("button");

    topBtn.innerHTML="↑";

    topBtn.className="top-btn";

    document.body.appendChild(topBtn);

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    });

})
/* Ripple Effect */

.btn{
position:relative;
overflow:hidden;
}

.ripple{
position:absolute;
border-radius:50%;
transform:scale(0);
animation:ripple .6s linear;
background:rgba(255,255,255,.4);
pointer-events:none;
}

@keyframes ripple{
to{
transform:scale(4);
opacity:0;
}
}

/* Back To Top */

.top-btn{

position:fixed;

right:25px;

bottom:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:linear-gradient(135deg,var(--primary),var(--secondary));

color:white;

font-size:24px;

cursor:pointer;

opacity:0;

visibility:hidden;

transform:translateY(20px);

transition:.35s;

box-shadow:var(--shadow);

z-index:999;

}

.top-btn.show{

opacity:1;

visibility:visible;

transform:translateY(0);

}

.top-btn:hover{

transform:translateY(-6px);

}
