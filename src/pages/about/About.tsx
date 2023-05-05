import { AboutBanner, Vision , Team, Partners} from "."
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export const About = () => {
    return (
        <section className="relative">
            <Header />
            <div className="mt-16 py-8">
                <AboutBanner />
            </div>

            <div>
                <Vision />
            </div>

            <div>
                <Team />
            </div>

            <div>
                <Partners />
            </div>

            <div>
                <Footer />
            </div>

        </section>
    )
}