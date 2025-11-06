import React, { useState } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        price: "",
        category: "",
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .required("Name is required")
          .min(2, "Name must be at least 2 characters"),
        category: Yup.string()
          .required("Category is required")
          .min(2, "Category must be at least 2 characters"),
        description: Yup.string()
          .required("Description is required")
          .min(2, "Description must be at least 2 characters"),
        price: Yup.number()
          .required("Price is required")
          .positive("Price must be positive"),
      }),
      onSubmit: async (values, { setSubmitting, resetForm }) => {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          alert("Please log in.");
          return;
        }

        if (!selectedFile) {
          alert("Please upload an image");
          return;
        }

        try {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          if (selectedFile) {
          formData.append('images', selectedFile);
        }

          const response = await fetch(
            "http://localhost:3010/api/products/createProduct",
            {
              method: "POST",
              headers: { authToken: authToken },
              body: formData,
            }
          );

          const json = await response.json();

          if (response.ok && json.success) {
            alert("Product added successfully!");
            resetForm();
            setSelectedFile(null);
          } else {
            alert(`Failed: ${json.message || "Unknown error"}`);
            console.error("Backend error response:", json);
          }
        } catch (error) {
          alert("Network Error: " + error.message);
          console.error("Network error:", error);
        } finally {
          setSubmitting(false);
        }
      },
    });

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.title && touched.title
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.title && touched.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              rows="3"
              disabled={isSubmitting}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none ${
                errors.description && touched.description
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.description && touched.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price *
              </label>
              <input
                id="price"
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.price && touched.price
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                step="0.01"
                min="0"
              />
              {errors.price && touched.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={values.category}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.category && touched.category
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <option value="">Select a category</option>
              <option value="Sofa">Sofa</option>
              <option value="Chair">Chair</option>
              <option value="Bed">Bed</option>
              <option value="Table">Table</option>
            </select>
            {errors.category && touched.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image *
            </label>
            <input
              id="images"
              name="images"
              type="file"
              onChange={handleFileChange}
              disabled={isSubmitting}
              accept="image/*"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {selectedFile && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
