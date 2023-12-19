import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../backButton/BackButton";
import OtpModal from "../OtpModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const history = useNavigate();
  //   for toggle
  const [isSignUpActive, setSignUpActive] = useState(false);
  const handleSignUp = () => {
    setSignUpActive(true);
  };
  const handleSignIn = () => {
    setSignUpActive(false);
  };
  //   signup
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setSignupConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [userdata, setUserValue] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setSignupPassword(newPassword);
    setPasswordMatch(newPassword === confirmPassword);
  };
  const handleConfirmPasswordChange = (e) => {
    const confNewpass = e.target.value;
    setSignupConfirmPassword(confNewpass);
    setPasswordMatch(confNewpass == signupPassword);
  };
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordMatch) {
        // Passwords match, submission logic
        console.log("Password submitted:", signupPassword);
        const response = await axios.post(
          "https://flavor-factory-m190.onrender.com/api/v1/user/signup",
          { name: signupName, email: signupEmail, password: signupPassword }
        );
        // console.log(response);
        const user = response.data.user;
        setUserValue(user);
        // console.log(user);
        // Handle successful authentication
        if (response.data.errors && response.data.errors.length > 0) {
          // Set the first error message to the state
          setErrorMessage(response.data.errors[0].msg);
          toast.error(response.data.errors[0].msg);
        } else {
          const mailRes = await axios.post(
            "https://flavor-factory-m190.onrender.com/api/v1/user/send-email",
            { toEmail: signupEmail, otp: user.otp }
          );
          // setSuccessMessage("Congratualation!! Your registration is complete!");
          setIsSuccessModalOpen(true);
          toast.success("Login Successful!");
        }
        console.log(response.data);
      } else {
        // Passwords don't match, handle error
        console.error("Passwords do not match");
      }
    } catch (error) {
      // Handle authentication error
      console.error("Authentication error:", error.response.data);
    }
  };
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(signupEmail);
      console.log(signupPassword.length);
      // const requestData = {
      //   // data to be sent in the request body
      //   email: signupEmail,
      //   password: signupPassword,
      // };
      const response = await axios.post(
        "https://flavor-factory-m190.onrender.com/api/v1/user/login",
        {
          // params: requestData,
          // Note: Even though it's a GET request, you can use the 'data' property to send data in the request body
          email: signupEmail,
          password: signupPassword,
        }
      );

      // Handle successful authentication
      if (response.data.errors && response.data.errors.length > 0) {
        // Set the first error message to the state
        setErrorMessage(response.data.errors[0].msg);
        toast.error(response.data.errors[0].msg);
      } else {
        // console.log(response.data.token);
        // navigate("/");
        if (response.data.token) {
          const token = response.data.token;
          localStorage.setItem("token", token);
          toast.success("Login successful!");
          // history("/dashboard", { state: { id: response.data.token } });
          navigate("/dashboard");
        }
        setSuccessMessage("Login Successful");
        // setIsSuccessModalOpen(true);
      }
      console.log(response.data);
    } catch (error) {
      // Handle authentication error
      console.error("Authentication error:", error.response.data);
      toast.error("Authentication error. Please try again.");
    }
  };

  return (
    <div
      className={`container-signin ${isSignUpActive ? "active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up ">
        <BackButton />
        <form onSubmit={handleSignupSubmit}>
          <h1>Create Account</h1>
          <span style={{ color: "red" }}>{errorMessage}</span>
          <input
            type="text"
            placeholder="Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            required
          />
          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <BackButton />
        <form onSubmit={handleSignInSubmit}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={handlePasswordChange}
          />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="blur-layer"></div>
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" id="register" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* <div className="modal">
        <div className="modal-content">
          <button onClick={handleCloseSuccessModal}>X</button>
          <p>{successMessage}</p>
          <form id="otpForm">
            {otpValues.map((value, index) => (
              <input
                key={index}
                className="otpInput"
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(input) => (otpInputs.current[index] = input)}
              />
            ))}
          </form>          
        </div>
      </div> */}
      {/* Success Modal */}
      {isSuccessModalOpen && (
        <OtpModal onClose={closeSuccessModal} userdata={userdata} />
      )}
    </div>
  );
};

export default SignIn;
