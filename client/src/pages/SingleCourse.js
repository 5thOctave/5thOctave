import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_COURSE, QUERY_ME } from "../utils/queries";
import { Navigate, useParams } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { UPDATE_COURSE } from "../utils/mutations";

const SingleCourse = () => {
  const { courseId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_COURSE, { variables: { courseId: courseId } });

  // const profiles = data?.profiles || [];
  const course = data?.course || {};

  // const [updateCourse, { error, data }] = useMutation(UPDATE_COURSE);



  if (loading) {
    return <div className="stylish">Loading...</div>;
  }

  // TODO: THIS PAGE WILL HAVE DETAILS ON EACH COUSRSE
  //AND ALSO A LINK TO THE PAYMENT PAGE
  //OR A WAY TO MAKE THE STRIPE PAYMENT BOX APPEAR

  return (
    <main>
      <div className="flex-row justify-center stylish">
        {course.name}
        {course.instrument}
        {course.description}
        {course.length}
        {course.level}
        {course.schedule}
        {course.teacherId.name}
        {course.teacherId.email}
        {course.students.map((student) => {
          return (
            <div>
              {student.name}
              {student.email}
            </div>
          );
        })}
        <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5]" type="submit">
          Enroll!
        </button>

        {/* <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // <ProfileList
            //   profiles={profiles}
            //   title="Here's the current roster of friends..."
            // />
            <CourseList />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default SingleCourse;
