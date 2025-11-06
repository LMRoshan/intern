import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, action) => {
      const { name, email, subject, message } = values;
      try {
        const response = await fetch(
          "http://localhost:3010/api/messages/createMessage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, message }),
          }
        );

        const data = await response.json();
        if (data.success) {
          alert("Message sent successfully");
          action.resetForm();
        }
      } catch (error) {
        alert("Error sending message:", error);
      }
    },
  });

  return (
    <>
      <div className="bg-[#FFFFFF] p-5">
        <div className="head flex flex-col justify-center items-center">
          <h1 className="font-['Poppins'] font-normal text-[36px] leading-none text-center pt-20 mb-3">
            Get In Touch With Us
          </h1>
          <p className="font-['Poppins'] font-light text-[#9F9F9F]  text-[16px] w-[700px] text-center">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 py-10 px-6 lg:px-20 mt-10">
          <div className="flex flex-col space-y-6 max-w-md mt-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-black text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-black text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-black text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p className="text-gray-600 mb-[-4px]">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full lg:w-[500px]">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white p-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={values.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                />
                {errors.subject && touched.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                ></textarea>
                {errors.message && touched.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className=" text-black border py-2 px-6 rounded-md hover:shadow-md hover:bg-[#FBEBB5] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
