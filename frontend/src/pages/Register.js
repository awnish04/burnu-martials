import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_Img from "../img/register/login_img.jpg";
import Validation from "../components/RegisterValidation";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // };
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // State to manage validation errors
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the Validation function to validate the form data
    const validationErrors = Validation({ name, email, password });
    // Check if there are any validation errors
    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
    } else {
      // If there are no validation errors, proceed with the API call
      axios
        .post("http://localhost:3001/register", {
          name,
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          alert("Registration Successful");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto  relative">
        {/* text and image wrapper */}
        <div className="flex flex-col lg:flex-row h-full py-16 items-center justify-center text-center ">
          {/* text */}
          <div className="flex-1 flex flex-col lg:py-0 w-full z-10  justify-center  items-center lg:items-start lg:text-justify ">
            <section className="h-fit flex items-stretch text-white py-1">
              <div className="lg:flex w-1/2 hidden bg-gray-500">
                <img className="h-full object-cover" src={Login_Img} alt="" />
              </div>
              <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-gray-900">
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
                  <img className="h-full object-cover" src={Login_Img} alt="" />
                </div>
                <div className="w-full py-6 z-20">
                  <h1 className="my-6 text-4xl lg:text-5xl font-bold text-gray-200">
                    Register
                  </h1>

                  <form
                    onSubmit={handleSubmit}
                    className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                  >
                    <div className="py-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="User Name"
                        onChange={(e) => setName(e.target.value)}
                        className="register-input"
                      />
                      {errors.name && (
                        <span className="text-red-600"> {errors.name} </span>
                      )}
                    </div>
                    <div className="py-2">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
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
                        className="register-input"
                      />
                      {errors.password && (
                        <span className="text-red-600">{errors.password}</span>
                      )}
                    </div>

                    <div className="py-2">
                      <button
                        type="submit"
                        className="submit-btn"
                      >
                        Register
                      </button>
                    </div>
                    <div className="text-left text-gray-400">
                      <p>Already have an account?</p>
                    </div>
                  </form>
                  <div className="sm:w-2/3 w-full p-4 lg:px-0 mx-auto">
                    <Link
                      to="/login"
                      className="submit-btn"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
