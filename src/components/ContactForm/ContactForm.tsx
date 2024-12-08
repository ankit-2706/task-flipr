import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert(response.data.message);
      setFormData({ fullName: "", email: "", mobile: "", city: "" });
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="bg-[#515F8C] p-6 rounded-lg shadow-md max-w-sm mx-auto h-max">
      <h2 className="text-white text-xl font-semibold mb-4 text-center">
        Get a Free Consultation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 bg-transparent rounded placeholder-white border focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-transparent rounded placeholder-white border focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 bg-transparent rounded placeholder-white border focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Area, City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-3 bg-transparent rounded placeholder-white border focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
