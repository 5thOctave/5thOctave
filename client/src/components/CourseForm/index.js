import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_COURSE } from "../../utils/mutations";
import Auth from "../../utils/auth";

const CourseForm = ({ profileId }) => {
  const [formState, setFormState] = useState({
    // name: "",
    level: "",
    instrument: "",
    description: "",
    length: 0,
    schedule: "",
    image: "/images/default.jpg",
  });

  const [addCourse, { error }] = useMutation(ADD_COURSE);
  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "length") {
      value = parseInt(value);
    }
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addCourse({
        variables: { ...formState },
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 stylish mx-2">
      <div className="flex flex-col items-center">
        <div className="">
          <h4 className="text-4xl md:font-semibold text-center mb-2 text-[#669BBC]">Create a new course!</h4>

          {Auth.loggedIn() ? (
            <div className="flex flex-col mt-8 items-center">
              <form className="w-40 md:font-semibold text-xl flex flex-col items-center" onSubmit={handleFormSubmit}>
                <div className="flex flex-col md:flex-row mb-4">
                  <div className="md:mr-12">
                    {/* <input name="name" placeholder="Name" value={formState.name} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={handleChange} /> */}
                    <input name="instrument" placeholder="Instrument" value={formState.instrument} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={handleChange} />
                    <select className="my-2 p-2 rounded-lg border-2 border-[#669BBC]" name="level" onChange={handleChange}>
                      <option value="">Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <input name="description" placeholder="Description" value={formState.description} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={handleChange} />
                  </div>
                  <div>
                    <input name="schedule" placeholder="Schedule" value={formState.schedule} className="mb-4 p-1 rounded-lg border-2 border-[#669BBC]" onChange={handleChange} />
                    <label>Length (minutes)</label>
                    <input name="length" placeholder="Length" value={formState.length} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={handleChange} />
                  </div>
                </div>
                <div className="mx-12">
                  <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5] drop-shadow-xl" type="submit">
                    Create!
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <p>
              You need to be logged in to endorse skills. Please <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
