import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <div className="bg-[#FDF0D5]">
      <h2 className="stylish text-3xl font-bold ml-8">courses will display here</h2>
      {/* <h3 className="">{name}</h3> */}
      <div className="flex-row justify-between my-4">
        {courses &&
          courses.map((course) => (
            <div key={course._id} className="">
              <div className="">
                <h4 className="">
                  {course.name} <br />
                  <span className="" style={{ fontSize: "1rem" }}>
                    currently has {course.students ? course.students : 0} students enrolled
                    {course.students && course.students === 1 ? "" : "s"}
                  </span>
                </h4>

                <Link className="" to={`/courses/${course._id}`}>
                  Learn more & enroll!
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseList;
