import React, { useState, useEffect } from "react";
import { formPurpose } from "../../data/formPurpose";
import { useNavigate } from "react-router";

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
      <div className="max-w-[1500px] mx-auto pb-60">
        <form
          onSubmit={handleSubmit}
          id="email"
          className="text-[#344054] font-inter max-w-3xl"
          action="https://formsubmit.co/ajax/hello@codespaceafrica.com"
          method="POST"
        >
          <div>
            <input type="hidden" name="_subject" value="New submission!" />
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={values.Name}
                onChange={handleChange}
                name="Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
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
                className="block text-sm font-medium mb-2"
                htmlFor="project"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[128px]"
                id="project"
                placeholder="Write us something....."
                value={values.project}
                onChange={handleChange}
                name="project"
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-sm font-medium mb-5"
                htmlFor="purpose"
              >
                Why are you contacting us
              </label>
              <div className="grid grid-cols-2 gap-4">
                {formPurpose.map(({ key, value }) => (
                  <div key={key} className="flex items-center">
                    <input
                      className="mr-2 leading-tight w-5 h-5"
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
              className="bg-primary text-white w-full rounded-lg h-12 cursor-pointer hover:transition-all hover:bg-white hover:text-primary hover:border-primary border"
            />
          </div>
        </form>
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
