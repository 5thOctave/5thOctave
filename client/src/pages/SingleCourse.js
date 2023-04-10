import React from "react";
import { useQuery } from "@apollo/client";

// import ProfileList from "../components/ProfileList";

// import { QUERY_PROFILES } from "../utils/queries";
// import CourseList from "../components/CourseList";
// import About from "../components/About";

const SingleCourse = () => {
  //   const { loading, data } = useQuery(QUERY_PROFILES);
  //   const profiles = data?.profiles || [];

  // TODO: THIS PAGE WILL HAVE DETAILS ON EACH COUSRSE
  //AND ALSO A LINK TO THE PAYMENT PAGE
  //OR A WAY TO MAKE THE STRIPE PAYMENT BOX APPEAR

  return (
    <main>
      <div className="flex-row justify-center">
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
