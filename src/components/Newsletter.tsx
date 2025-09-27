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
      className="py-24 gradient-primary text-white text-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Join Our Wellness Community
          </h2>
          <p className="text-lg opacity-90 mb-12 max-w-xl mx-auto">
            Get weekly tips, exclusive content, and join thousands of women
            supporting each other through their pre-menopause journey.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              className="flex-1 p-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 text-base"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                isSubmitting && buttonText === "Welcome! ✨"
                  ? "bg-green-500"
                  : "bg-white text-pink-600"
              } hover:shadow-xl hover:-translate-y-0.5`}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
