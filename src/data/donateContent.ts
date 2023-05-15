interface donateItems {
  key: number;
  title: string;
  text: string;
  buttonText: string;
  link: string;
}

export const donateContents: donateItems[] = [
  {
    key: 1,
    title: "PARTNER WITH US",
    text: "Collaborate with us to help achieve our goal of empowering more genz-s in tech throughout Africa! Let's work together to expand our reach and make a positive impact on the tech industry.",
    buttonText: "GET STARTED",
    link: "/contact",
  },
  {
    key: 1,
    title: "DONATE IN CASH",
    text: "We appreciate every cash donation we receive and strive to maximize its impact. Your contribution will help shape a brighter future for the tech industry by providing entry-level tech professionals with opportunities to advance their careers. We are committed to ensuring that your donation goes a long way in creating a positive impact on the lives of these individuals and the industry as a whole.",
    buttonText: "DONATE NOW",
    link: "https://paystack.com/pay/77iitrxp80",
  },
  {
    key: 1,
    title: "DONATE IN KIND",
    text: "At CodeSpace Africa, we welcome donations in kind from anyone willing to support our community members. If you have any laptops, books, or other tech gear that you would like to donate, please don't hesitate to contact us at",
    buttonText: "SEND US AN EMAIL",
    link: "mailto:info@codespaceafrica.com",
  },
];
