import "./App.scss";
import Header from "components/page/Header";
import Hero from "components/page/Hero";
import Info from "components/page/Info";
import Offers from "components/page/Offers";
import Footer from "components/page/Footer";

function App() {
    return (
        <div className="d-wrap">
            <div className="outer-bg">
                <Header />
                <main className="d-main">
                    <Hero />
                    <Offers />
                    <Info />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
