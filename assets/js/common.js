$(function () {
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        // console.log(e)
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    /* 스크롤 시 헤더 고정 */
    let lastScroll = '0';
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr >= 80) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
        if (curr >= 300) {
            $('#header').addClass('move');

            if (curr > lastScroll) {
                $('#header').removeClass('wheel');
            } else {
                $('#header').addClass('wheel');
            }
            lastScroll = curr
        } else {
            $('#header').removeClass('wheel');
        }
        if (curr <= 50) {
            $('#header').removeClass('move');
        }
    });
    $('.btn-menu').click(function () {
        $('.left-menu').addClass('active');
        $('.dimmed').addClass('active');
        $('body').addClass('hidden')
        lenis.stop();
    }); $('.close , .dimmed').click(function () {
        $('.left-menu').removeClass('active');
        $('.dimmed').removeClass('active');
        $('body').removeClass('hidden');
        lenis.start();
    });
    $('.up').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });


    $('.left-menu .link-list a').each(function (index) {
        $(this).click(function (e) {
            e.preventDefault()
            $(this).closest('.left-menu').find('.left-menu-second').eq(index).stop().toggle("slide", { direction: "right" })

        })
    })




    // GSAP
    gsap.defaults({
        ease: "ease",
    });
    const headTxt = new SplitType('.sc-visual .text-tit .txt-line', { types: 'words, chars', });
    const splitLines = new SplitType('.split-line', { types: 'lines' });
    $('.line').wrap('<div class="sc-visual text-tit">')

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

    visualTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-visual",
            start: "0% 0%",
            end: "100% 0%",
            scrub: 0,
        }
    });
    visualTl
        .to(".sc-visual .content", { yPercent: 20 }, "a")
        .to(".text-wrap", { opacity: 0 }, "a")


    $('[data-parallax="true"]').each(function (i, el) {
        gsap.to($(this).find('img'), {
            scrollTrigger: {
                trigger: $(this),
                start: "0% 100%",
                end: "100% 0%",
                scrub: 0,
                // markers: true,
            },
            yPercent: -20
        })
    })


    bookTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-book",
            start: "0% 70%",
            end: "100% 100%",
            // markers: true
        }
    });
    bookTl.to(".sc-book .txt-box span", {
        y: 0, stagger: 0.2
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
            start: "0 80%",
            end: "100% 100%",
            duration: 1,
            markers: true
        }
    });
    nowTl.from(".txt-wrap > *", {
        opacity: 0, yPercent: 50, stagger: 0.3
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
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
            // markers: true
        }
    });
    escapeTl.from(".sc-escape .char", {
        opacity: 0,
        yPercent: "random(0,100)",
    },)



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