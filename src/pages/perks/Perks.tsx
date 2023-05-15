import Community from "../../components/Community"
import { PerksHero } from "../../components/Perks/Hero"
import Offers from "../../components/Perks/Offers"

const Perks = () => {
  return (
    <div>
      <PerksHero />
      <Offers />
      <div className="bg-white px-[30px] sm:px-[100px] lg:px-[42px] xl:px-[102px]">
        <Community />
      </div>
    </div>
  )
}

export default Perks
