import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import ProdContext from "../../context/ProdContext";
import { useContext } from "react";

const Billing = () => {
  const { state } = useContext(ProdContext);
  console.log(state.cart);
  

  const subtotal = state.cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const billingForm = {
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street: "",
    town: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    addInfo: "",
  };

  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: billingForm,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      company: Yup.string(),
      country: Yup.string().required("Please select your Country/Region"),
      street: Yup.string().required("Street address is required"),
      town: Yup.string().required("Town/City is required"),
      province: Yup.string().required("Please select your Province"),
      zip: Yup.number().required("Zip code is required"),
      phone: Yup.number().required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      addInfo: Yup.string(),
    }),
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });
  return (
    <>
      <div className="flex">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col p-15 m-5 space-y-6 md:w-[500px] lg:w-[600px] mx-auto">
            <h6 className="font-['Poppins'] font-medium text-[36px]">
              Billing details
            </h6>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-between gap-4">
                {/* names */}
                <div className="flex justify-between gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-normal mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-normal mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                {/* company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-normal mb-2"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={values.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                  />
                  {errors.company && touched.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
                {/* country */}
                <div className="flex flex-col">
                  <label
                    htmlFor="country"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleChange}
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FBEBB5]"
                  >
                    <option value="">Select Country</option>
                    <option value="australia">Australia</option>
                    <option value="nepal">Nepal</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                  </select>
                  {touched.country && errors.country && (
                    <p className="text-red-500 text-sm">{errors.country}</p>
                  )}
                </div>

                {/* street address */}
                <div>
                  <label
                    htmlFor="street"
                    className="block text-sm font-normal mb-2"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={values.street}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                  />
                  {errors.street && touched.street && (
                    <p className="text-red-500 text-sm mt-1">{errors.street}</p>
                  )}
                </div>

                {/* town / city */}
                <div>
                  <label
                    htmlFor="town"
                    className="block text-sm font-normal mb-2"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="town"
                    id="town"
                    value={values.town}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                  />
                  {errors.town && touched.town && (
                    <p className="text-red-500 text-sm mt-1">{errors.town}</p>
                  )}
                </div>

                {/* province */}
                <div className="flex flex-col">
                  <label
                    htmlFor="province"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Province
                  </label>
                  <select
                    id="province"
                    name="province"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleChange}
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FBEBB5]"
                  >
                    <option value="">Select Province</option>
                    <option value="province 1">Province 1</option>
                    <option value="province 2">Province 2</option>
                    <option value="province 3">Province 3</option>
                    <option value="province 4">Province 4</option>
                  </select>
                  {touched.province && errors.province && (
                    <p className="text-red-500 text-sm">{errors.province}</p>
                  )}
                </div>

                {/* zip code */}
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-normal mb-2"
                  >
                    Zip Code
                  </label>
                  <input
                    type="number"
                    name="zip"
                    id="zip"
                    value={values.zip}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                  />
                  {errors.zip && touched.zip && (
                    <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
                  )}
                </div>

                {/* phone number */}
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-normal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* additional info */}
                <div className="mt-5">
                  <input
                    type="text"
                    name="addInfo"
                    id="addInfo"
                    value={values.addInfo}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#FBEBB5] outline-none"
                    placeholder="Additional Information (Optional)"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

      <div className="w-full md:w-1/2">
        <div className="flex flex-col p-15 m-5 space-y-4 md:w-[500px] lg:w-[600px] mx-auto">
          <div className="flex justify-between items-center pb-2">
            <h6 className="font-['Poppins'] font-medium text-[24px]">
              Product
            </h6>
            <h6 className="font-['Poppins'] font-medium text-[24px]">
              Subtotal
            </h6>
          </div>

          {state.cart.length === 0 ? (
            <p className="text-gray-500 py-5 text-center">Your cart is empty</p>
          ) : (
            state.cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center py-2"
              >
                <p className="font-['Poppins'] font-normal text-[14px]">
                  {item.title} x {item.qty || 1}
                </p>
                <p className="font-['Poppins'] font-normal text-[14px]">
                  Rs. {(item.price * (item.qty || 1)).toLocaleString()}
                </p>
              </div>
            ))
          )}

          <div className="flex justify-between items-center pt-2">
            <p className="font-['Poppins'] font-normal text-[14px]">Subtotal</p>
            <p className="font-['Poppins'] font-normal text-[14px]">
              Rs. {subtotal.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-['Poppins'] font-normal text-[14px]">Total</p>
            <p className="font-['Poppins'] font-bold text-[24px] text-[#B88E2F]">
              Rs. {subtotal.toLocaleString()}
            </p>
          </div>

          <hr className="border-gray-300" />
          <p className="text-[#9F9F9F] font-['Poppins'] font-light">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          <div className="flex items-center mb-2 mt-4">
            <input
              id="direct-bank"
              type="radio"
              name="payment"
              value="direct-bank"
              className="w-4 h-4 text-[#FBEBB5] border-gray-300 focus:ring-[#FBEBB5]"
            />
            <label
              htmlFor="direct-bank"
              className="ms-2 text-sm font-medium text-[#9F9F9F] hover:text-black"
            >
              Direct Bank Transfer
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="cod"
              type="radio"
              name="payment"
              value="cod"
              defaultChecked
              className="w-4 h-4 text-[#FBEBB5] border-gray-300 focus:ring-[#FBEBB5]"
            />
            <label
              htmlFor="cod"
              className="ms-2 text-sm font-medium text-[#9F9F9F] hover:text-black"
            >
              Cash on Delivery
            </label>
          </div>

          <p className="text-black font-['Poppins'] font-light">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <span className="font-bold">privacy policy.</span>
          </p>

          <Link
            type="submit"
            className="text-black border py-2 px-10 rounded-md hover:shadow-md hover:bg-[#FBEBB5] transition-all duration-200 block mx-auto mt-5 text-center"
          >
            Place Order
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Billing;
