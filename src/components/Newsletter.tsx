import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Join Now");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setButtonText("Joining...");
      setIsSubmitting(true);
      setTimeout(() => {
        setButtonText("Welcome! ✨");
        setEmail("");
        setTimeout(() => {
          setButtonText("Join Now");
          setIsSubmitting(false);
        }, 3000);
      }, 2000);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-20 bg-bg text-text text-center"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-8">
        <div className="animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">
            Join Our Wellness Community
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
            Get weekly tips, exclusive content, and join thousands of women
            supporting each other through their pre-menopause journey.
          </p>
          <form
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              className="flex-1 p-4 rounded-full bg-white border border-primary text-text placeholder:text-text-secondary focus:outline-primary focus:bg-white focus:border-2 transition"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md ${
                isSubmitting && buttonText === "Welcome! ✨"
                  ? "bg-green-500 text-white"
                  : "bg-primary text-white hover:bg-[#b06c65]"
              }`}
              disabled={isSubmitting}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
