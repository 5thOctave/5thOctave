import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ profiles, name }) => {
//   if (!profiles.length) {
//     return <h3>No Profiles Yet</h3>;
//   }

  return (
    <div className="bg-[#FDF0D5]">
    <h2 className="stylish text-3xl font-bold ml-8">courses will display here</h2>
      <h3 className="">{name}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="">
              <div className="">
                <h4 className="">
                  {profile.name} <br />
                  <span className="" style={{ fontSize: "1rem" }}>
                    currently has {profile.skills ? profile.skills.length : 0} endorsed skill
                    {profile.skills && profile.skills.length === 1 ? "" : "s"}
                  </span>
                </h4>

                <Link className="" to={`/profiles/${profile._id}`}>
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseList;
