import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EMAIL_REGIX } from "../constants/regex";
import Login from "./../pages/auth/Login";

const LoginForm = () => {
  const { register, handleSubmit, watch, formState } = useForm({ mode: "all" });

  const { errors } = formState;

  const password = watch("Password");

  function submitForm(data) {
    console.log(data);
  }

  return (
    <form action="" onSubmit={handleSubmit(submitForm)} noValidate>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center ">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
              <div className="w-full flex-1 mt-8">
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Register with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <label
                    htmlFor="name"
                    className="leading-7 text-xl text-gray-900"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="name"
                    placeholder="Full Name"
                    {...register("Name", {
                      required: "Full Name is required",
                    })}
                  />
                  <p className="text-red-800 pl-2">{errors.name?.message}</p>

                  <label
                    htmlFor="email"
                    className="leading-7 text-xl text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: EMAIL_REGIX,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  <p className="text-red-800 pl-2">{errors.email?.message}</p>

                  <label
                    htmlFor="Password"
                    className="leading-7 text-xl text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                    type="password"
                    placeholder="Password"
                    {...register("Password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                  <p className="text-red-800 pl-2">
                    {errors.Password?.message}
                  </p>

                  <label
                    htmlFor="confirmPassword"
                    className="leading-7 text-xl text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match.",
                    })}
                  />
                  <p className="text-red-800 pl-2">
                    {errors.confirmPassword?.message}
                  </p>

                  <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                </div>
                <div className="mt-6 text-lg text-gray-600 text-center">
                  <span>Already have an account?</span>
                  <Link to={Login} className="text-blue-400">
                    {" "}
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                <img
                  src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
                  alt=""
                  className="my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
