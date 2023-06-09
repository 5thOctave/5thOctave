import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="text-center mb-5">
        {location.pathname !== "/" && (
          <button className="stylish md:font-bold sm:font-semibold" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4 className="stylish md:font-bold sm:font-semibold">&copy; {new Date().getFullYear()} - 5th Octave</h4>
      </div>
    </footer>
  );
};

export default Footer;
