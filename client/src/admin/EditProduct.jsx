import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditProduct = ({ product, onClose, onSave }) => {
  const formData = {
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
  };

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      title: Yup.string().required("Name is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number().required("Price is required"),
    }),
    onSubmit: (values, action) => {
      onSave(values);
      onClose();
      action.resetForm();
    },
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-[90%] sm:w-[500px] p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-800">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.title && touched.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              value={values.category}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.category && touched.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
            {errors.description && touched.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={values.price}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.price && touched.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price}</p>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-3 pt-3 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
