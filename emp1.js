import Addemployee from "./Addemployee";
import { Link } from "react-router-dom";
import emp from "./emp.png";

const Employeelist = () => {
  const employee =[
    {empid: 1,empname:"reddy",empage: 22,empdept:"ECE"},
    {empid: 2,empname:"Jeevan",empage: 22,empdept:"ME"},
    {empid: 3,empname:"Gautam",empage: 22,empdept:"CSE"},
    {empid: 4,empname:"Rahul",empage: 22,empdept:"IT"},
    {empid: 5,empname:"Tanuj",empage: 22,empdept:"ECE"},
  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Employees list</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Link to="/add" className="btn btn-primary btn-sm float-end">
            + Add Employees
          </Link>
        </div>
      </div>
        <div className="row">
          {employee.map((i) => (
              <div className="col-sm-12 col-md-6 col-lg-3" key={i.empid}>
                <div className="card">
                <img src={emp} class="card-img-top" alt="..." />
                <div className="card-body">
                <label>ID :</label><label>{i.empid}</label><br></br>
                <label>Name :</label>
                      <label>{i.empname}</label>
                      <br></br>
                      <label>Age :</label>
                      <label>{i.empage}</label>
                      <br></br>
                      <label>City :</label>
                      <label>Bangalore</label>
                      <br></br>
                      <label>Dept :</label>
                      <label>{i.empdept}</label>
                      <br></br>
                      <Link to="/edit" className="btn btn-outline-success">
                        Edit
                      </Link>&nbsp;
                      <Link to="/details" className="btn btn-outline-warning">
                        Details
                      </Link>&nbsp;
                      <Link to="/add" className="btn btn-outline-danger">
                        Remove
                      </Link>
                </div>
                </div>
                </div>
                
          ))
          }
          </div>
    </div>
  );
};
export default Employeelist;
