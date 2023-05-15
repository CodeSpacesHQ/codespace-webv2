import { services } from "../../data/services"

const Services = () => {
  return (
    <section className="font-gelion px-7 sm:px-16 lg:px-[65px] xl:px-[101px] 2xl:px-[121px]">
      <div className="mt-[137px] mx-auto max-w-[1500px] mb-[130px]">
        <h2 className="text-primary uppercase text-sm mb-2">What we do</h2>
        <h3 className="font-semibold text-[32px] mb-3 max-w-[360px]">What we engage in as a community</h3>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {
            services.map(({id, icon, title, details})=> (
              <div key={id}>
                <div className="relative -left-7">
                  <img className="w-36" src={icon} alt="Services icons" />
                </div>
                <h4 className="-mt-5 font-medium text-[24px] mb-[9px] line-clamp-1">{title}</h4>
                <p className="text-[#737373] leading-6">{details}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
