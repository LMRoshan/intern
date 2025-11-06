import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const signupFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Full Name must be at least 2 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("http://localhost:3010/api/auth/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (data.success) {
          resetForm(); 
          navigate("/account"); 
          alert(data.message || "Signup successful!"); 
        } else {
          alert(data.message || "Signup failed. Check your inputs.");
        }
      } catch (error) {
        alert("Error signing up: " + error.message);
      }
    },
  });

  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex flex-col items-center w-full max-w-sm">
        <h6 className="font-['Poppins'] text-[30px] font-medium mb-10">
          Sign Up
        </h6>
        <form onSubmit={signupFormik.handleSubmit} className="w-full">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-black font-['Poppins']"
            >
              Full Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={signupFormik.values.username}
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              className="w-full border border-black text-black text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
            />
            {signupFormik.touched.username && signupFormik.errors.username && (
              <p className="text-red-500 text-[12px] mt-2">
                {signupFormik.errors.username}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black font-['Poppins']"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={signupFormik.values.email}
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              className="w-full border border-black text-black text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
            />
            {signupFormik.touched.email && signupFormik.errors.email && (
              <p className="text-red-500 text-[12px] mt-2">
                {signupFormik.errors.email}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black font-['Poppins']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupFormik.values.password}
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              className="w-full border border-black text-black text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
            />
            {signupFormik.touched.password && signupFormik.errors.password && (
              <p className="text-red-500 text-[12px] mt-2">
                {signupFormik.errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="font-['Poppins'] border border-black hover:bg-[#FBEBB5] hover:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
            >
              Sign Up
            </button>
            <Link
              to="/account"
              className="font-['Poppins'] text-sm font-light text-black hover:underline"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
