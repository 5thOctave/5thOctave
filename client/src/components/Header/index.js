import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="flex justify-evenly align-middle mt-4">
      <Link className="" to="/">
        <h1 className="text-3xl">5th Octave</h1>
      </Link>
      <form>
        <input className="border-2 border-black rounded-lg" type="text" />
        <button className=" ml-2 border-2 border-black rounded-lg bg-sky-500 p-2">Submit</button>
      </form>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="border-2 border-black rounded-lg bg-sky-500 p-2" to="/me">
              View My Profile
            </Link>
            <button className="border-2 border-black rounded-lg bg-sky-500 p-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="border-2 border-black rounded-lg bg-sky-500 p-2">
              <Link to="/login">Login</Link>
            </button>
            <button className=" ml-2 border-2 border-black rounded-lg bg-sky-500 p-2">
              <Link className="" to="/signup">
                Signup
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
