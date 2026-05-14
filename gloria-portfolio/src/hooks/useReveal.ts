import { useEffect } from "react";
import gsap from "../lib/gsap";

export const useReveal = (ref: any) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);
};
