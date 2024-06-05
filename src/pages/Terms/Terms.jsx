import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className=" mx-auto w-50 mt-4 ">
      <h1>Hello Mostofa khan Website</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        commodi ipsam tempore enim, officiis porro. Quod adipisci iure veritatis
        consectetur, nisi nemo, maxime odio ex ratione minus deserunt quasi
        explicabo.
      </p>
      <h4>Go Back <Link to={'/register'}>Register</Link></h4>
    </div>
  );
};

export default Terms;
