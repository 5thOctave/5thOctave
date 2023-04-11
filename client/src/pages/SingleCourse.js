import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_COURSE } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UPDATE_COURSE } from "../utils/mutations";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useState, useEffect } from "react";

const stripePromise = loadStripe("pk_test_51MsyqEFO9onsprqUFdB9X6nuhuHPGLTXofsYCcQny1W53dZhGb042Gs7scAN9IiiqbaZQybzjtueVFoFsPp5Usr700gSXMSHrL");

const SingleCourse = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
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
    } catch (err) {
      console.error(err);
    }
  };

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
        {course.students.map((student, index) => {
          return <div key={index}>{student.name}</div>;
        })}
        <button className="p-1 border-4 border-[#669BBC] rounded-lg bg-[#C1121F] text-[#FDF0D5]" type="submit" onClick={handleCourseUpdate}>
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
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </main>
  );
};

export default SingleCourse;
