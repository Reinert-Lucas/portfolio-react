import Header from "./semantic/Header";
import Footer from "./semantic/Footer";
import '../css/semantic.css'

function MainView() {
    return(
        <>
            <section className="mainView">
                <Header />
                <Footer />
            </section>
        </>
    )
}

export default MainView