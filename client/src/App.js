import EmployeeRecord from "./components/EmployeeRecord";

function App() {
  const employees = [
    {
      id: "e1",
      name: "Dwight Schrute",
      street: "234 Burt Ave",
      city: "Raleigh",
      state: "NC",
      zip: 27601,
      DOB_month: "January",
      DOB_day: 14,
      DOB_year: 1975,
      position: "Sales",
    },
    {
      id: "e2",
      name: "Jim Halpert",
      street: "234 Park Ave",
      city: "Raleigh",
      state: "NC",
      zip: 27604,
      DOB_month: "February",
      DOB_day: 25,
      DOB_year: 1978,
      position: "Sales",
    },
    {
      id: "e3",
      name: "Pam Beasley",
      street: "543 Lee St",
      city: "Raleigh",
      state: "NC",
      zip: 27609,
      DOB_month: "March",
      DOB_day: 5,
      DOB_year: 1985,
      position: "Reception",
    },
    {
      id: "e4",
      name: "Jan Levinson",
      street: "987 Easy St",
      city: "Raleigh",
      state: "NC",
      zip: 27616,
      DOB_month: "April",
      DOB_day: 17,
      DOB_year: 1974,
      position: "Corporate",
    },
    {
      id: "e5",
      name: "Kevin Malone",
      street: "876 St. Albans Dr",
      city: "Raleigh",
      state: "NC",
      zip: 27604,
      DOB_month: "May",
      DOB_day: 27,
      DOB_year: 1976,
      position: "Accounting",
    },
    {
      id: "e6",
      name: "Toby Flenderson",
      street: "956 Ralph Rd",
      city: "Raleigh",
      state: "NC",
      zip: 27609,
      DOB_month: "June",
      DOB_day: 6,
      DOB_year: 1977,
      position: "HR",
    },
    {
      id: "e7",
      name: "Stanley Hudson",
      street: "996 Pretty Ave",
      city: "Raleigh",
      state: "NC",
      zip: 27610,
      DOB_month: "July",
      DOB_day: 4,
      DOB_year: 1969,
      position: "Sales",
    },
    {
      id: "e8",
      name: "David Wallace",
      street: "432 St. Mary's St",
      city: "Raleigh",
      state: "NC",
      zip: 27603,
      DOB_month: "August",
      DOB_day: 19,
      DOB_year: 1965,
      position: "Corporate",
    },
    {
      id: "e9",
      name: "Angela Martin",
      street: "678 Way Back Ln",
      city: "Raleigh",
      state: "NC",
      zip: 27609,
      DOB_month: "September",
      DOB_day: 27,
      DOB_year: 1970,
      position: "Accounting",
    },
    {
      id: "e10",
      name: "Oscar Martinez",
      street: "996 Bob Ln",
      city: "Raleigh",
      state: "NC",
      zip: 27601,
      DOB_month: "October",
      DOB_day: 31,
      DOB_year: 1972,
      position: "Accounting",
    },
    {
      id: "e11",
      name: "Michael Scott",
      street: "1798 Dennis Ave",
      city: "Raleigh",
      state: "NC",
      zip: 27604,
      DOB_month: "November",
      DOB_day: 24,
      DOB_year: 1973,
      position: "Regional Manager",
    },
    {
      id: "e12",
      name: "Ryan Howard",
      street: "789 Wayberry St",
      city: "Raleigh",
      state: "NC",
      zip: 27615,
      DOB_month: "December",
      DOB_day: 5,
      DOB_year: 1986,
      position: "Temp",
    },
    {
      id: "e13",
      name: "Meredith Palmer",
      street: "334 Easy St",
      city: "Raleigh",
      state: "NC",
      zip: 27601,
      DOB_month: "January",
      DOB_day: 15,
      DOB_year: 1971,
      position: "Customer Service",
    },
    {
      id: "e14",
      name: "Darryl Philbin",
      street: "887 Rowdy Ln",
      city: "Raleigh",
      state: "NC",
      zip: 27607,
      DOB_month: "February",
      DOB_day: 16,
      DOB_year: 1979,
      position: "Warehouse",
    },
    {
      id: "e15",
      name: "Gabe Lewis",
      street: "7789 Gable Rd",
      city: "Raleigh",
      state: "NC",
      zip: 27605,
      DOB_month: "March",
      DOB_day: 3,
      DOB_year: 1982,
      position: "Corporate",
    },
    {
      id: "e16",
      name: "Kelly Kapoor",
      street: "9987 Harriet Rd",
      city: "Raleigh",
      state: "NC",
      zip: 27614,
      DOB_month: "April",
      DOB_day: "5",
      DOB_year: 1987,
      position: "Customer Relations",
    },
    {
      id: "e17",
      name: "Robert California",
      street: "6674 Lineberry Rd",
      city: "Raleigh",
      state: "NC",
      zip: 27603,
      DOB_month: "May",
      DOB_day: 8,
      DOB_year: 1964,
      position: "CEO",
    },
    {
      id: "e18",
      name: "Todd Packer",
      street: "6675 Hillsborough St",
      city: "Raleigh",
      state: "NC",
      zip: 27603,
      DOB_month: "June",
      DOB_day: 15,
      DOB_year: 1979,
      position: "Sales",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <EmployeeRecord
        name={employees[0].name}
        street={employees[0].street}
        city={employees[0].city}
        state={employees[0].state}
        zip={employees[0].zip}
        DOB_month={employees[0].DOB_month}
        DOB_day={employees[0].DOB_day}
        DOB_year={employees[0].DOB_year}
        position={employees[0].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[1].name}
        street={employees[1].street}
        city={employees[1].city}
        state={employees[1].state}
        zip={employees[1].zip}
        DOB_month={employees[1].DOB_month}
        DOB_day={employees[1].DOB_day}
        DOB_year={employees[1].DOB_year}
        position={employees[1].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[2].name}
        street={employees[2].street}
        city={employees[2].city}
        state={employees[2].state}
        zip={employees[2].zip}
        DOB_month={employees[2].DOB_month}
        DOB_day={employees[2].DOB_day}
        DOB_year={employees[2].DOB_year}
        position={employees[2].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[3].name}
        street={employees[3].street}
        city={employees[3].city}
        state={employees[3].state}
        zip={employees[3].zip}
        DOB_month={employees[3].DOB_month}
        DOB_day={employees[3].DOB_day}
        DOB_year={employees[3].DOB_year}
        position={employees[3].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[4].name}
        street={employees[4].street}
        city={employees[4].city}
        state={employees[4].state}
        zip={employees[4].zip}
        DOB_month={employees[4].DOB_month}
        DOB_day={employees[4].DOB_day}
        DOB_year={employees[4].DOB_year}
        position={employees[4].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[5].name}
        street={employees[5].street}
        city={employees[5].city}
        state={employees[5].state}
        zip={employees[5].zip}
        DOB_month={employees[5].DOB_month}
        DOB_day={employees[5].DOB_day}
        DOB_year={employees[5].DOB_year}
        position={employees[5].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[6].name}
        street={employees[6].street}
        city={employees[6].city}
        state={employees[6].state}
        zip={employees[6].zip}
        DOB_month={employees[6].DOB_month}
        DOB_day={employees[6].DOB_day}
        DOB_year={employees[6].DOB_year}
        position={employees[6].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[7].name}
        street={employees[7].street}
        city={employees[7].city}
        state={employees[7].state}
        zip={employees[7].zip}
        DOB_month={employees[7].DOB_month}
        DOB_day={employees[7].DOB_day}
        DOB_year={employees[7].DOB_year}
        position={employees[7].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[8].name}
        street={employees[8].street}
        city={employees[8].city}
        state={employees[8].state}
        zip={employees[8].zip}
        DOB_month={employees[8].DOB_month}
        DOB_day={employees[8].DOB_day}
        DOB_year={employees[8].DOB_year}
        position={employees[8].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[9].name}
        street={employees[9].street}
        city={employees[9].city}
        state={employees[9].state}
        zip={employees[9].zip}
        DOB_month={employees[9].DOB_month}
        DOB_day={employees[9].DOB_day}
        DOB_year={employees[9].DOB_year}
        position={employees[9].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[10].name}
        street={employees[10].street}
        city={employees[10].city}
        state={employees[10].state}
        zip={employees[10].zip}
        DOB_month={employees[10].DOB_month}
        DOB_day={employees[10].DOB_day}
        DOB_year={employees[10].DOB_year}
        position={employees[10].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[11].name}
        street={employees[11].street}
        city={employees[11].city}
        state={employees[11].state}
        zip={employees[11].zip}
        DOB_month={employees[11].DOB_month}
        DOB_day={employees[11].DOB_day}
        DOB_year={employees[11].DOB_year}
        position={employees[11].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[12].name}
        street={employees[12].street}
        city={employees[12].city}
        state={employees[12].state}
        zip={employees[12].zip}
        DOB_month={employees[12].DOB_month}
        DOB_day={employees[12].DOB_day}
        DOB_year={employees[12].DOB_year}
        position={employees[12].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[13].name}
        street={employees[13].street}
        city={employees[13].city}
        state={employees[13].state}
        zip={employees[13].zip}
        DOB_month={employees[13].DOB_month}
        DOB_day={employees[13].DOB_day}
        DOB_year={employees[13].DOB_year}
        position={employees[13].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[14].name}
        street={employees[14].street}
        city={employees[14].city}
        state={employees[14].state}
        zip={employees[14].zip}
        DOB_month={employees[14].DOB_month}
        DOB_day={employees[14].DOB_day}
        DOB_year={employees[14].DOB_year}
        position={employees[14].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[15].name}
        street={employees[15].street}
        city={employees[15].city}
        state={employees[15].state}
        zip={employees[15].zip}
        DOB_month={employees[15].DOB_month}
        DOB_day={employees[15].DOB_day}
        DOB_year={employees[15].DOB_year}
        position={employees[15].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[16].name}
        street={employees[16].street}
        city={employees[16].city}
        state={employees[16].state}
        zip={employees[16].zip}
        DOB_month={employees[16].DOB_month}
        DOB_day={employees[16].DOB_day}
        DOB_year={employees[16].DOB_year}
        position={employees[16].position}
      ></EmployeeRecord>
      <EmployeeRecord
        name={employees[17].name}
        street={employees[17].street}
        city={employees[17].city}
        state={employees[17].state}
        zip={employees[17].zip}
        DOB_month={employees[17].DOB_month}
        DOB_day={employees[17].DOB_day}
        DOB_year={employees[17].DOB_year}
        position={employees[17].position}
      ></EmployeeRecord>
    </div>
  );
}

export default App;
