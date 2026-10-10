let _gsap: any = null;

export async function loadGsap() {
	if (_gsap) return _gsap;
	const gsapModule = await import("gsap");
	const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
	const gsap = gsapModule.default ?? gsapModule;
	if (ScrollTrigger && gsap && typeof gsap.registerPlugin === "function") {
		gsap.registerPlugin(ScrollTrigger);
	}
	_gsap = gsap;
	return _gsap;
}

// Backward-compatible stub for sync imports (will throw if used before loaded)
export default {
	_isLazyProxy: true,
	load: loadGsap,
};

