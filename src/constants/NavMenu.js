const navMenu = [
  {
    label: "Home",
    route: "/",
    auth: false,
  },
  {
    label: "Products",
    route: "/Products",
    auth: false,
  },
  {
    label: "Smartphones",
    route: "/smartphones",
    auth: false,
  },
  {
    label: "Laptops",
    route: "/laptops",
    auth: false,
  },

  {
    label: "Contact Us",
    route: "/contact",
    auth: true,
  },
];

const authMenu = [
  {
    label: "Login",
    route: "/auth/login",
    auth: false,
  },

  {
    label: "Register",
    route: "/auth/register",
    auth: false,
  },
];

export { authMenu };

export default navMenu;
