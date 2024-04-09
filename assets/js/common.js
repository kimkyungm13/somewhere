$(function () {
    /**
     * 스크롤 시 헤더 고정
     */
    let lastScroll = '0';
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr > lastScroll || curr == 0
        ) {
            $('#header').removeClass('wheel');
        } else {
            $('#header').addClass('wheel');
        }
        lastScroll = curr
    });





    // window.addEventListener('scroll', function () {
    //     const scrollPosition = window.scrollY;
    //     winH = window.innerHeight;
    //     if (scrollPosition > (winH / 3)) {
    //         $('#header').addClass('wheel');
    //     } else {
    //         $('header').removeClass('wheel');
    //         $('.menu-wrap').css('display', 'none');
    //     }
    // });


    loadTl = gsap.timeline();
    loadTl.to(".sc-visual", { '--opacity': 0, duration: 2, })
        .from(".sc-visual .word .char", {
            duration: 1,
            opacity: 0, scale: 10, filter: "blur(10px)", stagger: {
                amount: 1,
                from: "random"
            }
        }, "a")
        .from(".sc-visual .text-desc,.sc-visual .btn-gold,.sc-visual .f-img", { opacity: 0, yPercent: 100 },)




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


    /**
     * NOW BOOKING 
     * 
     */

    nowTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-now",
            start: "top 90%",
            end: "top bottom",
            // markers: true
        }
    });
    nowTl.from(".txt-wrap > *", {
        opacity: 0, yPercent: 50, stagger: 0.1
    })



    /**
     * sc-connect sns list
     * 
     */
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

    /** escape  */

    escapeTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-escape",
            start: "top 35%",
            end: "bottom bottom",
            scrub: 1,
            markers: true
        }
    });
    escapeTl.to(".sc-escape .char", { opacity: 1, y: 0, },)



    gsap.from(".sc-escape .btn-gold", {
        scrollTrigger: '.sc-escape .btn-gold',
        opacity: 0,
        yPercent: 50,
    },)

    /**about */




    aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-about .conts-wrap",
            start: "top 90%",
            end: "bottom bottom",
            // markers: true
        }
    });
    aboutTl.from(".sc-about .txt-line > *", {
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