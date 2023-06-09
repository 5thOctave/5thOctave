import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="stylish text-4xl md:font-bold sm:font-semibold text-[#669BBC] drop-shadow-xl">What is 5th Octave?</h1>
      <div className="text-center stylish text-xl w-1/2 md:font-semibold">We are musicians who are passionate about using the power of technology to connect the best music teachers with students anywhere in the world</div>
      <h2 className="stylish text-3xl md:font-bold sm:font-semibold text-[#669BBC] drop-shadow-xl">How it works</h2>
      <div className="stylish text-xl text-center md:font-semibold">
        Search by instrument. Enroll in a group class.<br></br> Learn online in the privacy of your home.<br></br> Experience the joy of learning a new instrument!
      </div>
    </div>
  );
};

export default About;
