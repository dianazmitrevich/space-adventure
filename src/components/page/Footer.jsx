import rocketPng from "assets/images/footer/icon.png";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={rocketPng} alt="" width="63" height="56" decoding="async" fetchPriority="high" />
            <p className="footer__text">Exciting space adventure!</p>
        </footer>
    );
}
