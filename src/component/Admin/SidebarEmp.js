import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaWpforms,FaTable,FaChartArea,FaFileImage } from 'react-icons/fa';
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
              {
                title: <NavLink style={{color:"black"}} to="/chart">Chart</NavLink>,
                itemId: '/chart',
                
                // you can use your own custom Icon component as well
                // icon is optional

                elemBefore: () => <FaChartArea name="chart" />,

              },
              {
                title: <NavLink style={{color:"black"}} to="/detc">Detection</NavLink>,
                itemId: '/detect',
                
                // you can use your own custom Icon component as well
                // icon is optional

                elemBefore: () => <FaFileImage name="det" />,

              },
            ]}
          />
  </aside>
  {/* <!-- End Sidebar--> */}

    </div>
  )
}

export default Sidebar
