import React from "react";
import { useQuery } from "@apollo/client";

import ProfileList from "../components/ProfileList";

import { QUERY_PROFILES } from "../utils/queries";
import CourseList from "../components/CourseList";
import About from "../components/About";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // <ProfileList
            //   profiles={profiles}
            //   title="Here's the current roster of friends..."
            // />
            <CourseList />
          )}
        </div>
      </div>
      <About />
    </main>
  );
};

export default Home;
