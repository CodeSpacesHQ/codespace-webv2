

export const EmailTemplate = () => {
    return (
        <section className="font-barlow pb-40">
            <div>
                <div className="w-full absolute bg-bgTemplate bg-cover z-30 h-[277px] flex justify-center items-center"></div>
                <div className=" absolute w-full bg-primary h-[277px]">
                    <h1 className="text-6xl font-gelion text-white absolute w-full
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-32 leading-snug
                ">
                        Connecting Gen Z Reshaping how
                        Africa's story is told and shared with tech
                    </h1>
                </div>
            </div>


            <div className="pt-[277px] px-32 bg-[#FFFFFF] text-[#5E5E5E]">
                <div className="my-6 font-semibold text-[32px] leading-[38px]">
                    <h2>Hey Clinton,</h2>
                </div>

                <div className=" text-[26px] font-normal leading-[31px]">

                    <p className="mb-6">
                        Welcome to the Code Space community! We're thrilled to have you onboard and excited to see the unique perspective you bring to our group of innovative developers.
                    </p>

                    <p className="mb-6">
                        As a member of Code Space, you'll have access to exclusive resources, networking opportunities, and support to help you grow as a developer. We're committed to fostering an inclusive and supportive environment where everyone's voice is heard, and creativity thrives.
                    </p>

                    <p className="mb-6">
                        To stay connected with our community, we encourage you to join our Slack channel by clicking on this link [insert link]. This is where we share ideas, ask questions, and collaborate with each other. You'll also receive important updates and announcements from us on this channel.
                    </p>

                    <p className="mb-6">
                        Don't forget to follow us on Twitter [@codespace] to stay updated on the latest news, events, and opportunities in the tech industry.
                    </p>

                    <p className="mb-6">
                        Thank you for joining our community, and we look forward to seeing you thrive and contribute to the Code Space community.
                    </p>

                    <p className="mb-6">
                        <span>
                            Best regards,
                        </span> <br /><br />

                        <span>
                            [Your Name]
                        </span>
                    </p>

                </div>

            </div>
        </section>
    )
}