import { offers } from "data/offers";
import images from "assets/images/offers";

function OffersCard({ bg, variant, title, text, ctaText, ctaHref }) {
    const set = images[bg];

    return (
        <article
            className={`offers-card ${variant === "wide" ? "offers-card-wide" : ""}`}
            style={{
                "--bg-avif": set?.avif ? `url(${set.avif})` : "none",
                "--bg-webp": set?.webp ? `url(${set.webp})` : "none",
                "--bg-png": set?.png ? `url(${set.png})` : "none",
            }}>
            <div className="offers-card__inner">
                <div className="offers-card__inner-wrap">
                    <h3 className="offers-card__title">{title}</h3>
                    <p className="offers-card__text">{text}</p>
                </div>
                <button className="btn" href={ctaHref}>
                    {ctaText}
                </button>
            </div>
        </article>
    );
}

export default function Offers() {
    return (
        <section className="offers">
            <div className="offers__wrapper container">
                <h2 className="offers__title">Offers</h2>
                <div className="offers__grid">
                    {offers.map((card) => (
                        <OffersCard key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
