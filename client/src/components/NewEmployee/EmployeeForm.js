import React, { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const [enteredName, SetEnteredName] = useState("");
  const [enteredStreet, SetEnteredStreet] = useState("");
  const [enteredCity, SetEnteredCity] = useState("");
  const [enteredState, SetEnteredState] = useState("");
  const [enteredZip, SetEnteredZip] = useState("");
  const [enteredMonth, SetEnteredMonth] = useState("");
  const [enteredDay, SetEnteredDay] = useState("");
  const [enteredYear, SetEnteredYear] = useState("");
  const [enteredPosition, SetEnteredPosition] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredName: "",
  //     enteredStreet: "",
  //     enteredCity: "",
  //     enteredState: "",
  //     enteredZip: "",
  //     enteredMonth: "",
  //     enteredYear: "",
  //     enteredPosition: "",
  //   });

  const nameChangeHandler = (event) => {
    SetEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredName: event.target.value };
    // });
  };
  const streetChangeHandler = (event) => {
    SetEnteredStreet(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredStreet: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredStreet: event.target.value };
    // });
  };
  const cityChangeHandler = (event) => {
    SetEnteredCity(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredCity: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredCity: event.target.value };
    // });
  };
  const stateChangeHandler = (event) => {
    SetEnteredState(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredState: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredState: event.target.value };
    // });
  };
  const zipChangeHandler = (event) => {
    SetEnteredZip(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredZip: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredZip: event.target.value };
    // });
  };
  const monthChangeHandler = (event) => {
    SetEnteredMonth(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredMonth: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredMonth: event.target.value };
    // });
  };
  const dayChangeHandler = (event) => {
    SetEnteredDay(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDay: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDay: event.target.value };
    // });
  };
  const yearChangeHandler = (event) => {
    SetEnteredYear(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredYear: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredYear: event.target.value };
    // });
  };
  const positionChangeHandler = (event) => {
    SetEnteredPosition(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredPosition: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredPosition: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const employeeData = {
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      state: enteredState,
      zip: enteredZip,
      month: enteredMonth,
      day: enteredDay,
      year: enteredYear,
      position: enteredPosition,
    };
    console.log(employeeData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-employee__controls">
        <div className="new-employee__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>Street</label>
          <input type="text" onChange={streetChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>City</label>
          <input type="text" onChange={cityChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>State</label>
          <input type="text" onChange={stateChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>Zip</label>
          <input type="text" onChange={zipChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>Month</label>
          <input type="text" onChange={monthChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>Day</label>
          <input type="text" onChange={dayChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>Year</label>
          <input type="text" onChange={yearChangeHandler} />
        </div>
        <div className="new-employee__control">
          <label>Position</label>
          <input type="text" onChange={positionChangeHandler} />
        </div>
      </div>
      <div className="new-employee__actions">
        <button type="submit">Add Employee</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
