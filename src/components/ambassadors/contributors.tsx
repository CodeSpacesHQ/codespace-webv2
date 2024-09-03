import { ambassadors, requirements } from "../../data/ambassadors";

export const Contributors = () => {
    return (
        <>
            <section className="font-gelion flex flex-col gap-8 justify-center items-center bg-light-purple pt-[82px] pb-[59px] relative overflow-hidden">
                <p className="font-poppins max-w-[1500px] mx-auto px-7 xl:px-[102px] sm:px-[64px] font-[700] uppercase text-base sm:text-[64px] tracking-[-0.20000000298023224px]">
                    How do I contribute ?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 pb-8">
                    {ambassadors.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="bg-primary text-light-purple bg-no-repeat bg-right hover:z-30 relative flex flex-col items-center justify-center w-full md:w-[560px] h-[184px] xl:h-[254px] px-6 text-left z-10 cursor-pointer  xl:ml-[0px]"
                                style={{ visibility: "visible" }}
                            >
                                <div className="flex flex-col ">
                                    <div className="w-[88px] xl:w-[160px] uppercase font-black text-[14px] xl:text-[30px] text-start">
                                        {data?.title}
                                    </div>
                                    <div className="ml-2 flex-1">
                                        <p className="text-[14px] xl:text-[20px] mt-3">
                                            {data?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="font-gelion flex flex-col gap-8 justify-start items-start bg-primary pt-[82px] pb-[59px] relative overflow-hidden">
                <p className="font-poppins max-w-[1500px] mx-auto px-7 xl:px-[102px] sm:px-[64px] font-[700] uppercase text-base sm:text-[64px] tracking-[-0.20000000298023224px] text-light-purple">
                    What do I benefit ?
                </p>

                <div className="gap-3 pb-8 px-10">
                    {ambassadors.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="text-light-purple bg-no-repeat bg-right hover:z-30 relative flex flex-col items-center justify-center w-full md:w-[560px] h-[184px] xl:h-[254px] px-6 text-left z-10 cursor-pointer  xl:ml-[0px]"
                                style={{ visibility: "visible" }}
                            >
                                <div className="flex flex-col ">
                                    <div className="uppercase font-black text-[14px] xl:text-[30px] text-start">
                                        For {data?.title}
                                    </div>
                                    <div className="ml-2 flex-1 mx-3 mt-8">
                                        <ul className="list-disc px-5">
                                            {data?.rewards?.map(($data, $i) => {
                                                return (
                                                    <>
                                                        <li key={$i} className="text-[14px] xl:text-[18px]">
                                                            {$data}
                                                        </li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="font-gelion flex flex-col gap-8 justify-start items-start bg-light-purple pt-[82px] pb-[59px] relative overflow-hidden">
                <p className="font-poppins max-w-[1500px] mx-auto px-7 xl:px-[102px] sm:px-[64px] font-[700] uppercase text-base sm:text-[64px] tracking-[-0.20000000298023224px] text-primary">
                    What do I need to qualify ?
                </p>

                <div className="gap-3 pb-8 px-10">
                    <div className="ml-2 flex-1 mx-3 mt-8">
                        <ul className="px-5 text-dark-blue">
                            {requirements.map(($data, $i) => {
                                return (
                                    <>
                                        <li key={$i} className="text-[14px] xl:text-[18px] pb-4">
                                           - {$data}
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};
