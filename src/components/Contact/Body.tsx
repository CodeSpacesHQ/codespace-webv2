import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { formPurpose } from "../../data/formPurpose";
import { useNavigate } from "react-router";
import questionIcon from "../../assets/icon/question.svg";
import HelpIcon from "../../assets/icon/help.svg";
import arrow from "../../assets/icon/35-arrow-right-2.svg";

interface FormValues {
  Name: string;
  email: string;
  project: string;
  purpose: string[];
}

const ContactBody: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    Name: "",
    email: "",
    project: "",
    purpose: [],
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Load cached form data on component mount
  useEffect(() => {
    const cachedData = localStorage.getItem("formData");
    if (cachedData) {
      setValues(JSON.parse(cachedData));
    }
  }, []);

  const navigate = useNavigate();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      if (checked) {
        setValues((prevValues) => ({
          ...prevValues,
          purpose: [...prevValues.purpose, name],
        }));
      } else {
        setValues((prevValues) => ({
          ...prevValues,
          purpose: prevValues.purpose.filter((item) => item !== name),
        }));
      }
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData();
    formData.append("Name", values.Name);
    formData.append("Email", values.email);
    formData.append("Project", values.project);
    const checkedPurpose = formPurpose.filter(({ key }) =>
      values.purpose.includes(String(key))
    );
    checkedPurpose.forEach(({ value }) => {
      formData.append("Purpose[]", value);
    });

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Clear form data from cache on successful submission
          localStorage.removeItem("formData");
          navigate("/submitted");
        } else {
          // Error, do something
          navigate("/404");
        }
      })
      .catch((error) => {
        navigate("/404");
        console.log(error);
      });
  };
  // Cache form data on component update
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(values));
  }, [values]);

  return (
    <section className="min-h-[60vh] pt-[81px] sm:pt-[131px] px-7 sm:px-16 lg:px-[102px] relative items-center">
      <div className="flex items-start justify-between max-lg:flex-col-reverse gap-[60px] max-w-[1500px] mx-auto pb-60">
        <div className="w-full sm:w-4/5">
          <div className="text-[26px] mb-16 max-lg:mt-12 max-md:mt-6">
            <div className="relative -left-7">
              <img className="w-36" src={questionIcon} alt="Services icons" />
            </div>
            <h4 className="-mt-2 font-medium mb-[25px] line-clamp-1">
              General questions
            </h4>
            <p className="text-[#737373] leading-[34px] tracking-[-0.02em]">
              For general queries, including partnership opportunities. If you
              have any questions, feel free to contact us through the form.
            </p>
          </div>
          <div className="text-[26px]">
            <div className="relative -left-7">
              <img className="w-36" src={HelpIcon} alt="Services icons" />
            </div>
            <h4 className="-mt-2 font-medium mb-[25px] line-clamp-1">
              Our help center
            </h4>
            <p className="text-[#737373] leading-[34px] tracking-[-0.02em] mb-[44px]">
              Need help or have any questions, get answers from our FAQ
            </p>
            <NavLink
              to={"/faq"}
              className="flex justify-left items-center font-normal text-black leading-9 text-[24px] tracking-[-0.02em] hover:underline"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>Read our FAQs</p>
              <img
                className={`ms-[7px] transition-transform ${
                  isHovered ? "translate-x-2" : ""
                }`}
                src={arrow}
                alt="icon"
              />
            </NavLink>
          </div>
        </div>
        <div className="w-full">
          <h1 className="mb-[46px] font-inter font-semibold text-2xl sm:text-[40px]/[60px] -tracking-[0.02em]">
            Please fill out the form and we'll be in touch with you shortly.
          </h1>
          <form
            onSubmit={handleSubmit}
            id="email"
            className="text-[#344054] font-inter"
            action="https://formsubmit.co/ajax/hello@codespaceafrica.com"
            method="POST"
          >
            <div>
              <input type="hidden" name="_subject" value="New submission!" />
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full h-12 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={values.Name}
                  onChange={handleChange}
                  name="Name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full h-12 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="project"
                >
                  How can we help?
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[128px]"
                  id="project"
                  placeholder="Tell us a little about the project..."
                  value={values.project}
                  onChange={handleChange}
                  name="project"
                />
              </div>
              <div className="mb-8">
                <label
                  className="block mb-5 text-sm font-medium"
                  htmlFor="purpose"
                >
                  Purpose
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {formPurpose.map(({ key, value }) => (
                    <div key={key} className="flex items-center">
                      <input
                        className="w-5 h-5 mr-2 leading-tight"
                        type="checkbox"
                        name={key.toString()} // Convert key to string
                        checked={values.purpose.includes(key.toString())} // Convert key to string
                        onChange={handleChange}
                      />
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full h-12 text-white border rounded-lg cursor-pointer bg-primary hover:transition-all hover:bg-white hover:text-primary hover:border-primary"
              />
            </div>
          </form>
        </div>

        <img
          className="absolute bottom-0 w-32 h-32 md:w-[213px] md:h-[206px] -z-10 right-0"
          src="/assets/asterisk.svg"
          width={213}
          height={206}
          alt="asterisk icon"
        />
      </div>
    </section>
  );
};

export default ContactBody;
