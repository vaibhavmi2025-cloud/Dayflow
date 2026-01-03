import React, { useState } from "react";

const CheckInOut = () => {
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheck = () => {
    setCheckedIn(!checkedIn);
  };

  return (
    <div className="page-container">
      <h2>Check In / Check Out</h2>

      <button onClick={handleCheck}>
        {checkedIn ? "Check Out" : "Check In"}
      </button>
    </div>
  );
};

export default CheckInOut;
