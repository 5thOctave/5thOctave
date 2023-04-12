import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_INSTRUMENTS } from "../../utils/queries";
import CourseList from "../../components/CourseList";

import Auth from "../../utils/auth";

const Header = () => {
  const { loading, data } = useQuery(QUERY_INSTRUMENTS, { variables: { instrument: instrument } });
  const course = data?.courses || [];
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const instrumentFilter = (event) => {
    const { instrument } = event.target;
    console.log(instrument);
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
        <select className="my-2 p-2 rounded-lg border-2 border-[#669BBC]" name="level" onChange={instrumentFilter}>
          <option value="">Filter By Instrument</option>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Trumpet">Trumpet</option>
        </select>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8">
                <Link to="/me">My Profile</Link>
              </button>
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish" onClick={logout}>
                Sign Out
              </button>
            </>
          ) : (
            <div className="">
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish mr-8">
                <Link to="/login">Sign In</Link>
              </button>
              <button className="border-4 border-[#FDF0D5] rounded-lg bg-[#C1121F] p-2 text-[#FDF0D5] stylish">
                <Link to="/signup">Join 5th Octave</Link>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-md-10 my-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CourseList courses={course} />
        )}
      </div>
    </div>
  );
};

export default Header;
