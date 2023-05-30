import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert>Login not successful try again...</Alert>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };
  return (
    <>
      <Header></Header>
      <div>
        <div className="mb-3">
          <label className="form-label"></label>
          UserName :{" "}
          <input
            type="text"
            className="form-control"
            id="uname"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label"></label>
          Passsword :{" "}
          <input
            type="password"
            className="form-control"
            id="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={doLogin}>
          Submit
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Login;
