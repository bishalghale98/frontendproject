import {
  CONTACT_ROUTE,
  DASHBOARD_ROUTE,
  ELECTRONICS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MEMBER_ROUTE,
  PRODUCTS_ROUTE,
  REGISTER_ROUTE,
  SMARTPHONES_ROUTE,
} from "./routes";

const navMenu = [
  {
    id: "home",
    label: "Home",
    route: `${HOME_ROUTE}`,
    auth: false,
  },
  {
    id: "Products",
    label: "Products",
    route: `${PRODUCTS_ROUTE}`,
    auth: false,
  },
  {
    id: "Smartphones",
    label: "Smartphones",
    route: `${SMARTPHONES_ROUTE}`,
    auth: false,
  },
  {
    id: "Electronic",
    label: "Electronics",
    route: `${ELECTRONICS_ROUTE}`,
    auth: false,
  },

  {
    id: "Contact",
    label: "Contact us",
    route: `${CONTACT_ROUTE}`,
    auth: false,
  },
];

const authMenu = [
  {
    id: "Login",
    label: "Login",
    route: `${HOME_ROUTE}/${LOGIN_ROUTE}`,
    auth: false,
  },

  {
    id: "Register",
    label: "Register",
    route: `${HOME_ROUTE}/${REGISTER_ROUTE}`,
    auth: false,
  },
];

const userMenu = [
  {
    id: "Dashboard",
    label: "Dashboard",
    route: `${MEMBER_ROUTE}/${DASHBOARD_ROUTE}`,
    auth: true,
  },
];

export { authMenu, userMenu };

export default navMenu;
