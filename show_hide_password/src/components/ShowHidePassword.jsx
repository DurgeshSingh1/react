import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const ShowHidePassword = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      ></input>
      {/* <button onClick={() => setShow(!show)}>
        {show ? "Hide Password" : "Show Password"}
      </button> */}
      <button onClick={() => setShow(!show)}>
        {show ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
    </>
  );
};

export default ShowHidePassword;
