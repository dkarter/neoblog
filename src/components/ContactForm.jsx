import { SITE_NAME } from "@/consts";
import { useState } from "react";

// Self explanatory, change you access key below and start using immediately.

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message"); // Default button text
  const [buttonClasses, setButtonClasses] = useState("bg-neutral-900"); // Default button color

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending..."); // Submitting button text.
    setButtonClasses("bg-brand-600");

    const data = {
      access_key: "e1fdb2e8-30ea-4325-b5ca-d0238b423e26", // Your Web3Forms access key => https://web3forms.com/#start
      ...formData,
      subject: `${formData.name} sent you a message on ${SITE_NAME}`, // Customize subject
      botcheck: false,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      await response.json();
      if (response.status === 200) {
        setButtonText("Got it! Thank you."); // Success button text
        setButtonClasses("bg-green-600");
        setFormData({ name: "", email: "", message: "" }); // Reset the form only after succesful submit
      } else {
        setButtonText("Please try again."); // Configuration error button text
        setButtonClasses("bg-red-600");
      }
    } catch (error) {
      setButtonText("Please try again."); // Most likely network error button text
      setButtonClasses("bg-red-600");
    }

    setTimeout(() => {
      setButtonText("Send Message"); // Default button text
      setButtonClasses("bg-neutral-900"); // Default button color
      setIsSubmitting(false);
    }, 3000); // Reset after 3sec.
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="group relative mb-4">
          <label
            htmlFor="name"
            className="absolute top-3 right-3 text-sm text-neutral-600 opacity-0 transition-opacity duration-300 select-none group-focus-within:opacity-100"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="hover:border-brand-500/50 focus:border-brand-500 w-full rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 text-sm text-neutral-400 transition-colors duration-300 focus:ring-0 focus:outline-none focus:placeholder:opacity-0"
          />
        </div>

        <div className="group relative mb-4">
          <label
            htmlFor="email"
            className="absolute top-3 right-2 text-sm text-neutral-600 opacity-0 transition-opacity duration-300 select-none group-focus-within:opacity-100"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="hover:border-brand-500/50 focus:border-brand-500 w-full rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 text-sm text-neutral-400 transition-colors duration-300 focus:ring-0 focus:outline-none focus:placeholder:opacity-0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="hover:border-brand-500/50 focus:border-brand-500 w-full rounded-lg border border-neutral-800/60 bg-neutral-900/40 px-4 py-3 text-sm text-neutral-400 transition-colors duration-300 focus-within:placeholder:opacity-30 focus:ring-0 focus:outline-none"
          >
          </textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-lg whitespace-nowrap ${buttonClasses} ${
            isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
          } py-3 text-neutral-100 transition-all`}
        >
          <span className="animate-fade-in font-medium" // style={{ "--fade-in-duration": "0.1s" }}
          >
            {buttonText}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
