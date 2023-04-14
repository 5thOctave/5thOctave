import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <main className="flex flex-col items-center mt-12 p-8 stylish">
      <div className="text-5xl font-bold text-[#669BBC]">Hooray! Payment successful.</div>
      <div className="my-4 text-5xl font-bold text-[#669BBC]">You are now registered for your course.</div>
      <div className="text-5xl font-bold text-[#669BBC]">Happy learning!</div>
      <button className="my-4 p-2 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5] font-bold text-xl drop-shadow-xl">
        <Link to="/">Return Home</Link>
      </button>
    </main>
  );
};

export default Confirmation;
