// import React and { useState } in order to manange component states
import React, { useState } from "react";
// import EmployeeRecord to access the component
import EmployeeRecord from "./EmployeeRecord";
// import EmployeeFilter to access the component
import EmployeeFilter from "./EmployeeFilter";
import "./DunderMifflinEmployees.css";

// use props to transfer data
const DunderMifflinEmployees = (props) => {
  // useState January so when page is refreshed it returns to January
  const [filteredMonth, setFilteredMonth] = useState("January");
  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
    // console.log("DunderMifflinEmployees.js");
    // console.log(selectedMonth);
  };

  // create the function that filters employees by month
  const filteredEmployees = props.employees.filter((employee) => {
    return employee.month === filteredMonth;
  });
  return (
    <div>
      <div className="dunder-mifflin-employees">
        <div>
          <EmployeeFilter
            selected={filteredMonth}
            onChangeFilter={filterChangeHandler}
          />
        </div>
        {filteredEmployees.map((employee) => (
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
