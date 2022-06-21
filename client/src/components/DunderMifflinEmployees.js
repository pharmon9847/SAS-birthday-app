import React, { useState } from "react";
import EmployeeRecord from "./EmployeeRecord";
import EmployeeFilter from "./EmployeeFilter";
import "./DunderMifflinEmployees.css";

const DunderMifflinEmployees = (props) => {
  const [filteredMonth, setFilteredMonth] = useState("January");
  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
    console.log("DunderMifflinEmployees.js");
    console.log(selectedMonth);
  };
  return (
    <div>
      <div className="dunder-mifflin-employees">
        <div>
          <EmployeeFilter
            selected={filteredMonth}
            onChangeFilter={filterChangeHandler}
          />
        </div>
        {props.employees.map((employee) => (
          <EmployeeRecord
            key={employee.id}
            name={employee.name}
            street={employee.street}
            city={employee.city}
            state={employee.state}
            zip={employee.zip}
            month={employee.month}
            day={employee.day}
            year={employee.year}
            position={employee.position}
          />
        ))}
      </div>
    </div>
  );
};

export default DunderMifflinEmployees;
