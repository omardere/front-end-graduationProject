
import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';


function Dachboard () {
  
  const [order,setOrder]=useState({
    order:[],     
  })
  const [fin,setFin]=useState({
    fin:[],     
  })
  useEffect(() => {
  axios.get(`http://localhost:8080/api/v1/order/getLast`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
    }
  }).then(
          (res)=>{
            console.log(res.data)
          setOrder({
            order:res.data
          })
          
        }
        )

   
    axios.get(`http://localhost:8080/api/v1/financial/getFinancial`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  }).then(
          (res)=>
          
          setFin({

            fin:res.data
          })
        )
        
    }, []);
  //  var JSONObject = JSON.parse(order.order);
    //console.log(JSONObject);   
  console.log(typeof(order.order))
  console.log(fin.fin)
  return (
    <div>
  <main   id="main" className="main">
   <section style={{  marginTop: "-50px  "}} id="dashboard_box">
    <div className="pagetitle">
    
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
          <li className="breadcrumb-item">Dashboard</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section style={{  marginTop: "-50px  "}} className="section dashboard">
      <div className="row">

        {/* <!-- Left side columns --> */}
        <div className="col-lg-10">
          <div className="row">

            {/* <!-- Sales Card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

            

                <div className="card-body">
                  <h5 className="card-title">Sales <span>| Month</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart"></i>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Sales Card --> */}

            {/* <!-- Revenue Card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">

               

                <div className="card-body">
                  <h5 className="card-title">Revenue <span>| This Month</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6>${parseInt(fin.fin.profitsOfTheMonth,10)}</h6>
                      <span className="text-success small pt-1 fw-bold">{parseInt(fin.fin.profitsToLastMonth,10)}%</span> 

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Revenue Card --> */}

            {/* <!-- Customers Card --> */}
            <div className="col-xxl-4 col-xl-12">

              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">Customers <span>| This month</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6>{fin.fin.customerCount}</h6>
                      <span className="text-danger small pt-1 fw-bold">{parseInt(fin.fin.customerToLastMonth,10)}%</span> 

                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* <!-- End Customers Card --> */}

            
            {/* <!-- Recent Sales --> */}
            <div className="col-12">
              <div className="card recent-sales overflow-auto">

              

                <div className="card-body">
                  <h5 className="card-title">Recent Sales <span>| month</span></h5>

                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Order Done</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                        order.order.map(m=>
                          {
                            return(
                              <tr>
                        <th scope="row"><a href="#">{m.id}</a></th>
                        <td>{m.customer.user.firstName} {m.customer.user.lastName}</td>
                        <td><a href="#!" className="text-primary">{m.orderDate}</a></td>
                        <td>{m.orderDone}</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                            )
                          })
                      } 
                     
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
            {/* <!-- End Recent Sales --> */}

            {/* <!-- Top Selling -->
            <div className="col-12">
              <div className="card top-selling overflow-auto">

             

                <div className="card-body pb-0">
                  <h5 className="card-title">Top Selling <span>| Today</span></h5>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Preview</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="#!"><img src="cproduct-1.jpg" alt=""/></a></th>
                        <td><a href="#!" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                        <td>$64</td>
                        <td className="fw-bold">124</td>
                        <td>$5,828</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#!"><img src="assets/imgADM/product-2.jpg" alt=""/></a></th>
                        <td><a href="#!" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                        <td>$46</td>
                        <td className="fw-bold">98</td>
                        <td>$4,508</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#!"><img src="assets/imgADM/product-3.jpg" alt=""/></a></th>
                        <td><a href="#!" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                        <td>$59</td>
                        <td className="fw-bold">74</td>
                        <td>$4,366</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#!"><img src="assets/imgADM/product-4.jpg" alt=""/></a></th>
                        <td><a href="#!" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                        <td>$32</td>
                        <td className="fw-bold">63</td>
                        <td>$2,016</td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#!"><img src="assets/imgADM/product-5.jpg" alt=""/></a></th>
                        <td><a href="#!" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                        <td>$79</td>
                        <td className="fw-bold">41</td>
                        <td>$3,239</td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div> */}
            {/* <!-- End Top Selling --> */}

          </div>
        </div>
        {/* <!-- End Left side columns --> */}

        {/* <!-- Right side columns --> */}
        {/* <div className="col-lg-4"> */}

          {/* <!-- Recent Activity --> */}
          {/* <div className="card">
            <div className="filter">
              <a className="icon" href="#!" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#!">Today</a></li>
                <li><a className="dropdown-item" href="#!">This Month</a></li>
                <li><a className="dropdown-item" href="#!">This Year</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>

              <div className="activity">

                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                  <div className="activity-content">
                    Quia quae rerum <a href="#!" className="fw-bold text-dark">explicabo officiis</a> beatae
                  </div>
                </div> */}
                {/* <!-- End activity item--> */}

                {/* <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                  <div className="activity-content">
                    Voluptatem blanditiis blanditiis eveniet
                  </div>
                </div>
                {/* <!-- End activity item--> */}

                {/* <div className="activity-item d-flex">
                  <div className="activite-label">2 hrs</div>
                  <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                  <div className="activity-content">
                    Voluptates corrupti molestias voluptatem
                  </div>
                </div> */}
                {/* <!-- End activity item--> */}

                {/* <div className="activity-item d-flex">
                  <div className="activite-label">1 day</div>
                  <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                  <div className="activity-content">
                    Tempore autem saepe <a href="#!" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                  </div>
                </div> */}
                {/* <!-- End activity item--> */}

                {/* <div className="activity-item d-flex">
                  <div className="activite-label">2 days</div>
                  <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                  <div className="activity-content">
                    Est sit eum reiciendis exercitationem
                  </div>
                </div> */}
                {/* <!-- End activity item--> */}

                {/* <div className="activity-item d-flex">
                  <div className="activite-label">4 weeks</div>
                  <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                  <div className="activity-content">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </div>
                </div> */}
                {/* <!-- End activity item--> */}

              {/* </div>

            </div>
          </div> */}
          {/* <!-- End Recent Activity --> */}

           
        
         

        {/* </div> */}
        {/* <!-- End Right side columns --> */}

      </div>
    </section>
    </section>
  </main>
  {/* <!-- End #!main --> */}
  <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>



  
 
  
    </div>
  )
}


export default Dachboard
