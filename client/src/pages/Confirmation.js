import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  return (
    <main className="flex justify-center mt-12">
      <div className="stylish text-5xl font-bold">Hooray! Payment successful.</div>
      <div className="stylish text-5xl font-bold">You are now registered for your course. Happy learning!</div>
      <button className="p-2 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5] font-bold text-xl" type="submit">
        Return Home
      </button>
    </main>
  );
};

export default Confirmation;
