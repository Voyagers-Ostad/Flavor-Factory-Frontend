import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import UserDashboard from "../components/userDashboard/UserDashboard";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <UserDashboard />
      <Footer />
    </div>
  );
};

export default Dashboard;
