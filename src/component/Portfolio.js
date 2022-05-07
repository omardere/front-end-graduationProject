import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Portfolio() {
  const [product,setProduct]=useState({
    product:[],     
  })
  useEffect(() => {
  axios.get(`http://localhost:8080/api/v1/product`).then(
          (res)=>
          setProduct({
            product:res.data
          })
        )

    }, []);
    console.log(product.product)
  return (
    <div style={{marginTop:"50px",backgroundColor:"white"}}>
      <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
         {
            product.product.map(m=>{
              var sr="assets/img/"+ m.photo;
              return(
               <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img width="400px"  src={sr} height="200px" className="img-fluid" alt=""/>
            </div>
          </div>
              )
            })
         }
      
          


        </div>
        </div>


    </section>
    </div>
  )
}

export default Portfolio
