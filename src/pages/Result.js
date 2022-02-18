import React from "react";
import { useLocation } from "react-router-dom";

const Result = (props) => {
  const location = useLocation();
  console.log(location.state);
  return <div>Result</div>;
};

export default Result;
