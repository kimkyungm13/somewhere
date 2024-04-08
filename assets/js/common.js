$(function () {
    loadTl = gsap.timeline();
    gsap.registerPlugin(PixiPlugin);
    loadTl.to(".sc-visual", { '--opacity': 0, duration: 2, })
        .from(".char", {
            duration: 1,
            opacity: 0, scale: 10, filter: "blur(10px)", stagger: {
                amount: 1,
                from: "random"
            }
        }, "a")
        .from(".text-desc, .btn-gold, .f-img", { opacity: 0, yPercent: 100 },)




    visual = gsap.timeline({
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
                // markers: true

            }
        })
    }));
    // $(".slide").each(function (i, el) {
    //     // windowStart = $(this).data('start') ? $(this).data('start') : '0%'
    //     const slide = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: $(this),
    //             start: `80% 5%`,
    //             // end: "100% 80%",
    //             markers: true
    //         }
    //     });
    //     slide.from($(this).find('*'), {
    //         opacity: 0, yPercent: 50, stagger: 0.1
    //     })
    // })
    bookTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-book",
            start: "20% 80%",
            // end: "bottom bottom",
            // markers: true
        }
    });
    bookTl.from(".sc-book .txt-box span", {
        opacity: 0, yPercent: 50, stagger: 0.1
    }).from(".sc-book .btn-border", {
        opacity: 0, yPercent: 50,
    })

    nowTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-now",
            start: "top 90%",
            end: "top bottom",
            markers: true
        }
    });
    nowTl.from(".txt-wrap > *", {
        opacity: 0, yPercent: 50, stagger: 0.1
    })
    snsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-connect",
            start: "top 90%",
            // end: "bottom bottom",
            // markers: true
        }
    });
    snsTl.from(".sc-connect>*", {
        opacity: 0, yPercent: 50, stagger: 0.1
    })
    aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-about .conts-wrap",
            start: "0% 80%",
            // end: "bottom bottom",
            // markers: true
        }
    });
    aboutTl.from(".txt-line > *", {
        opacity: 0, yPercent: 50, stagger: 0.2
    }).from(".sc-about .txt-area h2", {
        opacity: 0, yPercent: 50,
    })



    withusTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-withus .txt-box",
            start: "10% 80%",
            // end: "bottom bottom",
            // markers: true
        }
    });
    withusTl.from(".sc-withus .txt-box > *", {
        opacity: 0, yPercent: 50, stagger: 0.2
    })
});//end