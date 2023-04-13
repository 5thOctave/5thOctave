import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    // navigate(`/`);
  };

  const instrumentFilter = (event) => {
    const instrument = event.target.value;
    navigate(`/instrument/${instrument}`);
  };

  return (
    <div>
      <div className="bg-[#669BBC] flex flex-row flex-wrap justify-between p-8 items-center">
        <Link className="" to="/">
          <h1 className="text-6xl stylish logo">🎷5th Octave</h1>
        </Link>
        {/* <form className="flex flex-row gap-2 items-center">
          <input className="border-2 rounded-lg stylish font-bold bg-[#FDF0D5]" type="text" />
          <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish">Search</button>
        </form> */}
        <select className="my-2 p-2 rounded-lg border-4 border-[#C1121F] bg-[#FDF0D5] stylish font-bold text-lg" onChange={instrumentFilter}>
          <option selected disabled>
            Search By Instrument
          </option>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Trumpet">Trumpet</option>
        </select>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8 font-bold">
                <Link to="/me">My Profile</Link>
              </button>
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish font-bold" onClick={logout}>
                Sign Out
              </button>
            </>
          ) : (
            <div className="">
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8 font-bold">
                <Link to="/login">Sign In</Link>
              </button>
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish font-bold">
                <Link to="/signup">Join 5th Octave</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
