import React, { useState } from "react";

const ApplyLeave = () => {
  const [leave, setLeave] = useState({
    type: "",
    from: "",
    to: "",
    reason: ""
  });

  const handleChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Leave Applied Successfully");
  };

  return (
    <div className="page-container">
      <h2>Apply Leave</h2>

      <form onSubmit={handleSubmit}>
        <select name="type" onChange={handleChange} required>
          <option value="">Select Leave Type</option>
          <option value="Paid">Paid</option>
          <option value="Sick">Sick</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        <input type="date" name="from" onChange={handleChange} required />
        <input type="date" name="to" onChange={handleChange} required />

        <textarea
          name="reason"
          placeholder="Reason"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplyLeave;
