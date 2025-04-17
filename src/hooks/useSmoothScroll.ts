import Lenis from "lenis";

const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

const scrollTo = (id: string): void => {
    lenis.scrollTo(id);
}

interface SmoothScrollInterface {
    scrollTo: Function
}

export default (): SmoothScrollInterface => {
    return { scrollTo };
}