import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_INSTRUMENTS } from "../../utils/queries";
import CourseList from "../../components/CourseList";

const Results = () => {
  const { loading, data } = useQuery(QUERY_INSTRUMENTS, { variables: { instrument: instrument } });
  const course = data?.courses || [];
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const instrumentFilter = (event) => {
    const { instrument } = event.target;
    console.log(instrument);
  };

const Results = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const course = data?.courses || [];

  return (
    <main>
      <div className="flex flex-col justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CourseList courses={course} />
          )}
        </div>
      </div>
      <About />
    </main>
  );
};

export default Results;