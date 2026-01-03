import React from "react";

const DailyAttendance = () => {
  const records = [
    { date: "2026-01-01", status: "Present" },
    { date: "2026-01-02", status: "Present" }
  ];

  return (
    <div className="page-container">
      <h2>Daily Attendance</h2>

      <ul>
        {records.map((rec, index) => (
          <li key={index}>
            {rec.date} - {rec.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyAttendance;
