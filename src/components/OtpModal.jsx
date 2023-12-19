import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpModal = ({ onClose, userdata }) => {
  // otp
  const [otpValues, setOtpValues] = useState(Array(4).fill(""));
  const otpInputs = useRef([]);
  const [error, setError] = useState("");

  const focusNext = (currentIndex) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < otpValues.length) {
      otpInputs.current[nextIndex].focus();
    } else {
      console.log("OTP Entered:", otpValues.join(""));
      // You can submit the form or trigger another action here
    }
  };

  const focusPrevious = (currentIndex) => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      otpInputs.current[previousIndex].focus();
    }
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    setOtpValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });

    if (value.length > 0) {
      focusNext(index);
    } else {
      focusPrevious(index);
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && otpValues[index].length === 0) {
      focusPrevious(index);
    }
  };

  useEffect(() => {
    otpInputs.current[0].focus(); // Focus on the first input field initially
  }, []);
  const handleCloseSuccessModal = () => {
    onClose();
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    // Validate OTP (you can customize the validation logic)
    if (otpValues.some((value) => value === "")) {
      setError("Please enter all OTP digits.");
    } else {
      //   console.log("OTP Entered:", otpValues.join(""));
      const fullOtp = otpValues.join("");
      const activateRes = await axios.post(
        "https://flavor-factory-m190.onrender.com/api/v1/user/activate",
        { user: userdata, inputOtp: fullOtp }
      );
      console.log(activateRes);
      if (activateRes.data.errors && activateRes.data.errors.length > 0) {
        toast.error(activateRes.data.errors[0].msg);
      } else {
        toast.success(activateRes.data.msg);
        handleCloseSuccessModal();
      }
    }
  };
  return (
    <div>
      <div className="modal-signin">
        <div className="modal-content-signin">
          <button onClick={handleCloseSuccessModal} className="modalCloseBtn">
            X
          </button>
          {/* <p>{successMessage}</p> */}
          <div className="otpDiv">
            {/* <form id="otpForm">
                <input type="text" className="otpInput" maxLength="1" />
                <input type="text" className="otpInput" maxLength="1" />
                <input type="text" className="otpInput" maxLength="1" />
                <input type="text" className="otpInput" maxLength="1" />
              </form> */}
            <form id="otpForm" onSubmit={handleOtpSubmit}>
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
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          {/* <p>
              Please{" "}
              <a className="btn btn-info btn-sm" href="/signin">
                Sign in
              </a>{" "}
              now
            </p> */}
          {/* <button onClick={handleCloseSuccessModal}>Close</button> */}
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
