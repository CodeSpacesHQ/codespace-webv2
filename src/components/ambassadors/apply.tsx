export const Apply = () => {
    return (
        <section className="font-gelion flex flex-row justify-center items-center bg-primary pt-[82px] pb-[59px] relative overflow-hidden">
            <div className="flex flex-col justify-center mx-10 md:mx-0 items-center bg-light-purple pt-[82px] pb-[59px] rounded-3xl">

                <p className="font-poppins max-w-[1500px] mx-auto px-7 xl:px-[102px] sm:px-[64px] font-normal text-base sm:text-2xl/9 tracking-[-0.20000000298023224px]">
                    If this aligns with your goals, then you're a great fit as a Codespace Ambassador
                </p>
                <a
                    target="_blank"
                    className="mt-8 wow animate-up"
                    href="https://forms.gle/b4kKAPBT3g1oCjVW8"
                    style={{ visibility: "visible" }}
                >
                    <button
                        className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap min-w-max font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-small px-unit-6 text-xl gap-unit-3 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none border-default bg-primary text-light-purple data-[hover=true]:opacity-hover h-10 flex px-4 border-none"
                        type="button"
                    >
                        <span className="flex-1 text-left text-[14px] font-small">Apply Now</span>
                    </button>
                </a>

            </div>
        </section>
    );
};
