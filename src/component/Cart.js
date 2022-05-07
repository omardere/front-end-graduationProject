import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Cart() {
  const [car,setCard]=useState({
    car:[],  
    length:""   
  })
  const history = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/card/getProducts/${localStorage.getItem("username")}`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }

    
    }).then(
            (res)=>
            {
              setCard({
                
                car:res.data,
                length:res.data.length
              })
            }
            
          ).catch(e=>
            {
              if(e.response.status===401)
					{
                       alert("you should sign in")
                       history("/")
					   
					}
            })
          
         
      }, []);
    //  console.log(car.car);
    function dlt(e,id1){
      e.preventDefault();
             axios.put(`http://localhost:8080/api/v1/card/deleteProduct/${localStorage.getItem("username")}/${id1}`,null
            ,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }}).then(res=>{
            if(res.status===200)
            {
              setTimeout(function(){
                window.location.reload(false); 
               },1000);	
               alert("product deleted")
            }
          })
          
      }
      function place(e){
        e.preventDefault();
               axios.put(`http://localhost:8080/api/v1/card/activate/${localStorage.getItem("username")}`,null
              ,{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}` 
          }}).then(res=>{
              if(res.status===200)
              {
                setTimeout(function(){
                  window.location.reload(false); 
                 },1000);	
                 alert("place order done")
              }
            })
            
        }
        function up(e,ob){
          e.preventDefault();
          for (const role of ob) {
            axios.put(`http://localhost:8080/api/v1/card/updateProduct/${localStorage.getItem("username")}/${role[0]}/?count=${role[1]}`,null
               ,{
            headers: {
               'Authorization': `Bearer ${localStorage.getItem("token")}` 
           }}).then(res=>{
                if(res.status===200)
                {
                 
                   alert("update product "+ role[0] +" done")
                }
              })
            console.log(`${role[0]}: ${role[1]}`);          }
         // console.log(count)

            //      axios.put(`http://localhost:8080/api/v1/card/activate/${localStorage.getItem("username")}`,null
            //     ,{
            // headers: {
            //   'Authorization': `Bearer ${localStorage.getItem("token")}` 
            // }}).then(res=>{
            //     if(res.status===200)
            //     {
            //       setTimeout(function(){
            //         window.location.reload(false); 
            //        },1000);	
            //        alert("place order done")
            //     }
            //   })
              
          }
    console.log(car.car)
    const [count,setCount]=useState({
      count:[]    
    })
    function handl(e,i){
      const newdata={...count}
     // newdata[e.target.id]=e.target.value;
     newdata[i] = e.target.value;
      
      setCount(newdata);
      console.log(newdata);
    }

    
  var total=0;
  var order = new Map()
  return (
    <div style={{backgroundColor:"white"}}>
      
{/* <!-- search area --> */}
<div className="search-area">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <span className="close-btn"><i className="fas fa-window-close"></i></span>
      <div className="search-bar">
        <div className="search-bar-tablecell">
          <h3>Search For:</h3>
          <input type="text" placeholder="Keywords"/>
          <button type="submit">Search <i className="fas fa-search"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* <!-- end search arewa --> */}

{/* <!-- breadcrumb-section --> */}
<div className="breadcrumb-section breadcrumb-bg">
<div className="container">
  <div className="row">
    <div className="col-lg-8 offset-lg-2 text-center">
      <div className="breadcrumb-text">
        <p>Product</p>
        <h1>Cart</h1>
      </div>
    </div>
  </div>
</div>
</div>
{/* <!-- end breadcrumb section --> */}

{/* <!-- cart --> */}
<div style={{marginTop:"50px"}} className="cart-section mt-150 mb-150">
<div className="container">
  <div className="row">
    <div className="col-lg-8 col-md-12">
      <div className="cart-table-wrap">
        <table className="cart-table">
          <thead className="cart-table-head" >
            <tr className="table-head-row">
              <th className="product-image">Product Image</th>
              <th className="product-name">Name</th>
              <th className="product-price">Price</th>
              <th className="product-quantity">Quantity</th>
              <th className="product-total">Total</th>
              <th className="product-total">Delete</th>

            </tr>
          </thead>
          <tbody>
            
            
       
          {
              car.car.map(c=>
                {
                  var sr="assets/img/"+ c.photo;
                  var co=count[c.id];
                  console.log(count[c.id]);
                  var p=c.price;
                  total+=(p*co);
                  order.set(c.id, c.quantity-count[c.id]);

                  return(
                    <tr className="table-body-row">
              <td className="product-image"><img src={sr} alt=""/></td>
              <td className="product-name">{c.wareHouse.department.name}</td>
              <td className="product-price">${c.price}</td>
              <td className="product-quantity"><input onChange={(e)=>handl(e,c.id)} value={count.count[c.id]} min="1" max={c.quantity}    id="count" type="number" placeholder="0"/></td>
              <td className="product-total">{p*co}</td>
              <td>
               <button onClick={(e)=>dlt(e,c.id)} style={{color: "#E34724",cursor:"pointer",display:"inline-block",margin:"0 5px" ,height:"30px"}} class="fa fa-trash" title="Delete" data-toggle="tooltip"></button>
            </td>
            </tr>
                  )
                })
            }
           
          </tbody>
        </table>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="total-section">
        <table className="total-table">
          <thead className="total-table-head">
            <tr className="table-total-row">
              <th>Total</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
         
            <tr className="total-data">
              <td><strong>Total: </strong></td>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
      

        <div className="cart-buttons">
          <a onClick={(e)=>up(e,order.entries())} style={{color:"white"}} className="boxed-btn">Update Cart</a>
          <a onClick={(e)=>place(e)} style={{color:"white"}}  className="boxed-btn black">Place Order</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* <!-- end cart --> */}

<div className="logo-carousel-section">

</div>

    </div>
  )
}

export default Cart
