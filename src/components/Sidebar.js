import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Sidebar = ({children}) => {
const {pathname} = useLocation();

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:"fa-solid fa-gauge",

        },
        {
            path:"/inventory",
            name:"Inventory",
            icon:"fa-solid fa-tag",

        },
        
        {
            path:"/orders",
            name:"Orders",
            icon:"fa-solid fa-pager",

        },
        {
            path:"/shipping",
            name:"Shipping",
            icon:"fa-solid fa-truck",

        },

        {
            path:"/channel",
            name:"Channel",
            icon:"fa-solid fa-share-nodes",

        },
    ]
  return (
    <div className="container">
        
        <div className="sidebar">
            {/* <div className="top_section">
                <h1 className="logo">
                    <div className="bars">

                    </div>
                </h1>
            </div> */}
            {menuItem.map((item,index)=>(
                <Link  style={{ textDecoration: "none" }}to={item.path} key={index}  activeclassName="active" >
                    <div className="link">
                    <div className="icon">
                    <i className={item.icon}></i>
                        
                    </div>
                    <div className="link_text">
                        {item.name}
                    </div>
                    </div>
                </Link>
            ))}
        </div>
        <main>
           
            {children}</main>
    </div>
  )
}
