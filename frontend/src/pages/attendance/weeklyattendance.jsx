import React from "react";

const WeeklyAttendance = () => {
  const weekData = [
    { day: "Monday", status: "Present" },
    { day: "Tuesday", status: "Present" },
    { day: "Wednesday", status: "Absent" }
  ];

  return (
    <div className="page-container">
      <h2>Weekly Attendance</h2>

      <ul>
        {weekData.map((item, index) => (
          <li key={index}>
            {item.day} - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyAttendance;
