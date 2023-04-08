import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="stylish text-3xl font-bold">What is 5th Octave?</h1>
      <div className="text-center stylish text-xl w-1/2">We are musicians who are passionate about using the power of technology to connect the best music teachers with students anywhere in the world</div>
      <h2 className="stylish text-2xl font-bold">How it works</h2>
      <div className="stylish text-xl">search classes, group/individual classes, video call, blah blah blah</div>
    </div>
  );
};

export default About;
