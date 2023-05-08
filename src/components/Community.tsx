import React, { useRef, useState, useEffect } from "react";

import { star1, star2 } from "../assets/icon";
import { join, community } from "../assets/images";

const Community: React.FC = () => {
  const elementRef = useRef<HTMLImageElement>(null);
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    let top: number;
    const checkImage = () => {
      if (element) {
        top = element.offsetTop;
        // Check if the element is in view
        if (document.documentElement.scrollTop >= top) {
          const height = document.documentElement.clientHeight;
          let scroll = document.documentElement.scrollTop;
          setCompletion((scroll / height) * 100);
          window.addEventListener("scroll", checkImage);
        }
      }
    };
    window.addEventListener("scroll", checkImage);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center mb-8 cursor-pointer xmd:flex-row">
      <div className="relative flex items-center justify-center w-full xmd:w-3/5">
        <div className="xmd:-ml-20">
          <img
            src={join}
            className="object-cover w-[271px] sm:w-[371px] "
            alt="Join the community"
          />
          <img
            ref={elementRef}
            src={community}
            className="object-cover w-[192px] sm:w-[250px]"
            style={{
              transform: `translate(${completion}px, -10px)`,
            }}
            alt="Join the community"
          />
        </div>

        <div className=" absolute w-[20px] sm:w-[40px] object-cover left-0 top-8 xmd:top-12">
          <img
            src={star2}
            alt={`star logo`}
            className="object-cover w-full animate-float max-sm:[36px]"
          />
        </div>

        <div className=" absolute right-2  w-[20px] sm:w-[40px] object-cover sm:right-8 md:right-12 xmd:right-24 top-8 xmd:top-20">
          <img
            src={star1}
            alt={`star logo`}
            className="object-cover w-full animate-float max-sm:[36px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-8 xmd:w-2/5 xmd:items-start xmd:mt-0 ">
        <p
          className=" mb-6 font-gilroy text-[#8C8C8C] font-normal
                        leading-[21px] sm:leading-[32px] text-[14px] sm:text-[18px] sm:max-w-sm md:text-[22px] text-center xmd:text-start max-w-xs md:max-w-lg xmd:max-w-md"
        >
          <div className="max-lg:hidden">
            Be a part of our ever growing community by joining our Telegram
            channel and getting periodic updates.
          </div>
          <div className="lg:hidden">
            Be a part of our ever growing
            <br /> community by joining our Telegram
            <br />
            channel and getting periodic updates.
          </div>
        </p>

        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBjs67bGLUuoJqUIFlIse2SQeHnmBCDp07cz_HrAlHSNKZsA/viewform?usp=send_form"
            target="_blank"
          >
            <button
              className=" bg-[#5D5CD6] hover:bg-white hover:border hover:border-[#5D5CD6] 
                            transition duration-300 ease-in-out hover:text-[#5D5CD6]
                            rounded-[40px] p-4 px-6 font-gilroy text-[#FEFEFE]
                            font-bold w-250px md:w-[300px]"
            >
              Join our community
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
