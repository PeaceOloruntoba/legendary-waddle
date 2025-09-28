import React, { useState, useEffect } from "react";

const LoadingOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
  <div className="w-12 h-12 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;

<style></style>;
