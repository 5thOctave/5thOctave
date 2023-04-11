import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/CourseList.css";

const CourseList = ({ courses }) => {
  return (
    // <div className="bg-[#FDF0D5]">
    //   <h2 className="stylish text-3xl font-bold ml-8">courses will display here</h2>
    //   {/* <h3 className="">{name}</h3> */}
    //   <div className="flex-row justify-between my-4">
    //     {courses &&
    //       courses.map((course) => (
    //         <div key={course._id} className="">
    //           <div className="">
    //             <h4 className="">
    //               {course.name} <br />
    //               {/* <span className="" style={{ fontSize: "1rem" }}>
    //                 currently has {course.students ? course.students : 0} students enrolled
    //                 {course.students && course.students === 1 ? "" : "s"}
    //               </span> */}
    //             </h4>

    //             <Link className="" to={`/courses/${course._id}`}>
    //               Learn more & enroll!
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </div>

    <div className="container">
      <div className="flex-row justify-between my-4">
        {courses &&
          courses.map((course) => (
            <div key={course._id} className="">
              <Link className="" to={`/courses/${course._id}`}>
                <div className="bg">
                  <img src="https://unsplash.it/400/200" alt=""></img>
                  <div className="overlay">
                    <h2 className="stylish text-5xl font-bold text-[#FDF0D5]">{course.name}</h2>
                    <p className="stylish text-3xl text-[#FDF0D5]">{course.instrument}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseList;
