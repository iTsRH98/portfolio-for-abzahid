import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jsnka7g",
        "template_hz7uufk",
        e.target,
        "oqUut2kr5C112hylO"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message sent successfully!", { autoClose: 3000 });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);

          toast.error("Message sending failed! Please try again.", {
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 py-16 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-bounce">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-slate-800 p-8 rounded-xl shadow-lg space-y-6 border border-slate-700"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-pink-600 hover:bg-pink-500 rounded-lg transition text-white font-semibold"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
