import ContactBody from "../../components/Contact/Body"
import ContactHero from "../../components/Contact/Hero"
import { Partners } from "../about"

const Contact = () => {
  return (
    <div className="max-w-[1520px] mx-auto">
    <ContactHero />
    <ContactBody />
    <Partners />
    </div>
  )
}

export default Contact
