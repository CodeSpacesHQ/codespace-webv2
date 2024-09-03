interface MenuItems {
  key: number;
  name: string;
  where: string;
}

export const menuItems: MenuItems[] = [
  {
    key: 1,
    name: "About Us",
    where: "/about",
  },
  {
    key: 2,
    name: "Donate",
    where: "/donate",
  },
  {
    key: 3,
    name: "Shop",
    where: "/shop",
  },
  {
    key: 4,
    name: "Ambassadors",
    where: "/ambassadors",
  },
  // {
  //   key: 4,
  //   name: "Job Opportunities",
  //   where: "/job",
  // },
  {
    key: 5,
    name: "Blog",
    where: "https://codespaceafrica.medium.com/",
  },
  {
    key: 6,
    name: "Contact Us",
    where: "/contact",
  },
];
