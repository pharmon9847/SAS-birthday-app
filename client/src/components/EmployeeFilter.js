import React from "react";

import "./EmployeeFilter.css";

const EmployeeFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="employee-filter">
      <div className="employee-filter__control">
        <label>Filter by month</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
    </div>
  );
};

export default EmployeeFilter;
