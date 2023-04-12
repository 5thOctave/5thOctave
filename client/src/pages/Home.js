import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_COURSES } from "../utils/queries";
import CourseList from "../components/CourseList";
import About from "../components/About";

const Home = () => {
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

export default Home;
