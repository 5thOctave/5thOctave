import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CourseList from "../components/CourseList";
import CourseForm from "../components/CourseForm";
import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(profileId ? QUERY_SINGLE_PROFILE : QUERY_ME, {
    variables: { profileId: profileId },
  });

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me;

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div className="stylish">Loading...</div>;
  }

  if (!profile?.name) {
    return <h4 className="stylish">You need to be logged in to see your profile page. Use the navigation links above to sign up or log in!</h4>;
  }

  return (
    <div className="stylish mx-2">
      <h2 className="text-center mt-8 text-4xl md:font-bold sm:font-semibold text-[#669BBC]">Welcome, {profile.name}!</h2>
      {profile.profileType === "teacher" ? (
        <div className="flex flex-col justify-center">
          <div className="">
            <h2 className="ml-8 text-3xl md:font-semibold text-[#669BBC]"> Classes you're instructing:</h2>
            <div className="col-12 col-md-10 my-3">{loading ? <div>Loading...</div> : <CourseList courses={profile.courses} />}</div>
          </div>
          <div className="">
            <CourseForm profileId={profile._id} />
          </div>
        </div>
      ) : (
        <div>
          <div className="ml-8 flex flex-col">
            <h2 className="text-3xl md:font-semibold text-[#669BBC]"> Classes You're enrolled in:</h2>
            <div className="col-12 col-md-10 my-3">{loading ? <div className="stylish">Loading...</div> : <CourseList courses={profile.courses} />}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
