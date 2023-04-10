import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COURSE } from "../../utils/mutations";

import Auth from "../../utils/auth";

const CourseForm = ({ profileId }) => {
  const [course, setCourse] = useState("");

  const [addCourse, { error }] = useMutation(ADD_COURSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addCourse({
        variables: { profileId },
      });

      setCourse("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 stylish">
      <div className="flex justify-center">
        <div className="">
          <h4 className="text-3xl font-bold text-center mb-2">Create a new course!</h4>

          {Auth.loggedIn() ? (
            <div className="flex">
              <form className="flex flex-col w-40" onSubmit={handleFormSubmit}>
                <input placeholder="Name" value={course} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={(event) => setCourse(event.target.value)} />
                <input placeholder="Instrument" value={course} className="my-2 p-1 rounded-lg border-2 border-[#669BBC]" onChange={(event) => setCourse(event.target.value)} />
                <input placeholder="Level" value={course} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={(event) => setCourse(event.target.value)} />
                <form className="" action="">
                  <p>Level</p>
                  <input type="radio" id="beginner" name="level" value="Beginner" /> <label for="beginner">Beginner</label>
                  <br />
                  <input type="radio" id="intermediate" name="level" value="Intermediate" /> <label for="intermediate">Intermediate</label>
                  <br />
                  <input type="radio" id="advanced" name="level" value="Advanced" /> <label for="advanced">Advanced</label>
                </form>
                <input placeholder="Description" value={course} className="my-2 p-1 rounded-lg border-2 border-[#669BBC]" onChange={(event) => setCourse(event.target.value)} />
                <input placeholder="Length" value={course} className="p-1 rounded-lg border-2 border-[#669BBC]" onChange={(event) => setCourse(event.target.value)} />
                <input placeholder="Schedule" value={course} className="my-2 p-1 rounded-lg border-2 border-[#669BBC]" onChange={(event) => setCourse(event.target.value)} />
                <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5]" type="submit">
                  Create!
                </button>
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
