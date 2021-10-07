import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import EmployeeCreateForm from './EmployeeCreateForm';

const sampleDate=[{firstName: 'Akshit', lastName: 'Arora', dateOfBirth: '2021-10-08', designation: 'Software engineer', profilePhotoLink: 'https://i.postimg.cc/SKZg9gtx/IMG-20200301-183324.jpg',experience:'213',id:'1'},{firstName: 'Akshit', lastName: 'Arora', dateOfBirth: '2021-10-08', designation: 'Software engineer', profilePhotoLink: 'https://i.postimg.cc/SKZg9gtx/IMG-20200301-183324.jpg',experience:'213',id:'2'},{firstName: 'Akshit', lastName: 'Arora', dateOfBirth: '2021-10-08', designation: 'Software engineer', profilePhotoLink: 'https://i.postimg.cc/SKZg9gtx/IMG-20200301-183324.jpg',experience:'213',id:'3'},]
function DisplayEmployees (){
    const [employees,setEmployees] = useState(sampleDate)
    // const [editEmployee,setEditEmployee] = useState({})


    function addEmployee(newEmployee){
        setEmployees([newEmployee,...employees])
    }
    // function editEmployee(employee){
    //     setEditEmployee(employee)
    // }
    function deleteEmployee(id){
        setEmployees(employees.filter(employees=>employees.id!==id))
    }
    return(
        <>
        <h1>Employees</h1>
        <Link to='/create'>Add Employee</Link>
        <br />
<div className="d-inline-flex p-2">
{employees.map(employee=>(
    <div className="card m-3" style={{width: "18rem"}}>
        <div className="position-absolute top-0 end-0 "><button className="btn btn-light p-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></button>
<button onClick={()=>deleteEmployee(employee.id)} className="btn btn-danger p-2 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg></button></div>
    <img src={employee.profilePhotoLink} className="card-img-top" alt={employee.firstName}/>
    <div className="card-body">
      <h5 className="card-title">{employee.firstName+' '+employee.lastName}</h5>
      <p className="card-text">Date of birth: {employee.dateOfBirth}</p>
      <p className="card-text">Designation: {employee.designation}</p>
      <p className="card-text">Experience: {employee.experience}</p>
    </div>
  </div>
))}
</div>

        {/* <table class="table table-striped">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Date of birth</th>
                <th>Designation</th>
                <th>Profile photo</th>
                <th>Experience</th>
            </tr>
        {employees.map((employee)=>(
            <tr key = {employee.id}>
                
              <td>{employee.firstName + ' '+ employee.lastName}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.designation}</td>
              <td>{employee.profilePhotoLink}</td>
              <td>{employee.experience}</td>
          </tr>
        ))}
        </tbody>
        </table> */}
        <EmployeeCreateForm addEmployee={addEmployee}/>
</>
    );
    
}

export default DisplayEmployees;