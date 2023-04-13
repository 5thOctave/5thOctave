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

  // TODO: THIS PAGE WILL HAVE DETAILS ON EACH COUSRSE
  //AND ALSO A LINK TO THE PAYMENT PAGE
  //OR A WAY TO MAKE THE STRIPE PAYMENT BOX APPEAR

  return (
    <main className="stylish">
      <div className="flex flex-col mt-8 items-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">{course.name}</h2>
          <h3 className="text-2xl font-bold">Instrument: {course.instrument}</h3>
          <h4 className="text-2xl font-bold">Level: {course.level}</h4>
        </div>
        <div className="flex flex-row justify-center mb-4">
          <div className="mr-12">
            <p className="text-xl font-bold">About: {course.description}</p>
            <p className="text-lg font-bold">Class Length: {course.length} minutes</p>
            <p className="text-lg font-bold">Schedule: {course.schedule}</p>
          </div>
          <div className="">
            <p className="text-lg font-bold">Teacher: {course.teacherId.name}</p>
            <p className="text-lg font-bold">Contact: {course.teacherId.email}</p>
            {/* {course.students.map((student, index) => {
            return <div key={index}>{student.name}</div>;
          })} */}
          </div>
        </div>
        <div className="mx-12">
          <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5] font-bold" type="submit" onClick={handleCourseUpdate}>
            Enroll!
          </button>
        </div>
      </div>

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
    </main>
  );
};

export default SingleCourse;
