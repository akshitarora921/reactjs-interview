import React, { useState } from 'react'
const INITIAL_STATE={firstName:'',lastName:'',dateOfBirth:'',designation:'', profilePhotoLink:'',experience:''}

function EmployeeCreateForm(addEmployee,editEmployee) {
    const [employee, setEmployee] =useState(INITIAL_STATE) 
    console.log(addEmployee)
    function handleSubmit(e){
        e.preventDefault()
        // if (editEmployee){
            
        // }
        let id = new Date().getTime()
        addEmployee({...employee,id})
        setEmployee(INITIAL_STATE)
    }

        return (<> <h2 className="text-center">Create Employee</h2>
        <div className="row">
            <div className="col-3"></div>
        <div className="col-6">
            <div className="mb-3">
                <label htmlFor="firstName" >First Name</label>
                <input className="form-control" type="text" id="firstName"  value={employee.firstName} onChange={(e) => setEmployee({...employee,firstName:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" >Last Name</label>
                <input className="form-control" type="text" id="LastName"  value={employee.lastName} onChange={(e) => setEmployee({...employee,lastName:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="dateOfBirth" >Date of birth</label>
                <input className="form-control" type="date" id="dateOfBirth"  value={employee.dateOfBirth} onChange={(e) => setEmployee({...employee,dateOfBirth:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="designation" >Designation</label>
                <input className="form-control" type="text" id="designation"  value={employee.designation} onChange={(e) => setEmployee({...employee,designation:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="profilePhotoLink" >Profile PhotoLink</label>
                <input className="form-control" type="url" id="profilePhotoLink"  value={employee.profilePhotoLink} onChange={(e) => setEmployee({...employee,profilePhotoLink:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="experience" >Experience</label>
                <input className="form-control" type="text" id="experience"  value={employee.experience} onChange={(e) => setEmployee({...employee,experience:e.target.value})}/>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    </div></>)
}

export default EmployeeCreateForm
