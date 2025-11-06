import React, { useContext, useState } from "react";
import ProdContext from "../context/ProdContext";
import Navbar from "./Navbar";
import EditProduct from "./EditProduct";
import Pic from "../assets/newArrival.png";

const ProductAdmin = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, allProduct, deleteProduct, editProduct } =
    useContext(ProdContext);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    allProduct();
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const saveEdit = async (updateData) => {
    if (!selectedProduct || !selectedProduct._id) {
      alert("No product selected for editing");
      return;
    }
    try {
      await editProduct(selectedProduct._id, updateData);
      closeEditModal();
    } catch (error) {
      alert("Failed to update product: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Available Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-200"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={
                    product.img && product.img.length > 0
                      ? `http://localhost:3010/uploads/${product.img[0]}`
                      : Pic
                  }
                  // {`http://localhost:3010/uploads/${product.img[0]}`}
                  alt={product.title}
                />

                <div className="p-4">
                  <div className="mb-4">
                    <h5 className="text-xl font-semibold text-blue-600 mb-1">
                      {product.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-1">
                      Category: {product.category}
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mb-1">
                      Rs. {product.price}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openEditModal(product)}
                      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {modalVisible && selectedProduct && selectedProduct._id && (
          <EditProduct
            product={selectedProduct}
            onClose={closeEditModal}
            onSave={saveEdit}
          />
        )}
      </div>
    </>
  );
};

export default ProductAdmin;
