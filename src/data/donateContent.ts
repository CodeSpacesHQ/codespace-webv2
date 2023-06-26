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
    text: "Teamwork makes things work, and this is exactly why we hope to partner with you. Through effective collaborations, we can empower young tech talents throughout Africa! Let's work together to expand our reach and make a positive impact on the tech industry.    ",
    buttonText: "GET STARTED",
    link: "/contact",
  },
  {
    key: 2,
    title: "DONATE IN CASH",
    text: "We appreciate every cash donation we receive and strive to maximize its impact. Your contribution will help shape a brighter future for the tech industry by providing entry-level tech professionals with opportunities to advance their careers. We remain transparent with every penny donated through monthly and annual reports of our expenditures.    ",
    buttonText: "DONATE NOW",
    link: "https://paystack.com/pay/77iitrxp80",
  },
  {
    key: 3,
    title: "DONATE IN KIND",
    text: "At Code Space Africa, we welcome donations in kind from anyone willing to support our community members. If you have any laptops, books, or other tech gear that you would like to donate, please don't hesitate to contact us at     ",
    buttonText: "SEND US AN EMAIL",
    link: "mailto:info@codespaceafrica.com",
  },
];
