import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Topnavbar.css'
 class TopNavBar extends Component {
    render() {
        return (
            <div>
             <div>
               <div className="topnav">
                 <nav className="navbar navbar-expand-sm bg-dark sticky-top border rounded-sm">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="active "  to="/dashboard" >Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/form" >Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orders" >Orders</Link>
                        </li>
                        </ul>
                        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                <img id='logoimg' src='./LOGO_NEW.jpg' alt='bkisan logo'/> 
                                </li>
                        </ul>
                        </div>
                 </nav>
                </div>
            </div>
            </div>
        )
    }
}
export default TopNavBar