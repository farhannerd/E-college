import React from "react";
import Navbar from "../../Navbar"; // Ensure you have this component if it's used for navigation
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

  return (

    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button className="bg-blue-500 text-white py-4 px-8 rounded-lg hover:bg-blue-600 transition duration-300">
            Student Data
          </button>
          <button className="bg-blue-500 text-white py-4 px-8 rounded-lg hover:bg-blue-600 transition duration-300">
            Student Registration
          </button>
          <button className="bg-blue-500 text-white py-4 px-8 rounded-lg hover:bg-blue-600 transition duration-300" onClick={()=> navigate("/teachers-data")}>
            Teacher Data
          </button>
          <button className="bg-blue-500 text-white py-4 px-8 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => navigate("/teacher-register")}>
            Teacher Registration
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
