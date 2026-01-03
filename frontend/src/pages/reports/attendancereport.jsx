import React from "react";

const AttendanceReport = () => {
  const reports = [
    { name: "Employee A", present: 22, absent: 2 },
    { name: "Employee B", present: 20, absent: 4 }
  ];

  return (
    <div className="page-container">
      <h2>Attendance Report</h2>

      {reports.map((rep, index) => (
        <div key={index}>
          <p>{rep.name}</p>
          <p>Present: {rep.present}</p>
          <p>Absent: {rep.absent}</p>
        </div>
      ))}
    </div>
  );
};

export default AttendanceReport;
