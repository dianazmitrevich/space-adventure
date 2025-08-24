import { useEffect, useState, memo, useRef } from "react";
import Icon from "components/UI/Icon/Icon";

const HeaderNav = memo(function HeaderNav() {
    return (
        <>
            <nav className="nav">
                <div className="nav__item" data-text="Home">
                    Home
                </div>
                <div className="nav__item" data-text="Products">
                    Products
                </div>
            </nav>
            <div className="header__cart" aria-label="Cart">
                <Icon name="cart" className="header__cart-icon" width={24} height={21} title="Cart icon" />
            </div>
        </>
    );
});

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const frameRef = useRef(null);
    const openBtnRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        const onDown = (e) => {
            const el = frameRef.current;

            if (el && !el.contains(e.target)) setIsOpen(false);
        };

        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onDown);

        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onDown);
        };
    }, [isOpen]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => (document.body.style.overflow = "");
    }, [isOpen]);

    return (
        <header className="header">
            <div className="header__wrapper container">
                <div className="header__logo">
                    <Icon name="logo" width={104} height={35} title="Earth GO Logo" />
                </div>
                <div className="header__nav">
                    <HeaderNav />
                </div>
                <div className={`header__burger${isOpen ? " header__burger-opened" : ""}`}>
                    <button
                        ref={openBtnRef}
                        type="button"
                        className="header__burger-open"
                        aria-label="Open menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(true)}>
                        <Icon name="menu" width={32} height={38} title="Open menu" />
                    </button>
                    <div
                        id="mobile-menu"
                        ref={frameRef}
                        className="header__burger-frame"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation">
                        <button
                            type="button"
                            className="header__burger-close"
                            aria-label="Close menu"
                            onClick={() => setIsOpen(false)}>
                            <Icon name="close" width={32} height={38} title="Close menu" />
                        </button>
                        <HeaderNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
