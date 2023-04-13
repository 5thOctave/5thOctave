import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="stylish text-4xl font-bold text-[#669BBC]">What is 5th Octave?</h1>
      <div className="text-center stylish text-xl w-1/2 font-semibold">We are musicians who are passionate about using the power of technology to connect the best music teachers with students anywhere in the world</div>
      <h2 className="stylish text-3xl font-bold text-[#669BBC]">How it works</h2>
      <div className="stylish text-xl text-center font-semibold">
        Search by instrument. Enroll in a group class.<br></br> Learn online in the privacy of your home.<br></br> Experience the joy of learning a new instrument!
      </div>
    </div>
  );
};

export default About;
