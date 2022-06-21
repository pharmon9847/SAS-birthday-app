import React, { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredState, setEnteredState] = useState("");
  const [enteredZip, setEnteredZip] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");
  const [enteredDay, setEnteredDay] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredPosition, setEnteredPosition] = useState("");
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
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredName: event.target.value };
    // });
  };
  const streetChangeHandler = (event) => {
    setEnteredStreet(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredStreet: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredStreet: event.target.value };
    // });
  };
  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredCity: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredCity: event.target.value };
    // });
  };
  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredState: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredState: event.target.value };
    // });
  };
  const zipChangeHandler = (event) => {
    setEnteredZip(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredZip: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredZip: event.target.value };
    // });
  };
  const monthChangeHandler = (event) => {
    setEnteredMonth(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredMonth: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredMonth: event.target.value };
    // });
  };
  const dayChangeHandler = (event) => {
    setEnteredDay(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDay: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDay: event.target.value };
    // });
  };
  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredYear: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredYear: event.target.value };
    // });
  };
  const positionChangeHandler = (event) => {
    setEnteredPosition(event.target.value);
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
    props.onSaveEmployeeData(employeeData);
    setEnteredName("");
    setEnteredStreet("");
    setEnteredCity("");
    setEnteredState("");
    setEnteredZip("");
    setEnteredMonth("");
    setEnteredDay("");
    setEnteredYear("");
    setEnteredPosition("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-employee__controls">
        <div className="new-employee__control">
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            placeholder="name"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>Street</label>
          <input
            type="text"
            value={enteredStreet}
            placeholder="street address"
            onChange={streetChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>City</label>
          <input
            type="text"
            value={enteredCity}
            placeholder="city"
            onChange={cityChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>State</label>
          <input
            type="text"
            value={enteredState}
            placeholder="state (ex. NC)"
            onChange={stateChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>Zip</label>
          <input
            type="text"
            value={enteredZip}
            placeholder="zip"
            onChange={zipChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>Month</label>
          <input
            type="text"
            value={enteredMonth}
            placeholder="DOB-month (ex. January)"
            onChange={monthChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>Day</label>
          <input
            type="text"
            value={enteredDay}
            placeholder="DOB-day"
            onChange={dayChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>Year</label>
          <input
            type="text"
            value={enteredYear}
            placeholder="DOB-year"
            onChange={yearChangeHandler}
          />
        </div>
        <div className="new-employee__control">
          <label>Position</label>
          <input
            type="text"
            value={enteredPosition}
            placeholder="position"
            onChange={positionChangeHandler}
          />
        </div>
      </div>
      <div className="new-employee__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Employee</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
