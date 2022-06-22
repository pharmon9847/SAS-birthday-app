// import React and { useState } in order to manange component states
import React, { useState } from "react";
//import Employee for to access the component
import EmployeeForm from "./EmployeeForm";
import "./NewEmployee.css";

// the functions that handle the add employee button as well as the cancel button
const NewEmployee = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // create function for the saveEmployeeDataHandler that the EmployeeForm can point to
  const saveEmployeeDataHandler = (enteredEmployeeData) => {
    const employeeData = {
      ...enteredEmployeeData,
      // create a unique id for all new employees
      id: Math.random().toString(),
    };
    props.onAddEmployee(employeeData);
    setIsEditing(false);
  };
  // the startEditingHandler function that the Add Employee button can point to
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // the stopEditingHandler function that the EmployeeForm can point to
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-employee">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Employee</button>
      )}
      {isEditing && (
        <EmployeeForm
          onSaveEmployeeData={saveEmployeeDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewEmployee;
