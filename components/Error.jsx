import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error.status);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
        fugit! {error.status}
      </p>
    </>
  );
}

export default Error;
