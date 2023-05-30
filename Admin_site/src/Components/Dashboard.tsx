import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
const Dashboard = () => {
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp/");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <Header></Header>
        <div>
          <h3>Welcome {localStorage.getItem("uname")}</h3>
          <button className="btn btn-primary" onClick={goEmployee}>
            Employee Records
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-primary" onClick={doLogout}>
            Logout
          </button>
        </div>
      </>
    );
  }
};

export default Dashboard;
