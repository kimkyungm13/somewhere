$(function () {
    loadTl = gsap.timeline();
    loadTl.to(".sc-visual", { '--opacity': 0, duration: 1 }, "a")
        .from(".char", { opacity: 0, scale: 60, }, "a")
        .from(".text-desc, .btn-gold, .f-img", { opacity: 0, yPercent: 100 })




    const visual = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-visual",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        }
    });
    visual.to(".sc-visual", { height: '50vh' }, "a")
        .to(".text-wrap", { opacity: 0 }, "a")
    document.querySelectorAll(".parallaxImage").forEach((function (e) {
        var t = e.querySelector("img");
        gsap.to(t, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: e,
                start: "top bottom",
                end: "bottom top",
                scrub: 0,
                markers: true

            }
        })
    }));



});//end