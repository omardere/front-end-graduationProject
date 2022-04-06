import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 

function TableSublayer() {
  const [sublayer,setSublayer]=useState({
    sublayer: [],
      
  })
  const[q,setq]=useState("")
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/supplier`).then(
      (res)=>
      setSublayer({
        sublayer:res.data
      })
    )
}, []);

 function search(rows){
   console.log(rows)
     return rows.filter(row=>row.companyName.toLowerCase().indexOf(q.toLowerCase())>-1||
     row.phoneNumber.toLowerCase().indexOf(q.toLowerCase())>-1||row.postalCode.toLowerCase().indexOf(q.toLowerCase())>-1||
     row.fax.toLowerCase().indexOf(q.toLowerCase())>-1||row.discountType.toLowerCase().indexOf(q.toLowerCase())>-1
     ||row.paymentMethode.toLowerCase().indexOf(q.toLowerCase())>-1 )
 }
 const s=search(sublayer.sublayer);
    return sublayer.sublayer.length > 0?
   (
    <div>
      
<section id="table_sublayer">
  <main style={{
    marginTop: "0px"
    }}  id="main" className="main">

    <div className="pagetitle">
      <h1>Data Tables</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
          <li className="breadcrumb-item">Tables</li>
          <li className="breadcrumb-item ">Sublayer</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section  className="section">
      <div className="row">
        <div className="col-lg-12">

        <div style={{  marginTop: "-50px  "}} className="card">
            <div className="card-body">
              <h5 className="card-title">Sublayer</h5>
              <p>this page contain information about Sublayers</p>
              <div style={{marginBottom:'50px'}}>
                <input placeholder='search ...' type="text" value={q} onChange={(e)=>setq(e.target.value)} />
              </div>

              {/* <!-- Table with stripped rows --> */}
              <table style={{background: "rgb(0, 0, 0)",color:"white"}} className="table datatable">
              <thead style={{background: "black"}}>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">phone</th>
                    <th scope="col">fax</th>
                    <th scope="col">postal code</th>
                    <th scope="col">dicount Type</th>
                    <th scope="col">Payment Method</th>
                    

                  </tr>
                </thead>
                <tbody>
                {
                  
                s.map(sub => {               
                 return  (
                    <tr key={sub.id}>
                      <td>{sub.id}</td>
                      <td>{sub.companyName}  </td>
                      <td>{sub.phoneNumber}</td>
                      <td>{sub.fax}</td>
                      <td>{sub.postalCode}</td>
                      <td>{sub.discountType}</td>
                      <td>{sub.paymentMethode}</td>
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
       No sublayer.
   </div>
   )
}

export default TableSublayer
