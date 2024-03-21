$(function () {
    loadTl = gsap.timeline();
    loadTl.to(".sc-visual", { '--opacity': 0, duration: 2 })
        .from(".text-desc, .btn-gold, .f-img", { opacity: 0, yPercent: 100 });
    const visual = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-visual",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: true
        }
    });
    visual.to(".sc-visual", { height: '50vh' }, "a")
        .to(".text-wrap", { opacity: 0 }, "a")
});