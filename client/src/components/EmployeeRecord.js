import React, { useState } from "react";
import "./EmployeeRecord.css";

const EmployeeRecord = (props) => {
  const [name, setName] = useState(props.name);
  const [street, setStreet] = useState(props.street);
  const [city, setCity] = useState(props.city);
  const [state, setState] = useState(props.state);
  const [zip, setZip] = useState(props.zip);
  const [month, setMonth] = useState(props.month);
  const [day, setDay] = useState(props.day);
  const [year, setYear] = useState(props.year);
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
          <div className="employee-birthday__month">{props.month}</div>
          <div className="employee-birthday__day">{props.day}</div>
          <div className="employee-birthday__year">{props.year}</div>
        </div>
        <div className="employee-record__position">{props.position}</div>
      </div>
    </div>
  );
};

export default EmployeeRecord;
