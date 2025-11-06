import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  const loginFormik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .min(2, "Invalid username or email")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // console.log("Login submitted:", values);
      const { identifier, password } = values;

      try {
        const response = await fetch("http://localhost:3010/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: identifier,
            email: identifier,
            password,
          }),
        });

        const data = await response.json();
        if (data.success) {
          localStorage.setItem("authToken", data.authToken);

          if (data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
            resetForm();
          }
        } else {
          alert(data.message || "Invalid username/email or password");
          resetForm();
        }
      } catch (error) {
        alert("Error logging in:", error);
      }
    },
  });

  const signupFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Signup submitted:", values);
      navigate("/register");
      resetForm();
    },
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-7 px-6">
        {/* login form */}
        <div className="flex flex-col w-full max-w-sm">
          <h6 className="font-['Poppins'] text-[30px] font-medium mb-10">
            Log In
          </h6>
          <form onSubmit={loginFormik.handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="login-identifier"
                className="block mb-2 text-sm font-medium text-black font-['Poppins']"
              >
                Username or email address
              </label>
              <input
                type="identifier"
                id="login-identifier"
                name="identifier"
                value={loginFormik.values.identifier}
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                className="w-full border border-black text-black text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                required
              />
              {loginFormik.touched.identifier &&
                loginFormik.errors.identifier && (
                  <p className="text-red-500 text-[12px] mt-2">
                    {loginFormik.errors.identifier}
                  </p>
                )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="login-password"
                className="font-['Poppins'] block mb-2 text-sm font-medium text-black"
              >
                Your password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={loginFormik.values.password}
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                className="w-full border border-black text-black text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                required
              />
              {loginFormik.touched.password && loginFormik.errors.password && (
                <p className="text-red-500 text-[12px] mt-2">
                  {loginFormik.errors.password}
                </p>
              )}
            </div>
            <div className="flex items-center mb-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded-sm"
              />
              <label
                htmlFor="remember"
                className="font-['Poppins'] ml-2 text-[14px] font-light text-black"
              >
                Remember me
              </label>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="font-['Poppins'] border border-black hover:bg-[#FBEBB5] hover:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
              >
                Log In
              </button>
              <Link
                to="/forgot-password"
                className="font-['Poppins'] text-sm font-light text-black hover:underline"
              >
                Lost Your Password?
              </Link>
            </div>
          </form>
        </div>

        {/* signup form */}
        <div className="flex flex-col w-full max-w-sm">
          <h6 className="font-['Poppins'] text-[30px] font-medium mb-10">
            Register
          </h6>
          <form onSubmit={signupFormik.handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="signup-email"
                className="block mb-2 text-sm font-['Poppins'] font-medium text-black"
              >
                Email address
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                value={signupFormik.values.email}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                className="w-full border border-black text-black text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                required
              />
              {signupFormik.touched.email && signupFormik.errors.email && (
                <p className="text-red-500 text-[12px] mt-2">
                  {signupFormik.errors.email}
                </p>
              )}
            </div>

            <p className="font-['Poppins'] text-[13px] font-light mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="font-['Poppins'] text-[13px] font-light mb-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-medium">privacy policy.</span>
            </p>

            <button
              type="submit"
              navigate="/register"
              className="border border-black hover:bg-[#FBEBB5] hover:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forms;
