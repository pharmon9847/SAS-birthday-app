import React, { useState } from "react";
import DunderMifflinEmployees from "./components/DunderMifflinEmployees";
import NewEmployee from "./components/NewEmployee/NewEmployee";

const INITIAL_EMPLOYEES = [
  {
    id: "e1",
    name: "Dwight Schrute",
    street: "234 Burt Ave",
    city: "Raleigh",
    state: "NC",
    zip: 27601,
    month: "January",
    day: 14,
    year: 1975,
    position: "Sales",
  },
  {
    id: "e2",
    name: "Jim Halpert",
    street: "234 Park Ave",
    city: "Raleigh",
    state: "NC",
    zip: 27604,
    month: "February",
    day: 25,
    year: 1978,
    position: "Sales",
  },
  {
    id: "e3",
    name: "Pam Beasley",
    street: "543 Lee St",
    city: "Raleigh",
    state: "NC",
    zip: 27609,
    month: "March",
    day: 5,
    year: 1985,
    position: "Reception",
  },
  {
    id: "e4",
    name: "Jan Levinson",
    street: "987 Easy St",
    city: "Raleigh",
    state: "NC",
    zip: 27616,
    month: "April",
    day: 17,
    year: 1974,
    position: "Corporate",
  },
  {
    id: "e5",
    name: "Kevin Malone",
    street: "876 St. Albans Dr",
    city: "Raleigh",
    state: "NC",
    zip: 27604,
    month: "May",
    day: 27,
    year: 1976,
    position: "Accounting",
  },
  {
    id: "e6",
    name: "Toby Flenderson",
    street: "956 Ralph Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27609,
    month: "June",
    day: 6,
    year: 1977,
    position: "HR",
  },
  {
    id: "e7",
    name: "Stanley Hudson",
    street: "996 Pretty Ave",
    city: "Raleigh",
    state: "NC",
    zip: 27610,
    month: "July",
    day: 4,
    year: 1969,
    position: "Sales",
  },
  {
    id: "e8",
    name: "David Wallace",
    street: "432 St. Mary's St",
    city: "Raleigh",
    state: "NC",
    zip: 27603,
    month: "August",
    day: 19,
    year: 1965,
    position: "Corporate",
  },
  {
    id: "e9",
    name: "Angela Martin",
    street: "678 Way Back Ln",
    city: "Raleigh",
    state: "NC",
    zip: 27609,
    month: "September",
    day: 27,
    year: 1970,
    position: "Accounting",
  },
  {
    id: "e10",
    name: "Oscar Martinez",
    street: "996 Bob Ln",
    city: "Raleigh",
    state: "NC",
    zip: 27601,
    month: "October",
    day: 31,
    year: 1972,
    position: "Accounting",
  },
  {
    id: "e11",
    name: "Michael Scott",
    street: "1798 Dennis Ave",
    city: "Raleigh",
    state: "NC",
    zip: 27604,
    month: "November",
    day: 24,
    year: 1973,
    position: "Regional Manager",
  },
  {
    id: "e12",
    name: "Ryan Howard",
    street: "789 Wayberry St",
    city: "Raleigh",
    state: "NC",
    zip: 27615,
    month: "December",
    day: 5,
    year: 1986,
    position: "Temp",
  },
  {
    id: "e13",
    name: "Meredith Palmer",
    street: "334 Easy St",
    city: "Raleigh",
    state: "NC",
    zip: 27601,
    month: "January",
    day: 15,
    year: 1971,
    position: "Customer Service",
  },
  {
    id: "e14",
    name: "Darryl Philbin",
    street: "887 Rowdy Ln",
    city: "Raleigh",
    state: "NC",
    zip: 27607,
    month: "February",
    day: 16,
    year: 1979,
    position: "Warehouse",
  },
  {
    id: "e15",
    name: "Gabe Lewis",
    street: "7789 Gable Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27605,
    month: "March",
    day: 3,
    year: 1982,
    position: "Corporate",
  },
  {
    id: "e16",
    name: "Kelly Kapoor",
    street: "9987 Harriet Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27614,
    month: "April",
    day: "5",
    year: 1987,
    position: "Customer Relations",
  },
  {
    id: "e17",
    name: "Robert California",
    street: "6674 Lineberry Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27603,
    month: "May",
    day: 8,
    year: 1964,
    position: "CEO",
  },
  {
    id: "e18",
    name: "Todd Packer",
    street: "6675 Hillsborough St",
    city: "Raleigh",
    state: "NC",
    zip: 27603,
    month: "June",
    day: 15,
    year: 1979,
    position: "Sales",
  },
  {
    id: "e19",
    name: "Erin Hannon",
    street: "456 Dennis Ave",
    city: "Raleigh",
    state: "NC",
    zip: 27604,
    month: "July",
    day: 4,
    year: 1987,
    position: "Reception",
  },
  {
    id: "e20",
    name: "Cathy Simms",
    street: "345 Lineberry Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27603,
    month: "June",
    day: 25,
    year: 1989,
    position: "Intern",
  },
  {
    id: "e21",
    name: "Holly Flax",
    street: "7896 Midwood Dr",
    city: "Raleigh",
    state: "NC",
    zip: 27604,
    month: "November",
    day: 29,
    year: 1979,
    position: "HR",
  },
  {
    id: "e22",
    name: "Mose Schrute",
    street: "234 Beet Way",
    city: "Raleigh",
    state: "NC",
    zip: 27616,
    month: "December",
    day: 4,
    year: 1990,
    position: "Farm Hand",
  },
  {
    id: "e23",
    name: "Karen Filippelli",
    street: "7896 Stanley Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27608,
    month: "August",
    day: 31,
    year: 1992,
    position: "Regional Manager",
  },
  {
    id: "e24",
    name: "Nellie Bertram",
    street: "234 Blount St.",
    city: "Raleigh",
    state: "NC",
    zip: 27602,
    month: "September",
    day: 8,
    year: 1979,
    position: "Special Events",
  },
  {
    id: "e25",
    name: "Pete Plop Miller",
    street: "234 Hargett St",
    city: "Raleigh",
    state: "NC",
    zip: 27603,
    month: "January",
    day: 29,
    year: 1987,
    position: "Public Relations",
  },
  {
    id: "e26",
    name: "Clark Green",
    street: "678 Ray Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27608,
    month: "July",
    day: 17,
    year: 1984,
    position: "Sales",
  },
  {
    id: "e27",
    name: "Creed Bratton",
    street: "678 Creepy St",
    city: "Raleigh",
    state: "NC",
    zip: 27610,
    month: "October",
    day: 31,
    year: 1962,
    position: "Musician",
  },
  {
    id: "e28",
    name: "DeAngelo Vickers",
    street: "475 Blount St",
    city: "Raleigh",
    state: "NC",
    zip: 27605,
    month: "December",
    day: 1,
    year: 1969,
    position: "Regional Manager",
  },
  {
    id: "e29",
    name: "Phyllis Lapin-Vance",
    street: "345 Restful Pl",
    city: "Raleigh",
    state: "NC",
    zip: 27609,
    month: "July",
    day: 17,
    year: 1977,
    position: "Sales",
  },
  {
    id: "e30",
    name: "Bob Vance",
    street: "345 Restful Pl",
    city: "Raleigh",
    state: "NC",
    zip: 27609,
    month: "September",
    day: 15,
    year: 1978,
    position: "Vance Refrigeration",
  },
  {
    id: "e31",
    name: "Josh Porter",
    street: "9908 Romano St",
    city: "Raleigh",
    state: "NC",
    zip: 27608,
    month: "May",
    day: 19,
    year: 1983,
    position: "Regional Manager",
  },
  {
    id: "e32",
    name: "Hank Tate",
    street: "786 Brinderful Rd",
    city: "Raleigh",
    state: "NC",
    zip: 27610,
    month: "November",
    day: 7,
    year: 1970,
    position: "Security",
  },
];
const App = () => {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);

  const addEmployeeHandler = (employee) => {
    setEmployees((prevEmployees) => {
      return [employee, ...prevEmployees];
    });
    console.log("In App.js");
    console.log(employee);
  };
  return (
    <div>
      <NewEmployee onAddEmployee={addEmployeeHandler} />
      <DunderMifflinEmployees employees={employees} />
    </div>
  );
};

export default App;
