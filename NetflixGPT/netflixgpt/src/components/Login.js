import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <Header />
        <img className="h-screen w-screen" src={BG_URL} />
      </div>
      <form className="absolute justify-middle align-middle w-1/3 bg-black my-36 mx-auto left-0 right-0 opacity-95 text-white rounded-lg">
        <h1 className="p-3 font-bold mx-2 my-2 mb-1 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          ""
        ) : (
          <input
            className="p-3 mx-5 my-2 mt-8 w-11/12 rounded"
            type="text"
            placeholder="Name of the User"
          />
        )}
        <input
          className="p-3 mx-5 my-2 w-11/12 rounded"
          type="email"
          placeholder="Email"
        />

        <input
          className="p-3 mx-5 my-2 w-11/12 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-3 mx-5 my-2 w-11/12 rounded bg-red-900">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-3 mx-5 my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
