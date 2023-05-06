import { arrow, bannerImg, box } from "../../assets/images"

export const AboutBanner = () => {
   

    return (
        <div className=" flex flex-col xmd:flex-row items-center justify-center mb-12 bg-[#FFFFFF] px-7 lg:px-[102px] relative">
            <div className="w-full xmd:w-[80%] pb-12 -mt-20 sm:-mt-14 md:mt-0">
                <h1 className=" text-[16px] mb-3 font-gelion text-[#5D5CD6]">KNOW ABOUT US</h1>

                <div className="w-full xmd:w-[640px]">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[64px] leading-[38.39px] md:leading-[70px] text-[#0B0A29]  tracking-[-0.02em] font-semibold">
                        Empowering <span className="text-[#6463D9] color-slide bounce-delayed"> Africa </span>
                        through the limitless potential of technology
                    </h2>
                </div>
            </div>

            <div className=" w-full mt-12 xmd:mt-0 flex justify-center items-center xmd:block xmd:w-[20%] pb-12">
                <div>
                    <img src={bannerImg} alt='About' />
                </div>

                <div className="absolute bottom-48 right-0 w-[120px] xmd:-top-12 xmd:right-0 xmd:w-[150px] object-cover">
                    <img src={arrow} alt="arrow" className="object-cover w-full " />
                </div>

            </div>


            <div className=" absolute right-0 -bottom-20">
                <img src={box} alt="" />
            </div>


        </div>
    )
}