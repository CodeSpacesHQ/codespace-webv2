import { digitalTimes, guardians, star1, star2, technext, techpoint } from "../../assets/icon"
import { buttons } from "../../assets/images"


export const Partners = () => {
    return (
        <section className=' bg-[#FFFFFF] px-7 xl:px-[102px]'>
            <h2 className='text-[#000000] text-center  mb-4
        font-gelion font-semibold text-[28px] sm:text-[40px] leading-[48px] tracking-[-0.02em]'>Some of our Partners</h2>

            <div className="flex  justify-center items-center flex-wrap mb-6 ">
                <div className="w-[200px] xmd:w-2/12 mt-8  mb-6  me-6 h-[60px] object-contain">
                    <img src={techpoint} className="w-full object-contain h-full" alt="Tech point" />
                </div>

                <div className="w-[200px] xmd:w-2/12 me-6 ">
                    <img className="w-full object-contain h-full" src={technext} alt="Tech next" />
                </div>

                <div className="w-[200px] xmd:w-2/12 me-6 ">
                    <img className="w-full object-contain h-full" src={digitalTimes} alt="Digital times" />
                </div>

                <div className="w-[200px] xmd:w-2/12 mt-4 mb-4">
                    <img className="w-full object-contain  h-full" src={guardians} alt="The Guardians" />
                </div>
            </div>

            <div className=" cursor-pointer  mb-8 relative flex flex-col xmd:flex-row items-center justify-center">
                <div className="w-full xmd:w-3/5 flex justify-center items-center relative">
                    <div className="w-[80%] max-w-[400px] xmd:-ml-20">
                        <img src={buttons} className=" object-cover w-full" alt="Join the community" />
                    </div>

                    <div className=" absolute w-[20px] sm:w-[40px] object-cover left-0 top-8 xmd:top-12">
                        <img src={star2} alt={`star logo`} className=" object-cover w-full" />
                    </div>

                    <div className=" absolute right-2  w-[20px] sm:w-[40px] object-cover sm:right-8 md:right-12 xmd:right-24 top-8 xmd:top-20">
                        <img src={star1} alt={`star logo`} className=" object-cover w-full" />
                    </div>
                </div>

                <div className="w-full xmd:w-2/5 flex justify-center items-center xmd:items-start flex-col mt-8 xmd:mt-0 ">
                    <p className=" mb-6 font-gilroy text-[#8C8C8C] font-normal
                        leading-[21px] sm:leading-[32px] text-[14px] sm:text-[18px] sm:max-w-sm md:text-[22px] text-center xmd:text-start max-w-xs md:max-w-lg xmd:max-w-md">
                        Be a part of our ever growing community by
                        joining our Telegram channel and getting
                        periodic updates.
                    </p>

                    <div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBjs67bGLUuoJqUIFlIse2SQeHnmBCDp07cz_HrAlHSNKZsA/viewform?usp=send_form">
                            <button className=" bg-[#5D5CD6] hover:bg-white hover:border hover:border-[#5D5CD6] 
                            transition duration-300 ease-in-out hover:text-[#5D5CD6]
                            rounded-[40px] p-4 px-6 font-gilroy text-[#FEFEFE]
                            font-bold w-250px md:w-[300px]">Join our community</button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
