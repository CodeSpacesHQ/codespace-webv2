import { formPurpose } from "../../data/formPurpose";
import Checkbox from "./CheckBox";

const ContactBody = () => {
  return (
    <section className="min-h-[60vh] px-7 lg:px-[102px] relative items-center">
      <div className="max-w-[1500px] mx-auto pb-60">
        <form
          action="https://formsubmit.co/lazbright1@gmail.com"
          method="POST"
          id="email"
          className="text-[#344054] font-inter max-w-3xl"
        >
          <div>
            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting CodeSpace, will get in touch with you soon."
            />
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                id="name"
                type="text"
                name="Name"
                placeholder="Your name"
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
                name="Email"
                placeholder="you@company.com"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="project"
              >
                How can we help?
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[128px]"
                id="project"
                name="Project"
                placeholder="Tell us a little about the project..."
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-sm font-medium mb-5"
                htmlFor="purpose"
              >
                Purpose
              </label>
              <div className="grid grid-cols-2 gap-4">
                {formPurpose.map(({ key, value }) => (
                  <Checkbox
                    key={key}
                    value={value}
                    onChange={(checked) => {
                      // Handle the checkbox value change here
                      console.log(
                        `${value} checkbox is ${
                          checked ? "checked" : "unchecked"
                        }`
                      );
                    }}
                  />
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
