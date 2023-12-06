/* eslint-disable no-unused-vars */
import React from "react";
import '../App.css'

export default function StatsCard ({icon,title,details}) {
    return (
        <>
          <div className="card">
            <div>
                <img src= {icon}/>
            </div>
                <h3>{title}</h3>
                <p>{details}</p>
            </div> 
        </>
    )
}