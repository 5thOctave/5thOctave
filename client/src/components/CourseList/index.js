import React from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-[#FDF0D5] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Check out our courses below!</h2>
        </div>
        <div className="">
          {courses &&
            courses.map((course) => (
              <div key={course._id} className="">
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                  <li>
                    <Link className="" to={`/courses/${course._id}`}>
                      <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight">{course.name}</h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">{course.instrument}</p>
                        </div>
                      </div>
                      Learn more & enroll!
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
