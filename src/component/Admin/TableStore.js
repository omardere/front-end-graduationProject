import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 

function TableStore() {

const [ware,setWare]=useState({
  ware: [],
      
  })
  const[q,setq]=useState("")
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/wareHouse`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }
    }).then(
      (res)=>
      setWare({
        ware:res.data
      })
    )
}, []);

 function search(rows){
   console.log(rows)
     return rows.filter(row=>row.department.name.toLowerCase().indexOf(q.toLowerCase())>-1||
     row.capacity.toString().toLowerCase().indexOf(q.toLowerCase())>-1)
 }
 const s=search(ware.ware);
    return ware.ware.length > 0?
   (
    <div>
     
<section id="table_store">
  <main style={{   marginTop: "0px"}}
    id="main" className="main">

    <div className="pagetitle">
      <h1>Data Tables</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item">Tables</li>
          <li className="breadcrumb-item ">wareHouse</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section  className="section">
      <div className="row">
        <div className="col-lg-12">

        <div style={{  marginTop: "-50px  "}} className="card">
            <div className="card-body">
              <h5 className="card-title">wareHouse</h5>
              <p>this page contain information about wareHouse</p>
              <div style={{marginBottom:'50px'}}>
                <input placeholder='search ...' type="text" value={q} onChange={(e)=>setq(e.target.value)} />
              </div>
              {/* <!-- Table with stripped rows --> */}
              <table style={{background: "rgb(0, 0, 0)",color:"white"}} className="table datatable">
              <thead style={{background: "black"}}>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">capacity</th>
                   

                  </tr>
                </thead>
                <tbody>
                {
                  
                s.map(war => {               
                 return  (
                    <tr key={war.id}>
                      <td>{war.id}</td>
                      <td>{war.department.name}  </td>
                      <td>{war.capacity}</td>
                      
                    </tr>
                  )
                })
                }
                </tbody>
              </table>
              {/* <!-- End Table with stripped rows --> */}

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
  {/* <!-- End #!main --> */}

  
  <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</section> 
    </div>
    ):
    (
      <div>
        No warehouses.
    </div>
    )
}

export default TableStore
