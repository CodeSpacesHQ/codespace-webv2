import { digitalTimes, guardians, star1, star2, technext, techpoint } from "../../assets/icon"
import { buttons } from "../../assets/images"


export const Partners = () => {
    return (
        <section className=' bg-[#FFFFFF] px-[102px]'>
            <h2 className='text-[#000000] text-center  mb-4
        font-gelion font-semibold text-[40px] leading-[48px] tracking-[-0.02em]'>Some of our Partners</h2>

            <div className="flex items-center justify-center flex-wrap mb-8 ">
                <div className=" w-[200px] h-[60px]  me-6 object-contain">
                    <img src={techpoint} className="w-full object-contain h-full" alt="Tech point" />
                </div>

                <div className=" w-[200px] h-[60px]  me-6 object-contain">
                    <img className="w-full object-contain h-full" src={technext} alt="Tech next" />
                </div>

                <div className=" w-[200px] h-[120px]  me-6 object-cover">
                    <img className="w-full object-cover h-full" src={digitalTimes} alt="Digital times" />
                </div>

                <div className=" w-[320px] h-[50px] object-cover">
                    <img className="w-full object-cover  h-full" src={guardians} alt="The Guardians" />
                </div>
            </div>

            <div className=" cursor-pointer px-32 mb-8 relative flex items-center justify-center">
                <div className="w-1/2 relative">
                    <div className="w-[300px]">
                        <img src={buttons} className=" object-cover w-full" alt="Join the community" />
                    </div>

                    <div className=" absolute -left-16 top-8">
                        <img src={star2} alt={`star logo`} />
                    </div>

                    <div className=" absolute right-12 top-20">
                        <img src={star1} alt={`star logo`} />
                    </div>
                </div>

                <div className="w-1/2">
                    <p className=" mb-6 font-gilroy text-[#8C8C8C] font-normal tracking-[-0.02em]
                        leading-[32px]  text-[22px]">
                        Be a part of our ever growing community by
                        joining our Telegram channel and getting
                        periodic updates.
                    </p>

                    <div>
                        <button className=" bg-[#5D5CD6] 
                        rounded-[40px] p-4 font-gilroy text-[#FEFEFE]
                        font-bold w-[300px]">Join our community</button>
                    </div>

                </div>
            </div>
        </section>
    )
}
