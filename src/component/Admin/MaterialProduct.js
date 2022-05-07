import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'; 
function MaterialProduct() {
  const {handle}=useParams();
  const [product,setProduct]=useState({
    product:[],     
  })

  const [count,setCount]=useState({
    count:""     
  })
  const [material,setMaterial]=useState({
    material:[],
      
  })
  useEffect(() => {
  axios.get(`http://localhost:8080/api/v1/product/byId/${handle}`).then(
          (res)=>{
          setProduct({
            product:res.data
          })
        console.log(product.product)
        console.log(res.data.quantity)
          setCount({
            count:res.data.quantity
          })}
        )
        axios.get(`http://localhost:8080/api/v1/product/getMaterial/${handle}`,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}` 
            }}).then(
          (res)=>
          setMaterial({
            material:res.data
          })
        )
        
       
    }, []);

    var pad = function(num) { return ('00'+num).slice(-2) };
    var date;
    date = new Date();
    date = date.getUTCFullYear()         + '-' +
            pad(date.getUTCMonth() + 1)  + '-' +
            pad(date.getUTCDate());
         
    console.log(date)
  
    var sr="/assets/img/"+ product.product.photo;
    console.log(sr)
  return (
    <div style={{marginLeft:"300px",backgroundColor:"white"}}>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Material Product</h2>
          
        </div>

      </div>
    </section>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Portfolio Details Section ======= --> */}
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
       {
              <div className="row gy-4">
 
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                      <img src={sr} alt=""/>
                </div>
              </div>
    
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Product information</h3>
                  <ul>
                    <li><strong>description:</strong>{product.product.description}</li>
                    <li><strong>estimated time:</strong>{product.product.estimatedTime}</li>
                    <li><strong>Price:</strong>{product.product.price}$</li>
                    <li><strong>Dimension:</strong>{`${product.product.height}* ${product.product.width}`}</li>
                    <li><strong>Count:</strong>{product.product.quantity}</li> 
                    <li><strong>Material nedded:</strong>   
                     <ul>
                         {
                             console.log(material.material)
                         }
                         {
                             material.material.map(m=>{
                                 return(
                                <li><strong>id:</strong>{m.material.id} <strong>, count:</strong>{m.count}  </li>
                                 )
                             })
                         }
                    </ul>
                    </li>     
                  </ul>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                </div>
                </div>
              
                 
                </div> 
              </div>
            
          
       }
       

        </div>

    </section>
    </div>
  )
}

export default MaterialProduct
