import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_COURSE } from "../utils/queries";
import { useParams, useNavigate } from "react-router-dom";
import { UPDATE_COURSE } from "../utils/mutations";

const SingleCourse = () => {
  const navigate = useNavigate();

  const { courseId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_COURSE, { variables: { courseId: courseId } });

  // const profiles = data?.profiles || [];
  const course = data?.course || {};

  const [updateCourse, { error }] = useMutation(UPDATE_COURSE);

  if (loading) {
    return <div className="stylish">Loading...</div>;
  }

  const handleCourseUpdate = async (event) => {
    try {
      const data = await updateCourse({
        variables: { courseId: courseId },
      });
      console.log(data);
      navigate("/checkout");
    } catch (err) {
      console.error(err);
    }
  };

  // //function to count students enrolled in course
  // const countStudents = () => {
  //   let count = 0;
  //   for (let i = 0; i < course.students.length; i++) {
  //     count++;
  //   }
  //   return count;
  // };

  const countStudents = course.students.length;

  return (
    <main className="stylish">
      <div className="flex flex-col mt-8 items-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[#669BBC]">{course.name}</h2>
          <h3 className="text-2xl font-semibold">
            <span className="font-bold text-[#669BBC]">Instrument:</span> {course.instrument}
          </h3>
          <h4 className="text-2xl font-semibold">
            <span className="font-bold text-[#669BBC] ">Level:</span> {course.level}
          </h4>
        </div>
        <div className="flex flex-row justify-center mb-4">
          <div className="">
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">About:</span> {course.description}
            </p>
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Class Length:</span> {course.length} minutes
            </p>
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Schedule:</span> {course.schedule}
            </p>
          </div>
          <div className="mx-12">
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Teacher:</span> {course.teacherId.name}
            </p>
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Contact:</span> {course.teacherId.email}
            </p>
            {/* {course.students.map((student, index) => {
            return <div key={index}>{student.name}</div>;
          })} */}
          </div>
          <div className="">
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Lessons:</span> 8
            </p>
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Price:</span> $400
            </p>
            <p className="text-lg font-semibold">
              <span className="font-bold text-[#669BBC]">Students Enrolled: </span>
              {countStudents}
            </p>
          </div>
        </div>
        <div className="mx-12">
          <button className="p-2 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5] font-bold text-xl" type="submit" onClick={handleCourseUpdate}>
            Enroll!
          </button>
        </div>
      </div>
    </main>
  );
};

export default SingleCourse;
