import Icon from "components/UI/Icon/Icon";

function HeaderNav() {
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
}

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper container">
                <div className="header__logo">
                    <Icon name="logo" width={104} height={35} title="Earth GO Logo" />
                </div>
                <div className="header__nav">
                    <HeaderNav />
                </div>
                <div className="header__burger">
                    <input
                        type="checkbox"
                        id="burger-toggle"
                        className="header__burger-toggle"
                        aria-label="Toggle navigation menu"
                    />
                    <label htmlFor="burger-toggle" className="header__burger-open">
                        <Icon name="menu" width={32} height={38} title="Open menu" />
                    </label>
                    <div className="header__burger-frame">
                        <label htmlFor="burger-toggle" className="header__burger-close">
                            <Icon name="close" width={32} height={38} title="Close menu" />
                        </label>
                        <HeaderNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
