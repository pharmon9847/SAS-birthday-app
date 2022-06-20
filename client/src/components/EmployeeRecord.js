import "./EmployeeRecord.css";

function EmployeeRecord(props) {
  return (
    <div className="employee-record">
      <div className="employee-record__description">
        <div className="employee-record__name">{props.name}</div>
        <div className="employee-record__street">{props.street}</div>
        <div className="employee-record__city">{props.city}</div>
        <div className="employee-record__state">{props.state}</div>
        <div className="employee-record__zip">{props.zip}</div>
        <div className="employee-record__DOB_month">{props.DOB_month}</div>
        <div className="employee-record__DOB_day">{props.DOB_day}</div>
        <div className="employee-record__year">{props.DOB_year}</div>
        <div className="employee-record__position">{props.position}</div>
      </div>
    </div>
  );
}

export default EmployeeRecord;
