import React from "react";

const ViewProfile = () => {
  const user = {
    name: "Employee Name",
    email: "employee@dayflow.com",
    phone: "9999999999",
    address: "Ahmedabad, India"
  };

  return (
    <div className="page-container">
      <h2>My Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default ViewProfile;
