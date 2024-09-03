import AnimateWords from "../../config/textAnimation";
export const Note = () => {
    return (
        <section className="font-gelion bg-light-purple pt-[82px] pb-[59px] relative overflow-hidden">
            <div className="space-y-6 mx-auto text-center w-[90%] max-w-5xl ">
                <h2 className="text-primary text-sm md:text-2xl leading-[28.79px] tracking-[12%] uppercase">
                    <AnimateWords text="What is Codespace Ambassador programme about?" />
                </h2>

                <p className="font-poppins text-base md:text-2xl leading-[20.83px] md:leading-9 -tracking-[0.2px] pb-10">
                    Codespace Ambassadors are a programme for visionary leaders looking to use their skills to expand the Codespace ecosystem and onboard new community members and drive engagement around existing members. </p>
            </div>

            <div className="absolute w-24 h-24 md:-bottom-2 bottom-4 right-5 md:w-40 md:h-40">
                <div className="absolute top-0 left-0 w-24 h-24 border-2 border-dashed rounded-full md:w-40 md:h-40 border-primary animate-spin-slow"></div>
                <div className="w-16 h-16 mx-auto my-4 rounded-full bg-primary md:w-32 md:h-32 ">
                    <img
                        className="w-16 h-16 md:w-32 md:h-32"
                        src="/assets/wink-boy.svg"
                        alt=""
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
};
