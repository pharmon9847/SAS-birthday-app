import React from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  return (
    <form>
      <div className="new-employee__controls">
        <div className="new-employee__control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>Street</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>City</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>State</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>Zip</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>Month</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>Day</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>Year</label>
          <input type="text" />
        </div>
        <div className="new-employee__control">
          <label>Position</label>
          <input type="text" />
        </div>
      </div>
      <div className="new-employee__actions">
        <button type="submit">Add Employee</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
