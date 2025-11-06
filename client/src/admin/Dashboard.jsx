import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Navbar from "./Navbar";
import Img1 from "../assets/newArrival.png";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const getMessage = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        navigate("/account");
        return;
      }

      const response = await fetch(
        "http://localhost:3010/api/messages/getMessages",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authToken: authToken,
          },
        }
      );

      const json = await response.json();
      if (json.success) {
        setMessages(json.messages);
      }
    } catch (error) {
      console.error("Network Error", error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        navigate("/account");
        return;
      }

      const response = await fetch(
        `http://localhost:3010/api/messages/deleteMessage/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authToken: authToken,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || response.status);
      } else {
        alert("Message deleted successfully");
      }

      getMessage();
    } catch (error) {
      console.error("Network Error", error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <aside className="w-full md:w-1/5 bg-gray-100 shadow-md p-6">
          <h5 className="text-lg font-semibold underline mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <Link
                to="/addProd"
                className="block text-gray-800 hover:text-yellow-600 transition"
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/adminProd"
                className="block text-gray-800 hover:text-yellow-600 transition"
              >
                View Products
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Welcome banner */}
          <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src={Img1}
              alt="Admin Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-3xl font-bold drop-shadow-md">Welcome</h1>
              <h1 className="text-5xl font-extrabold uppercase text-yellow-400 drop-shadow-md">
                Admin
              </h1>
            </div>
          </div>

          {/* Messages */}
          <section className="mt-10">
            <h3 className="text-2xl font-bold border-b-2 border-yellow-500 inline-block pb-1 text-gray-800">
              Messages from Visitors
            </h3>

            {messages.length === 0 ? (
              <p className="mt-6 text-gray-500 text-center">
                No messages found.
              </p>
            ) : (
              <div className="mt-6 space-y-6">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className="bg-white shadow-md rounded-lg p-5 border border-gray-200 relative"
                  >
                    <h5 className="flex items-center text-lg font-semibold mb-2 text-gray-800">
                      <FaUser className="text-yellow-500 mr-2" /> {msg.name}
                    </h5>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-800">Email:</span>{" "}
                      {msg.email}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium text-gray-800">
                        Subject:
                      </span>{" "}
                      {msg.subject}
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium text-gray-800">
                        Message:
                      </span>{" "}
                      {msg.message}
                    </p>

                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 text-sm rounded-md transition"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
