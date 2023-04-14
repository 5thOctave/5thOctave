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
      <div className="flex flex-col justify-center mb-4">
        {loading ? <div className="stylish text-2xl font-bold">Loading...</div> : <CourseList courses={course} />}
      </div>
      <About />
    </main>
  );
};

export default Home;
