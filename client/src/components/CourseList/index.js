import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/CourseList.css";


const CourseList = ({ courses }) => {
  return (
    <div className="m-auto my-4 flex flex-wrap justify-center gap-6">
      {courses &&
        courses?.map((course) => (
          <div key={course._id} className="">
            <Link className="" to={`/courses/${course._id}`}>
              <div className="bg">
                <img src={course.image} alt="image of musical instrument"></img>
                <div className="overlay">
                  <h2 className="stylish text-5xl md:font-bold sm:font-semibold text-[#FDF0D5]">{course.instrument}</h2>
                  <p className="stylish text-3xl text-[#FDF0D5]">{course.level}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CourseList;
