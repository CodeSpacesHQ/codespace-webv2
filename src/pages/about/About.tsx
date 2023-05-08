import { AboutBanner, Vision , Team} from "."
import { Partners } from "."

export const About = () => {
    return (
        <section className="relative">
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

        </section>
    )
}