import { icon1, icon2 } from "../../assets/icon"

export const Vision = () => {
    return (
        <section className=" bg-[#F6F6FF] px-[102px] pb-16">
            <div className="flex items-center justify-center gap-x-12">
                <div className="w-1/2">
                    <div className="mb-4 mt-10">
                        <img src={icon1} alt="Our Vision" />
                    </div>

                    <div>
                        <h2 className="text-[#000000] font-epilogue
                         text-[24px] leading-[32px] tracking-[3px] font-normal">OUR VISION</h2>
                    </div>

                    <div>
                        <h3 className=" font-poppins font-[700px] text-[40px] mb-4
                        tracking-[-1px] text-[#000000] leading-[64px]">Explore.Lead.Do</h3>
                    </div>

                    <div>
                        <p className=' font-dm-sans font-normal text-[24px] leading-[31px] text-[#9F9A9A]'>
                            We are lowering the barrier of entry
                            to accepting global payments by bridging
                            the gap between fiat and crypto
                            currencies. Achieving swift and
                            seamless payment processing is the
                            goal for us at Lazerpay, by building
                            a decentralised and multi-chain payment
                            gateway.
                        </p>
                    </div>

                </div>

                <div className="w-1/2">
                    <div className="mb-4 ">
                        <img src={icon2} alt="What we do" />
                    </div>

                    <div>
                        <h2 className="text-[#000000] font-epilogue
                         text-[24px] leading-[32px] tracking-[3px] font-normal">WHY WE DO THIS</h2>
                    </div>

                    <div>
                        <h3 className=" font-poppins font-[700px] text-[40px] mb-4
                        tracking-[-1px] text-[#000000] leading-[64px]">Explore.Lead.Do</h3>
                    </div>

                    <div>
                        <p className=' font-dm-sans font-normal text-[24px] leading-[31px] text-[#9F9A9A]'>
                            We are lowering the barrier of entry
                            to accepting global payments by bridging
                            the gap between fiat and crypto
                            currencies. Achieving swift and
                            seamless payment processing is the
                            goal for us at Lazerpay, by building
                            a decentralised and multi-chain payment
                            gateway.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}