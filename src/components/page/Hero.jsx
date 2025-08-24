import { useEffect } from "react";
import planetAvif from "assets/images/hero/earth.avif";
import planetWebp from "assets/images/hero/earth.webp";
import planetPng from "assets/images/hero/earth.png";

function useGlobalParallax() {
    useEffect(() => {
        const hero = document.querySelector(".hero");
        if (!hero) return;

        const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        let rafId = 0;
        let mouseX = 0,
            mouseY = 0;
        let scrollProg = 0;

        const recomputeScroll = () => {
            const rect = hero.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            const start = vh;
            const end = -rect.height;
            const t = (rect.top - end) / (start - end);
            scrollProg = Math.max(0, Math.min(1, t));
        };

        const onMouseMove = (e) => {
            mouseX = e.clientX / window.innerWidth - 0.5;
            mouseY = e.clientY / window.innerHeight - 0.5;
            schedule();
        };

        const onScroll = () => {
            recomputeScroll();
            schedule();
        };

        const onResize = () => {
            recomputeScroll();
            schedule();
        };

        const schedule = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(apply);
        };

        const apply = () => {
            rafId = 0;

            const bgAmpMouse = 6;
            const bgAmpScroll = 8;
            const imgAmpMouse = 24;
            const imgAmpScroll = 30;

            const bgX = 50 + mouseX * bgAmpMouse + (scrollProg - 0.5) * 2;
            const bgY = 50 + mouseY * bgAmpMouse + (scrollProg - 0.5) * bgAmpScroll;

            const tx = mouseX * imgAmpMouse + (scrollProg - 0.5) * 2;
            const ty = mouseY * imgAmpMouse + (scrollProg - 0.5) * imgAmpScroll;

            hero.style.setProperty("--bg-x", `${bgX}%`);
            hero.style.setProperty("--bg-y", `${bgY}%`);
            hero.style.setProperty("--tx", `${tx}px`);
            hero.style.setProperty("--ty", `${ty}px`);
        };

        recomputeScroll();
        apply();

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);
}

export default function Hero() {
    useGlobalParallax();

    return (
        <section className="hero">
            <div className="hero__wrapper container">
                <div className="hero__text">
                    <h1 className="hero__title">
                        Discover the vast expanses of <span className="color-pink">space</span>
                    </h1>
                    <div className="hero__subtitle">
                        Where the possibilities are <span className="color-yellow">endless!</span>
                    </div>
                    <button className="hero__btn btn btn-lg btn-primary" href="#">
                        Learn more
                    </button>
                </div>
                <picture className="hero__image">
                    <source srcSet={planetAvif} type="image/avif" />
                    <source srcSet={planetWebp} type="image/webp" />
                    <img src={planetPng} alt="" width="327" height="367" decoding="async" fetchPriority="high" />
                </picture>
            </div>
        </section>
    );
}
