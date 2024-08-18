
const navMenu = [
  {
    id: "home",
    label: "Home",
    route: "/",
    auth: false,
  },
  {
    id: "Products",
    label: "Products",
    route: "/Products",
    auth: false,
  },
  {
    id: "Smartphones",
    label: "Smartphones",
    route: "/smartphones",
    auth: false,
  },
  {
    id: "Laptops",
    label: "Laptops",
    route: "/laptops",
    auth: false,
  },

  {
    id: "Contact",
    label: "Contact us",
    route: "/contact",
    auth: false,
  },
];

const authMenu = [
  {
    id: "Login",
    label: "Login",
    route: "/auth/login",
    auth: false,
  },

  {
    id: "Register",
    label: "Register",
    route: "/auth/register",
    auth: false,
  },
];

const userMenu = [
  {
    id: "Dashboard",
    label: "Dashboard",
    route: "/member/dashboard",
    auth: true,
  },
];

export { authMenu, userMenu };

export default navMenu;
