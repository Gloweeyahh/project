export const luxuryEase = [0.16, 1, 0.3, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.8,
    ease: luxuryEase
  },
  viewport: { once: true, amount: 0.2 }
};
