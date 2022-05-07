import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaWpforms,FaTable } from 'react-icons/fa';
import { BiGridAlt } from "react-icons/bi";
import { BsFillPersonFill,BsMessenger } from "react-icons/bs";


function Sidebar() {
  return (
    <div>
          <aside id="sidebar" className="sidebar">

          <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: <NavLink style={{color:"black"}} to="/">Products</NavLink>,
                itemId: '/dashboard',
                
                // you can use your own custom Icon component as well
                // icon is optional

                elemBefore: () => <BiGridAlt name="inbox" />,

              },
              {
                title: 'Forms',
                itemId: '/forms',
                elemBefore: () => <FaWpforms name="forms" />,
                subNav: [
                  {
                    title: <NavLink  style={{color:"black"}} to="/FE">Employee</NavLink>,
                    itemId: '/forms/employee',
                  },
                  {
                    title: <NavLink style={{color:"black"}}  to="/FSub">Sublayer</NavLink>,
                    itemId: '/form/sublayer',
                  },
                  {
                    title: <NavLink style={{color:"black"}}  to="/FC">Customer</NavLink>,
                    itemId: '/form/customer',
                  },
                  {
                    title: <NavLink style={{color:"black"}} to="/FS">Store</NavLink>,
                    itemId: '/forms/store',
                  },
                  {
                    title:  <NavLink style={{color:"black"}} to="/FP">Product</NavLink>,
                    itemId: '/form/product',
                  },
                  {
                    title: <NavLink style={{color:"black"}} to="/FM">Material</NavLink>,
                    itemId: '/forms/material',
                  },
                  {
                    title: <NavLink style={{color:"black"}} to="/FD">Department</NavLink>,
                    itemId: '/forms/material',
                  }
                ],
              },
              {
                title: 'Tables',
                itemId: '/tables',
                elemBefore: () => <FaTable name="tables" />,
                subNav: [
                  {
                    title: <NavLink  style={{color:"black"}} to="/TE">Employee</NavLink>,
                    itemId: '/tables/employee',
                  },
                  {
                    title: <NavLink style={{color:"black"}}  to="/TSublayer">Sublayer</NavLink>,
                    itemId: '/tables/sublayer',
                  },
                  {
                    title: <NavLink style={{color:"black"}} to="/TStore">Store</NavLink>,
                    itemId: '/tables/store',
                  },
                  {
                    title:  <NavLink style={{color:"black"}} to="/VP">Product</NavLink>,
                    itemId: '/tables/product',
                  },
                  {
                    title: <NavLink style={{color:"black"}} to="/TM">Material</NavLink>,
                    itemId: '/tables/material',
                  }
                ],
              },
              {
                title: <NavLink style={{color:"black"}} to="/UP">Profile</NavLink>,
                itemId: '/profile',
                
                // you can use your own custom Icon component as well
                // icon is optional

                elemBefore: () => <BsFillPersonFill name="inbox" />,

              },
              {
                title: <NavLink style={{color:"black"}} to="/PageC">Contact</NavLink>,
                itemId: '/contact',
                
                // you can use your own custom Icon component as well
                // icon is optional

                elemBefore: () => <BsMessenger name="contact" />,

              },
            ]}
          />
  </aside>
  {/* <!-- End Sidebar--> */}

    </div>
  )
}

export default Sidebar
