import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function TableEmployee () {
  const [employee,setEmployee]=useState({
    employee: [],
      
  })
  const[q,setq]=useState("")
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/employee`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }
    }).then(
      (res)=>
      setEmployee({
        employee:res.data
      })
    )
}, []);
 
    
  //  ts() {
  //   axios.get('http://localhost:8080/api/v1/user/ByUserName/addd').then(
  //     res=>{
        
  //         console.log(res.data);
  //     }
  // )
  // }
 function search(rows){
   console.log(rows)
     return rows.filter(row=>row.user.firstName.toLowerCase().indexOf(q.toLowerCase())>-1||
     row.user.lastName.toLowerCase().indexOf(q.toLowerCase())>-1||row.role.toString().toLowerCase().indexOf(q.toLowerCase())>-1||
     row.user.email.toLowerCase().indexOf(q.toLowerCase())>-1||row.salary.toString().toLowerCase().indexOf(q.toLowerCase())>-1 )
 }
 const s=search(employee.employee);
    return employee.employee.length > 0
    ? (
    <div>
      
<section id="table_employee">
  
  <main style={{  marginTop: "0px  "}}  id="main" className="main">

    <div className="pagetitle">
      <h1 >Employee</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item">Tables</li>
          <li className="breadcrumb-item ">Employee</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section  className="section">
      <div className="row">
        <div className="col-lg-12">

          <div style={{  marginTop: "-50px  "}} className="card">
            <div className="card-body">
              <h5 className="card-title">Employee</h5>
              
              <p>this page contain information about Employees</p>
              <div style={{marginBottom:'50px'}}>
                <input placeholder='search ...' type="text" value={q} onChange={(e)=>setq(e.target.value)} />
              </div>
              {/* <!-- Table with stripped rows --> */}
              
                    <div class="dataTable-container">
              <table style={{background: "rgb(0, 0, 0)",color:"white "}} className="table datatable">
                  
                <thead style={{background: "black"}}>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Salary</th>

                  </tr>
                </thead>
                <tbody>
                {
                  
                s.map(emplo => {
                  let rol='';
                  if (emplo.role===0) rol='head'
                  else if(emplo.role===1)rol='employee'
                  else if(emplo.role===2)rol='manager'
                  else if(emplo.role===3)rol='Admin'
          
          
                  return emplo.user!=null? (
                    <tr key={emplo.id}>
                      <td>{emplo.id}</td>
                      <td>{`${emplo.user.firstName} ${emplo.user.lastName}`}  </td>
                      <td>{rol}</td>
                      <td>{emplo.user.email}</td>
                      <td>{emplo.startingDate}</td>
                      <td>{emplo.salary}</td>
                    </tr>
                  ):(<tr>
                    <td>{emplo.id}</td>
                    <td> the user is null</td>
                    <td>{emplo.role}</td>
                    <td> the user is null</td>
                    <td>{emplo.startingDate}</td>
                    <td>{emplo.salary}</td>
          
                  </tr>)
                })
                }
                </tbody>
              </table>
              </div>
              </div>
              {/* <!-- End Table with stripped rows --> */}

            </div>
          </div>

        </div>
    </section>

  </main>
  {/* <!-- End #!main --> */}

  

</section>
    </div>
  ):
  (
    <div>
      No employee.
  </div>
  )

}
export default TableEmployee
