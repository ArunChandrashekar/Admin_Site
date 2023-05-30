import { useParams } from "react-router-dom";
import Header from "./Header";

const EmployeeDetails = () => {
  let { id } = useParams();
  let employess = {
    code: "e001",
    name: "Tom",
    gender: "Male",
    anualSalary: 5500,
    dateofBirth: "25/6/1988",
  };
  return (
    <div>
      <Header></Header>
      <h3>Employee details:</h3>
      <div>
        Code : {employess.code}
        <br></br>
        Name : {employess.name}
        <br></br>
        gender : {employess.gender}
        <br></br>
        anualSalary : {employess.anualSalary}
        <br></br>
        dateofBirth : {employess.dateofBirth}
        <br></br>
      </div>
    </div>
  );
};

export default EmployeeDetails;
