import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import emp from './emp.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare,faCircleInfo,faTrashCan, faImages } from "@fortawesome/free-solid-svg-icons";
import {button} from "bootstrap";

const Employeelist = () => {
  const [employee, setemployee] = useState(null);
  const[empdata,getEmployeeInfo]= useState(null);
 const Navigate = useNavigate();
  const id=2;
  async function fetchData(){
    try{
      const responce=await fetch('https://localhost:44369/api/employee/viewEmployees');
      const data=await responce.json();
      setemployee(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  }
  )

  // useEffect( ()=> {
  //   fetch("https://localhost:44369/api/employee/viewEmployees")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resp) => {
  //       setemployee(resp);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     })
  //   });
  const Removefunction=(id)=>{

    if(window.confirm('Are you sure you want to delete'))
    {
      fetch("https://localhost:44369/api/employee/deleteEmployee/"+ id,
    {
      method:"DELETE"
    })
      .then((res) => {
       alert("Deleted successfully")
       window.location.reload();
      })
      
      .catch((err) => {
        console.log(err.message);
      })

    }
    
      
  }
  const EditEmployee=(id) => {
    Navigate("/edit/"+id);
  }

  const EmployeeDetails=(emp) => {
    console.log("Test Emp: ",emp);
    getEmployeeInfo(emp)
  }

  // const employee = [
  //   { employeeId: 1, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 2, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 3, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 4, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 5, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  // ];

  return (
    <div className="container">
      <div className="row">
        <h1>Employee List</h1>
      </div>
      <div className="row">
        <div className="col-12 mb-2 ">
          <Link to="/add" className="btn btn-sm btn-success float-end">
            New Employee
          </Link>
        </div>
      </div>
  
      <div className="row">
        {employee &&
        employee.map((i) => (
          <div className="col-sm-12 col-md-6  col-lg-4" key={i.firstname}>
            <div className="card">
              <div className="card-body">
                <img src={emp} /><br></br>
                <label>ID : {i.employeeId}</label> <br></br>
                <label>First Name : {i.firstname}</label>
                <br></br>
                <label>Last Name : {i.lastname}</label>
                <br></br>
                <label>Age : {i.age}</label> <br></br>
                <label> Salary : {i.salary}</label>
                <br></br>
                <label> Department : {i.department}</label>
                <br></br>
                {/* <Link
                  to="/editEmployee"
                  className="btn btn-sm btn-primary float-left"
                >
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </Link>&nbsp; */}

               
                
                <button className="btn btn-sm btn-warning flaot-left" onClick={()=>EditEmployee(i.employeeId)}>
                  Edit
                  <FontAwesomeIcon icon={faPenToSquare} className="text-dark" />
                </button>&nbsp;
                <Link
                  to="/employeeDetails"
                  className="btn btn-sm btn-secondary float-right"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                  onClick={()=>EmployeeDetails(i)}>
                  View
                 <FontAwesomeIcon icon={faCircleInfo} /> 
                </Link>&nbsp;
                
                <a onClick={()=>{Removefunction(i.employeeId)}} className="btn btn-sm btn-danger float-right ">Remove
                <FontAwesomeIcon icon={faTrashCan} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="card">
                    {
                      empdata &&
                      <div className="card-body">
                         <img src={emp}/><br></br>
                        <label>ID : {empdata.employeeId}</label> <br></br>
                        <label>First Name : {empdata.firstname}</label>
                        <br></br>
                        <label>Last Name : {empdata.lastname}</label>
                        <br></br>
                        <label>Age : {empdata.age}</label> <br></br>
                        <label> Salary : {empdata.salary}</label>
                        <br></br>
                        <label> Department : {empdata.department}</label><br></br>
                      </div>
                    }
                      </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Employeelist;