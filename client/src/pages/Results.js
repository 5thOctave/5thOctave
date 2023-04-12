import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_INSTRUMENTS } from "../utils/queries";
import CourseList from "../components/CourseList";

const Results = () => {
  const { instrument } = useParams();
  const { loading, data } = useQuery(QUERY_INSTRUMENTS, { variables: { instrument: instrument } });
  const instruments = data?.instruments || [];

  return (
    <main>
      <div className="flex flex-col justify-center">
        <div className="col-12 col-md-10 my-3">{loading ? <div>Loading...</div> : <CourseList courses={instruments} />}</div>
      </div>
    </main>
  );
};

export default Results;
