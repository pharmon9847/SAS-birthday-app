import React, { useState } from "react";
import "./EmployeeRecord.css";

const EmployeeRecord = (props) => {
  const [name, setName] = useState(props.name);
  const [street, setStreet] = useState(props.street);
  const [city, setCity] = useState(props.city);
  const [state, setState] = useState(props.state);
  const [zip, setZip] = useState(props.zip);
  const [DOB_month, setDOB_month] = useState(props.DOB_month);
  const [DOB_day, setDOB_day] = useState(props.DOB_day);
  const [DOB_year, setDOB_year] = useState(props.DOB_year);
  const [position, setPosition] = useState(props.position);
  const clickHandler = () => {
    setName("updated!");
    console.log(name);
  };
  return (
    <div className="employee-record">
      <div className="employee-record__description">
        <div className="employee-record__name">{props.name}</div>
        <div className="employee-record__address">
          <div className="employee-record__address_street">{props.street}</div>
          <div className="employee-record__address_city">{props.city}</div>
          <div className="employee-record__address_state">{props.state}</div>
          <div className="employee-record__address_zip">{props.zip}</div>
        </div>
        <div className="employee-birthday">
          <div className="employee-birthday__DOB_month">{props.DOB_month}</div>
          <div className="employee-birthday__DOB_day">{props.DOB_day}</div>
          <div className="employee-birthday__DOB_year">{props.DOB_year}</div>
        </div>
        <div className="employee-record__position">{props.position}</div>
      </div>
      <button onClick={clickHandler}>Change Employee</button>
    </div>
  );
};

export default EmployeeRecord;
