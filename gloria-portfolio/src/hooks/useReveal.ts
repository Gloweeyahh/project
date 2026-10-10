import { useEffect } from "react";
import gsapLib from "../lib/gsap";

export const useReveal = (ref: any) => {
  useEffect(() => {
    let mounted = true;
    if (!ref.current) return;

    (async () => {
      const gsap = (gsapLib.load ? await gsapLib.load() : gsapLib);
      if (!mounted || !gsap) return;
      gsap.from(ref.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);
};
