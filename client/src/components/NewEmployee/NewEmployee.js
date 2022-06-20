import React from "react";
import EmployeeForm from "./EmployeeForm";
import "./NewEmployee.css";

const NewEmployee = (props) => {
  const saveEmployeeDataHandler = (enteredEmployeeData) => {
    const employeeData = {
      ...enteredEmployeeData,
      id: Math.random().toString(),
    };
    props.onAddEmployee(employeeData);
  };
  return (
    <div className="new-employee">
      <EmployeeForm onSaveEmployeeData={saveEmployeeDataHandler} />
    </div>
  );
};

export default NewEmployee;
