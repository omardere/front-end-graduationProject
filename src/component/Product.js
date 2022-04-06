import React from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div style={{marginTop:"30px",backgroundColor:"white"}}>
         <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              
                <div className="col mb-5">
                    <div className="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src="assets/img/product/prod1.jpeg" width="450" height="250" alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">Special Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                <span className="text-muted text-decoration-line-through">$20.00</span>
                                $15.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><NavLink className="btn btn-outline-dark mt-auto" to="/Product_detail">View</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src="assets/img/product/prod2.jpeg" width="450" height="250" alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">Sale Item</h5>
                                {/* <!-- Product price--> */}
                                <span className="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><NavLink className="btn btn-outline-dark mt-auto" to="/Product_detail">View</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src="assets/img/product/prod3.jpeg" width="450" height="250" alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">Popular Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                $40.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><NavLink className="btn btn-outline-dark mt-auto" to="/Product_detail">View</NavLink></div>
                        </div>
                    </div>
                </div>
                <div className="col mb-5">
                    <div className="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src="assets/img/product/prod4.jpeg" width="450" height="250" alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">Sale Item</h5>
                                {/* <!-- Product price--> */}
                                <span className="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><NavLink className="btn btn-outline-dark mt-auto" to="/Product_detail">View</NavLink></div>
                        </div>
                    </div>
                </div>
                
                <div className="col mb-5">
                    <div className="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src="assets/img/product/prod6.jpeg" width="450" height="250" alt="..." />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">Special Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                <span className="text-muted text-decoration-line-through">$20.00</span>
                                $18.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><NavLink className="btn btn-outline-dark mt-auto" to="/Product_detail">View</NavLink></div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Product
