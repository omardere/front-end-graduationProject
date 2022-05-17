import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'; 
function Product_detail() {
  const {handle}=useParams();
  const [product,setProduct]=useState({
    product:[],     
  })
  const [card,setCard]=useState({
    card:[],     
  })
  const [count,setCount]=useState({
    count:""     
  })
  const history = useNavigate();

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
        axios.get(`http://localhost:8080/api/v1/order/getCard/${localStorage.getItem("username")}`,{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}` 
          }}).then(
          (res)=>{
            console.log("c"+res.data)
          setCard({
            
            card:res.data
          })
        }
        )
       
    }, []);
    console.log(card.card)
    function handl(e){
      const newdata={...count}
      newdata[e.target.id]=e.target.value;
    
      setCount(newdata);
      console.log(newdata);
    }
    var pad = function(num) { return ('00'+num).slice(-2) };
    var date;
    date = new Date();
    date = date.getUTCFullYear()         + '-' +
            pad(date.getUTCMonth() + 1)  + '-' +
            pad(date.getUTCDate());
         
    console.log(date)
    function submit(e){
      e.preventDefault();
             axios.post(`http://localhost:8080/api/v1/card/addProduct/${localStorage.getItem("username")}/${product.product.id}`,{
              count:count.count,
              price:product.product.price,
              product:product.product
  
       },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }}).catch(error=>
          {
            if(error.response.status===500)
            {
               alert("product have already added")
               
            }
            
           else if(error.response.status===401)
            {
                         alert("you should sign in")
                         history("/")  
            }
            
            
          }).then(res=>{
            if(res.status===200)
            {
               history("/Cart")
            }
          })
          
      }
      
   
      
     
    
     
    
    var sr="/assets/img/"+ product.product.photo;
    console.log(sr)
  return (
    <div style={{marginTop:"90px",backgroundColor:"white"}}>
       {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Product Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Product Details</li>
          </ol>
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
                    <li><strong>estimated time</strong>{product.product.estimatedTime}</li>
                    <li><strong>Price</strong>{parseInt(product.product.price,10)}$</li>
                    <li><strong>Dimension:</strong>{`${product.product.height}* ${product.product.width}`}</li>
                    <li><strong>count:</strong><input  min="1" max={product.product.quantity} onChange={(e)=>handl(e)} value={count.count} id="count" type="number"/></li>
        
                  </ul>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><button onClick={(e)=>submit(e)} className="btn btn-outline-dark mt-auto" >Add to card</button></div>
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

export default Product_detail
