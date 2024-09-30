"use client";
import { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [sent_status,setSentStatus]=useState<boolean>(false);
  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f143242e-6269-4e14-af6c-54b4da9faa59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mail sent successfully");
      setSentStatus(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setSentStatus(false)
    }
  };

  return (
    <div
      className="w-full h-[95vh] flex items-center justify-center px-4 sm:px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      style={{ animation: "gradient 5s ease infinite" }}
    >
      <div
        className="main-container flex flex-col md:flex-row h-auto md:h-[80%] w-full max-w-6xl rounded-2xl overflow-hidden bg-gray-900 shadow-lg"
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
          borderRadius: "20px",
        }}
      >
        <div className="text-container w-full md:w-1/2 p-6 md:py-12 bg-gradient-to-b from-indigo-500 to-cyan-700 text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold drop-shadow-lg animate-fadeIn text-center">
            PCCOE ACM Chapter
          </h1>
          <p className="text-sm md:text-base mt-4 text-center animate-slideUp">
            We&apos;d love to hear from you! Whether you have questions about
            our events, workshops, membership, or collaborations, feel free to
            reach out. Our team is here to assist you with any inquiries and
            provide all the information you need.
          </p>
          <div className="text-left text-xs md:text-sm mt-4">
            <p>Email: acm@pccoepune.org</p>
            <p>Location: Pimpri Chinchwad College of Engineering, Pune.</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273282914885!2d73.75906487502891!3d18.65172878246745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1724922511117!5m2!1sen!2sin"
            width="100%"
            height="200"
            className="rounded-lg mt-4 shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-container w-full md:w-1/2 bg-gray-900 p-6 md:p-12 flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
            Contact Us!
          </h1>
          <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full md:w-4/5 mb-4 rounded-lg p-3 border border-gray-600 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full md:w-4/5 mb-4 rounded-lg p-3 border border-gray-600 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-sm"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              className="w-full md:w-4/5 mb-4 rounded-lg p-3 border border-gray-600 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-sm h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-4/5 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-gradient-to-l hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              Submit
            </button>
          </form>
          <span className="mt-4 text-gray-400">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
