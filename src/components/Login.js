import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold  text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-800"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-600  w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? SignUp Now" : "Already a user? Login Now"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
