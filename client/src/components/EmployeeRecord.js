import "./EmployeeRecord.css";

function EmployeeRecord(props) {
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
    </div>
  );
}

export default EmployeeRecord;
