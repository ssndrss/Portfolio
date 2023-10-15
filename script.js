gsap.registerPlugin(ScrollTrigger);

gsap.to("#card1", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: "#card1",
    start: "top center",
    markers: true,
    scrub: true
})

gsap.to("#card2", {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: "#card2",
    start: "top center",
    markers: true,
    scrub: true
})

gsap.to("#card3", {
    opacity: 1,
    duration: 0.5,
    delay: 1,
    scrollTrigger: "#card3",
    start: "top center",
    markers: true,
    scrub: true
})
