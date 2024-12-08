"use client";
import React, { useState } from "react";
import Link from "next/link";

const TITLE_STYLES =
  "text-3xl text-center py-4 font-bold !leading-[1.5] text-dark-green ";
const SECTION_STYLES =
  "my-20 max-w-[60rem] rounded-lg scroll-mt-[100rem] poppins border-2 border-white bg-white bg-opacity-30 px-20 py-10 pt-4";
// const LABEL_STYLES = "text-lg my-4 text-[#586A65]";
const INPUT_STYLE =
  "w-96 p-2 mx-0 my-2 rounded-lg bg-opacity-25 text-xs bg-white border-2 border-[#586A65] normal-case";
const BUTTON_STYLE =
  "mt-6 my-4 p-2 w-full text-sm rounded-lg bg-[#C3CFFA] text-white hover:bg-[#9697B4]";

interface SignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp = (props: SignUpProps) => {
  const { firstName, lastName, email, password } = props;
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen mb-20">
      <div className={SECTION_STYLES}>
        <h1 className={TITLE_STYLES}>Sign Up</h1>
        <form>
          <div>
            {/* <label className={LABEL_STYLES}>First Name</label> */}
            <input
              className={INPUT_STYLE}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            {/* <label className={LABEL_STYLES}>Last Name</label> */}
            <input
              className={INPUT_STYLE}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label className={LABEL_STYLES}>Email Address</label> */}
            <input
              className={INPUT_STYLE}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label className={LABEL_STYLES}>Password</label> */}
            <input
              className={INPUT_STYLE}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className={BUTTON_STYLE} type="submit">
            Sign Up
          </button>
          <div className="my-1 flex items-center justify-center text-white">
            <span className="border-b border-white w-1/5"></span>
            <span className="mx-2">or</span>
            <span className="border-b border-white w-1/5"></span>
          </div>
          <button className={BUTTON_STYLE}>Sign up with Google</button>
          <p className="text-xs text-center">
            Already have an account? <Link href="/">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
