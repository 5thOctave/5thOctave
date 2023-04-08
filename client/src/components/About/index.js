import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="stylish text-3xl">What is 5th Octave?</h1>
      <div className="text-center stylish text-xl w-1/2">We are musicians who are passionate about connecting the best music teachers with students so they can share their talents with anyone, anywhere using video chat</div>
    </div>
  );
};

export default About;
