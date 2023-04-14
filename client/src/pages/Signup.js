import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const navigate = useNavigate();
  // const [selectedValue, setSelectedValue] = useState({
  //   profileType: "",
  // });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    profileType: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleSelect = (e) => {
  //   console.log(e);
  //   setSelectedValue(e);
  //   console.log(selectedValue);
  // };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="p-8 stylish">
      <div className="flex justify-center">
        <div className="">
          <h4 className="text-3xl font-bold text-center mb-2">Create your 5th Octave Profile!</h4>
          <div className="flex justify-center">
            {data ? (
              <p>
                Success! You may now head <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col w-40 font-bold text-xl">
                <input className="p-1 rounded-lg border-2 border-[#669BBC]" placeholder="Name" name="name" type="text" value={formState.name} onChange={handleChange} />
                <input className="my-2 p-1 rounded-lg border-2 border-[#669BBC]" placeholder="Email" name="email" type="email" value={formState.email} onChange={handleChange} />
                <input className="p-1 rounded-lg border-2 border-[#669BBC]" placeholder="Password" name="password" type="password" value={formState.password} onChange={handleChange} />
                {/* <input className="form-input" name="profile type" type='' value={formState.profileType} onChange={handleChange} /> */}
                <select className="my-2 p-2 rounded-lg border-2 border-[#669BBC] font-bold text-xl" name="profileType" onChange={handleChange}>
                  <option value="">Profile Type</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
                <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5]" style={{ cursor: "pointer" }} type="submit">
                  Submit
                </button>
              </form>
            )}

            {error && <div className="my-3 p-3">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
