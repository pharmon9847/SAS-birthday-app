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
        <EmployeeRecord
          name={props.employees[0].name}
          street={props.employees[0].street}
          city={props.employees[0].city}
          state={props.employees[0].state}
          zip={props.employees[0].zip}
          DOB_month={props.employees[0].DOB_month}
          DOB_day={props.employees[0].DOB_day}
          DOB_year={props.employees[0].DOB_year}
          position={props.employees[0].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[1].name}
          street={props.employees[1].street}
          city={props.employees[1].city}
          state={props.employees[1].state}
          zip={props.employees[1].zip}
          DOB_month={props.employees[1].DOB_month}
          DOB_day={props.employees[1].DOB_day}
          DOB_year={props.employees[1].DOB_year}
          position={props.employees[1].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[2].name}
          street={props.employees[2].street}
          city={props.employees[2].city}
          state={props.employees[2].state}
          zip={props.employees[2].zip}
          DOB_month={props.employees[2].DOB_month}
          DOB_day={props.employees[2].DOB_day}
          DOB_year={props.employees[2].DOB_year}
          position={props.employees[2].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[3].name}
          street={props.employees[3].street}
          city={props.employees[3].city}
          state={props.employees[3].state}
          zip={props.employees[3].zip}
          DOB_month={props.employees[3].DOB_month}
          DOB_day={props.employees[3].DOB_day}
          DOB_year={props.employees[3].DOB_year}
          position={props.employees[3].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[4].name}
          street={props.employees[4].street}
          city={props.employees[4].city}
          state={props.employees[4].state}
          zip={props.employees[4].zip}
          DOB_month={props.employees[4].DOB_month}
          DOB_day={props.employees[4].DOB_day}
          DOB_year={props.employees[4].DOB_year}
          position={props.employees[4].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[5].name}
          street={props.employees[5].street}
          city={props.employees[5].city}
          state={props.employees[5].state}
          zip={props.employees[5].zip}
          DOB_month={props.employees[5].DOB_month}
          DOB_day={props.employees[5].DOB_day}
          DOB_year={props.employees[5].DOB_year}
          position={props.employees[5].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[6].name}
          street={props.employees[6].street}
          city={props.employees[6].city}
          state={props.employees[6].state}
          zip={props.employees[6].zip}
          DOB_month={props.employees[6].DOB_month}
          DOB_day={props.employees[6].DOB_day}
          DOB_year={props.employees[6].DOB_year}
          position={props.employees[6].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[7].name}
          street={props.employees[7].street}
          city={props.employees[7].city}
          state={props.employees[7].state}
          zip={props.employees[7].zip}
          DOB_month={props.employees[7].DOB_month}
          DOB_day={props.employees[7].DOB_day}
          DOB_year={props.employees[7].DOB_year}
          position={props.employees[7].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[8].name}
          street={props.employees[8].street}
          city={props.employees[8].city}
          state={props.employees[8].state}
          zip={props.employees[8].zip}
          DOB_month={props.employees[8].DOB_month}
          DOB_day={props.employees[8].DOB_day}
          DOB_year={props.employees[8].DOB_year}
          position={props.employees[8].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[9].name}
          street={props.employees[9].street}
          city={props.employees[9].city}
          state={props.employees[9].state}
          zip={props.employees[9].zip}
          DOB_month={props.employees[9].DOB_month}
          DOB_day={props.employees[9].DOB_day}
          DOB_year={props.employees[9].DOB_year}
          position={props.employees[9].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[10].name}
          street={props.employees[10].street}
          city={props.employees[10].city}
          state={props.employees[10].state}
          zip={props.employees[10].zip}
          DOB_month={props.employees[10].DOB_month}
          DOB_day={props.employees[10].DOB_day}
          DOB_year={props.employees[10].DOB_year}
          position={props.employees[10].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[11].name}
          street={props.employees[11].street}
          city={props.employees[11].city}
          state={props.employees[11].state}
          zip={props.employees[11].zip}
          DOB_month={props.employees[11].DOB_month}
          DOB_day={props.employees[11].DOB_day}
          DOB_year={props.employees[11].DOB_year}
          position={props.employees[11].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[12].name}
          street={props.employees[12].street}
          city={props.employees[12].city}
          state={props.employees[12].state}
          zip={props.employees[12].zip}
          DOB_month={props.employees[12].DOB_month}
          DOB_day={props.employees[12].DOB_day}
          DOB_year={props.employees[12].DOB_year}
          position={props.employees[12].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[13].name}
          street={props.employees[13].street}
          city={props.employees[13].city}
          state={props.employees[13].state}
          zip={props.employees[13].zip}
          DOB_month={props.employees[13].DOB_month}
          DOB_day={props.employees[13].DOB_day}
          DOB_year={props.employees[13].DOB_year}
          position={props.employees[13].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[14].name}
          street={props.employees[14].street}
          city={props.employees[14].city}
          state={props.employees[14].state}
          zip={props.employees[14].zip}
          DOB_month={props.employees[14].DOB_month}
          DOB_day={props.employees[14].DOB_day}
          DOB_year={props.employees[14].DOB_year}
          position={props.employees[14].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[15].name}
          street={props.employees[15].street}
          city={props.employees[15].city}
          state={props.employees[15].state}
          zip={props.employees[15].zip}
          DOB_month={props.employees[15].DOB_month}
          DOB_day={props.employees[15].DOB_day}
          DOB_year={props.employees[15].DOB_year}
          position={props.employees[15].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[16].name}
          street={props.employees[16].street}
          city={props.employees[16].city}
          state={props.employees[16].state}
          zip={props.employees[16].zip}
          DOB_month={props.employees[16].DOB_month}
          DOB_day={props.employees[16].DOB_day}
          DOB_year={props.employees[16].DOB_year}
          position={props.employees[16].position}
        ></EmployeeRecord>
        <EmployeeRecord
          name={props.employees[17].name}
          street={props.employees[17].street}
          city={props.employees[17].city}
          state={props.employees[17].state}
          zip={props.employees[17].zip}
          DOB_month={props.employees[17].DOB_month}
          DOB_day={props.employees[17].DOB_day}
          DOB_year={props.employees[17].DOB_year}
          position={props.employees[17].position}
        ></EmployeeRecord>
      </div>
    </div>
  );
};

export default DunderMifflinEmployees;
