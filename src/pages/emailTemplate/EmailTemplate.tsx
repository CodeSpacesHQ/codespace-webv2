import { codespace } from "../../assets/icon"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, } from "react-icons/fa"
import { BsSend } from "react-icons/bs"

export const EmailTemplate = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <section className=" sm:font-barlow mx-4 my-8 md:my-16 font-poppins md:m-16 bg-[#FFFFFF]">
            <div className="relative">
                <div className="w-full absolute bg-bgTemplate bg-contain h-[125px]  z-30 mobileM:h-[250px]"></div>
                <div className=" absolute w-full bg-primary h-[125px] mobileM:h-[250px]">
                    <div className=" absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
                        <img src={codespace} alt="codespace" />
                    </div>
                </div>
            </div>


            <div className="pt-[135px] mobileM:pt-[277px] px-4  mobileM:px-8 sm:px-16 text-[#5E5E5E] bg-[#FFFFFF">
                <div className="my-6 font-semibold text-[18px] sm:text-[32px] leading-[38px]">
                    <h2>Hey Clinton,</h2>
                </div>

                <div className=" text-[15px] sm:text-[26px] font-normal leading-[31px]">

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

                <div className="mt-20">
                    <div className="w-full h-[1px] bg-gray-300"></div>
                    <div className=' flex justify-center items-center font-bold 
                    flex-col mt-12 text-center text-[#CECECE] text-sm sm:text-xl'>
                        <p className="mb-12">Need help, or have questions?</p>

                        <p className="mb-12 w-full sm:w-[450px]">Please visit out  <a href='#' className="text-[#7777DD]">contact us page</a > or reply to this message.</p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-300"></div>
                </div>

                <div>
                    <div className="flex justify-center items-center mt-8">
                        <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#7777DD] rounded-full bg-white text-[#7777DD]">
                            <FaFacebookF className=" text-[20px]" />
                        </div>
                        <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#7777DD] rounded-full bg-white text-[#7777DD] ml-4">
                            <FaTwitter className=" text-[20px]" />
                        </div>
                        <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#7777DD] rounded-full bg-white text-[#7777DD] ml-4">
                            <FaLinkedinIn className=" text-[20px]" />
                        </div>
                        <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#7777DD] rounded-full bg-white text-[#7777DD] ml-4">
                            <FaInstagram className=" text-[20px]" />
                        </div>

                        <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#7777DD] rounded-full bg-white text-[#7777DD] ml-4">
                            <BsSend className=" text-[20px]" />
                        </div>

                    </div>
                </div>


                <div className=" mt-12 pb-12 text-center  text-[12px] mobileM:text-[14px] font-bold">
                    code space | All Rights Reserved | Copyright <span>{year}</span>
                </div>

            </div>


        </section>
    )
}