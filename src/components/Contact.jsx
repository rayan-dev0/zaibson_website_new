import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ANIMATIONS } from "../lib/constants";
import countryCodes from "country-codes-list";

const Contact = () => {
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(""); // New state for name validation
  const [selectedCountry, setSelectedCountry] = useState("US"); // Default country

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const allCountries = countryCodes.customList(
    "countryCode",
    "[{countryCode}] {countryNameEn}: +{countryCallingCode}"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email)) {
        setResult("Not a valid email address.");
      } else {
        setResult("");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1f536a06-9dce-4746-9507-7e3cb40c23fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div {...ANIMATIONS.up}>
        <div className="bg-white shadow-md rounded-lg p-10 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-10">Contact Us</h2>
          <form onSubmit={onSubmit} className="flex flex-col space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-1xl font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(e.target.value.trim() ? "" : "Name is required");
                }}
                required
                placeholder="Jane Smith"
                className={`mt-1 block w-full px-4 py-2 border ${
                  nameError ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {nameError && (
                <p className="text-red-500 text-xs mt-1">{nameError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                placeholder="123-456-7890"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your message"
                className="mt-1 block w-full px-20 py-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
              {result && <p className="text-red-500 text-xs mt-1">{result}</p>}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
