import { arrow, bannerImg ,box} from "../../assets/images"

export const AboutBanner = () => {
    return (
        <div className=" flex items-center justify-center mb-12 bg-[#FFFFFF] px-[102px] relative">
            <div className="w-[80%] pb-12">
                <h1 className=" text-[16px] font-gelion text-[#5D5CD6]">KNOW ABOUT US</h1>

                <div className="w-[640px]">
                    <h2 className="text-[55px] text-[#0B0A29] leading-[66px] tracking-[-0.02em] font-semibold">
                        Empowering <span className="text-[#6463D9]"> Africa </span>
                        through the limitless potential of technology
                    </h2>
                </div>
            </div>

            <div className="w-[20%] pb-12">
                <div>
                    <img src={bannerImg} alt='About' />
                </div>

                <div className="absolute -top-16 right-0 w-[150px] object-cover">
                    <img src={arrow} alt="arrow" className="object-cover w-full " />
                </div>
            </div>

            <div className=" absolute right-0 -bottom-20">
                <img src={box} alt="" />
            </div>

        </div>
    )
}