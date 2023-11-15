import React from "react";
import { useParams } from "react-router-dom";

function User() {
  console.log(useParams());
  return <div>Hello user id : </div>;
}

export default User;
