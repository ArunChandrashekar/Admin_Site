import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Employee = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/empDetails/e001");
  };
  let employess = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "e004",
      name: "Kaveri",
      gender: "Female",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <>
      <Header></Header>
      <h3>List of employees:</h3>
      <table className="table">
        <tbody>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salry</th>
            <th>DOB</th>
          </tr>
          {employess.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.anualSalary}</td>
              <td>{item.dateofBirth}</td>
              <td>
                <button className="btn btn-primary" onClick={goDetails}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => navigate("/addUser/")}>
        Add User
      </button>
    </>
  );
};

export default Employee;
