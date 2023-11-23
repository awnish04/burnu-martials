import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../components/LoginValidation";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the Validation function to validate the form data
    const validationErrors = Validation({ email, password });
    // Check if there are any validation errors
    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
    } else {
      // Clear the password error
      setErrors({ ...errors, email: "", password: "" });
      axios
        .post("http://localhost:3001/login", {
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          if (result.data === "Login Successful") {
            navigate("/about");
            alert("Login Successful"); // Update the message to "Login Successful"
          }
        })
        // .then((result) => {
        //   console.log(result);
        //   alert("Login Successful");
        //   navigate("/");
        // })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row  h-full py-36 items-center justify-center text-center ">
          <div className="lg:w-3/4 w-full flex mx-auto text-white items-center justify-center text-center lg:px-20 px-0 z-0 bg-gray-900">
            <div className="w-full py-6 z-20">
              <h1 className="my-6 text-4xl lg:text-5xl font-bold text-gray-200">
                LogIn
              </h1>

              <form
                action=""
                onSubmit={handleSubmit}
                className="sm:w-2/4 w-full px-4 lg:px-0 mx-auto"
              >
                <div className="py-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 text-lg rounded-sm bg-gray-800 text-md block px-3 py-4 border-2 border-gray-400 placeholder-gray-600 shadow-md focus:placeholder-gray-500  focus:border-gray-600 focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-red-600"> {errors.email} </span>
                  )}
                </div>

                <div className="py-2 relative">
                  <input
                    type={password ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 text-lg rounded-sm bg-gray-800 text-md block px-3 py-4 border-2 border-gray-400 placeholder-gray-600 shadow-md focus:placeholder-gray-500  focus:border-gray-600 focus:outline-none"
                  />
                  {errors.password && (
                    <span className="text-red-600"> {errors.password} </span>
                  )}
                </div>
                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  <Link to="#">Forgot your password?</Link>
                </div>

                <div className="py-2">
                  <button
                    type="submit"
                    className="uppercase block w-full p-4 text-lg rounded-sm bg-gray-600 hover:bg-gray-700 focus:outline-none"
                  >
                    LogIn
                  </button>
                </div>
              </form>
              <div className="sm:w-2/3 w-full p-4 lg:px-0 mx-auto">
                <Link
                  to="/register"
                  className="uppercase block w-full p-4 text-lg rounded-sm bg-gray-500 hover:bg-gray-700 focus:outline-none"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
