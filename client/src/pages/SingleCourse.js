import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_COURSE } from "../utils/queries";
import { useParams, useNavigate } from "react-router-dom";
import { UPDATE_COURSE } from "../utils/mutations";
import Auth from "../utils/auth";

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
      if (Auth.loggedIn()) {
        const data = await updateCourse({
          variables: { courseId: courseId },
        });
        console.log(data);
        navigate("/checkout");
      } else navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const countStudents = course.students.length;

  return (
    <main className="stylish flex justify-center">
      <div className="flex flex-col m-12 items-center border-[#669BBC] border-4 p-12 bg-[#F5F5F5] rounded-lg w-3/4">
        <img className="rounded-xl drop-shadow-xl" src={course.image} alt="image of musical instrument"></img>
        <div className="mb-4">
          {/* <h3 className="mt-4 text-4xl font-semibold">
            <span className="font-bold text-[#669BBC]">Instrument:</span> {course.instrument}
          </h3> */}
          <h3 className="mt-4 text-4xl font-bold text-[#669BBC] text-center">{course.instrument}</h3>
          <h4 className="text-3xl font-semibold">
            <span className="font-bold text-[#669BBC] ">Level:</span> {course.level}
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <div className="">
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">About:</span> {course.description}
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Class Length:</span> {course.length} minutes
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Schedule:</span> {course.schedule}
            </p>
          </div>
          <div className="md:mx-2">
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Teacher:</span> {course.teacherId.name}
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Contact:</span> <a href={"mailto:" + course.teacherId.email}>{course.teacherId.email}</a>
            </p>
          </div>
          <div className="">
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Lessons:</span> 8
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Price:</span> $500
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold text-[#669BBC]">Students Enrolled: </span>
              {countStudents}
            </p>
          </div>
        </div>
        <div className="mx-12">
          <button className="p-2 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5] font-bold text-xl drop-shadow-xl" type="submit" onClick={handleCourseUpdate}>
            Enroll!
          </button>
        </div>
      </div>
    </main>
  );
};

export default SingleCourse;
