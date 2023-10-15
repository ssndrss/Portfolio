gsap.registerPlugin(ScrollTrigger);

gsap.to("#card1", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: "#card1",
    start: "top center",
    scrub: true
})

gsap.to("#card2", {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: "#card2",
    start: "top center",
    scrub: true
})

gsap.to("#card3", {
    opacity: 1,
    duration: 0.5,
    delay: 1,
    scrollTrigger: "#card3",
    start: "top center",
    scrub: true
})

gsap.to("#line1", {
    width: "70%",
    duration: 0.8,
    scrollTrigger: "#line1",
    start: "top 70%",
    scrub: true
})

gsap.to("#line2", {
    width: "70%",
    duration: 0.8,
    scrollTrigger: "#line2",
    start: "top 70%",
    scrub: true
})

gsap.to("#image1", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: "#image1",
    start: "top 70%",
    scrub: true
})

gsap.to("#image2", {
    scale: 1,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: "#image2",
    start: "top 70%",
    scrub: true
})

gsap.to("#image3", {
    scale: 1,
    duration: 0.5,
    delay: 1,
    scrollTrigger: "#image3",
    start: "top 70%",
    scrub: true
})

gsap.to("#image4", {
    scale: 1,
    duration: 0.5,
    delay: 1.5,
    scrollTrigger: "#image4",
    start: "top 70%",
    scrub: true
})

gsap.to("#image5", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: "#image5",
    start: "center 40%",
    scrub: true
})

gsap.to("#image6", {
    scale: 1,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: "#image6",
    start: "center 40%",
    scrub: true
})

gsap.to("#image7", {
    scale: 1,
    duration: 0.5,
    delay: 1,
    scrollTrigger: "#image7",
    start: "center 40%",
    scrub: true
})

gsap.to("#image8", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: "#image8",
    start: "center 40%",
    end: "bottom top",
    scrub: true
})
