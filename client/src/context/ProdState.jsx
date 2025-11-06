import React, { useReducer, useState, useEffect } from "react";
import { cartReducer } from "./Reducer.jsx";
import ProdContext from "./ProdContext";

const ProdState = (props) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, { products: [], cart: [] });

  const allProduct = async () => {
    try {
      const response = await fetch(
        "https://intern-project-rxzq.onrender.com/api/products/getProducts"
      );
      const data = await response.json();
      if (data.success) setProducts(data.products);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // edit
  const editProduct = async (id, updateData) => {
    const { title, description, price, category } = updateData;
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      console.error("No authentication token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `https://intern-project-rxzq.onrender.com/api/products/updateProduct/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authToken: authToken,
          },
          body: JSON.stringify({ title, description, price, category }),
        }
      );

      if (!response.ok) {
        console.log("Edit product error:", response.status);
      }

      const data = await response.json();
      allProduct();
      return data;
    } catch (error) {
      console.error("Edit product error:", error.message);
    }
  };

  // delete
  const deleteProduct = async (id) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return alert("Please login first!");

    try {
      const response = await fetch(
        `https://intern-project-rxzq.onrender.com/api/products/deleteProduct/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json", authToken },
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("Product deleted successfully");
        allProduct();
      }
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <ProdContext.Provider
      value={{
        products,
        state,
        dispatch,
        allProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdState;
