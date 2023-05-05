import { teams } from '../../constants/teams'
import { useWidth } from '../../hooks/useWidth'

export const Team = () => {
    const width = useWidth()

    const isMobile = width <= 768
    return (
        <section className='bg-[#FFFFFF] px-7 xl:px-[102px] py-8 sm:py-12 md:py-16'>
            <h2 className='font-gelion font-[700px]  sm:mb-6 
            text-center text-[32px] sm:text-[40px] md:text-[64px] leading-[72px] text-[#000000]'>
                {isMobile? 'Meet the Team' : "Core Team"}
            </h2>

            <div>
                <p className=' font-gelion md:font-dm-sans  mb-8 text-[#9F9A9A] font-normal text-[16px] sm:text-[24px] leading-[18px] sm:leading-[48px] tracking-[0.12em] text-center'>
                    We're a diverse, close-knit team on an
                    adventure to build something enduring,
                    while learning something new, every day.
                </p>
            </div>

            <div>
                <div className='flex flex-wrap items-center justify-center'>
                    {
                        teams.map((team, index) => {
                            const { id, name, role, image } = team
                            console.log(role[7])
                            return (
                                <div key={id} className={`flex flex-col w-[300px] items-center justify-center mb-16 ${index == 3 && 'me-0'} ${index == 6 && 'me-0'}`}>
                                    <div className='w-[200px] h-[200px] object-cover'>
                                        <img src={image} alt={name} className='w-full object-cover h-full' />
                                    </div>

                                    <h3 className=' font-dm-sans font-[500px] text-[24px] leading-[45px] text-[#000000] text-center'>{name}</h3>
                                    <p className=' text-[#868687] font-[700px] text-[24px] leading-[45px] text-center'>{role}</p>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
}
