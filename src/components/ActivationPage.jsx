// ActivationPage.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ActivationPage = () => {
  //   const { activationToken } = useParams();
  const [activationStatus, setActivationStatus] = useState("Activating...");

  useEffect(() => {
    const activateAccount = async () => {
      try {
        // Make a request to activate the account
        const activationResponse = await axios.get(
          `https://flavor-factory-m190.onrender.com/api/v1/user/activate`
        );

        // Set the activation status based on the response
        setActivationStatus(activationResponse.data.message);
      } catch (error) {
        console.error("Error activating account:", error);
        setActivationStatus("Error activating account. Please try again.");
      }
    };

    activateAccount();
  }, []);

  return (
    <div>
      <h1>{activationStatus}</h1>
      {/* You can add additional UI elements or styles as needed */}
    </div>
  );
};

export default ActivationPage;
