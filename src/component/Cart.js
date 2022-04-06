import React from 'react'
import { NavLink } from 'react-router-dom'
function Cart() {
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
            </tr>
          </thead>
          <tbody>
            <tr className="table-body-row">
              <td className="product-image"><img src="assets/img/product/prod1.jpeg" alt=""/></td>
              <td className="product-name">Strawberry</td>
              <td className="product-price">$85</td>
              <td className="product-quantity"><input type="number" placeholder="0"/></td>
              <td className="product-total">1</td>
            </tr>
            <tr className="table-body-row">
              <td className="product-image"><img src="assets/img/product/prod2.jpeg" alt=""/></td>
              <td className="product-name">Berry</td>
              <td className="product-price">$70</td>
              <td className="product-quantity"><input type="number" placeholder="0"/></td>
              <td className="product-total">1</td>
            </tr>
            <tr className="table-body-row">
              <td className="product-image"><img src="assets/img/product/prod3.jpeg" alt=""/></td>
              <td className="product-name">Lemon</td>
              <td className="product-price">$35</td>
              <td className="product-quantity"><input type="number" placeholder="0"/></td>
              <td className="product-total">1</td>
            </tr>
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
              <td><strong>Subtotal: </strong></td>
              <td>$500</td>
            </tr>
            <tr className="total-data">
              <td><strong>Shipping: </strong></td>
              <td>$45</td>
            </tr>
            <tr className="total-data">
              <td><strong>Total: </strong></td>
              <td>$545</td>
            </tr>
          </tbody>
        </table>
        <div className="cart-buttons">
          <a href="card.html" className="boxed-btn">Update Cart</a>
          <NavLink to="/CheckOut" className="boxed-btn black">Check Out</NavLink>
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
