import axios from "axios";

const login = ({ email, password }) => {
  axios.post(
    "https://nodejs-20240519.vercel.app/api/auth/login",
    (email, password)
  );
};

export { login };
