import React, { Fragment } from 'react'
import './Navbar.css'
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export function Navbar() {


    return (
        <Fragment>
            <nav className="navbar">
                <span><IoMenu /></span>
                <div className="navbar-brand">
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/05/legal-rumble-2-logo.png" alt="" />
                    <div className="nav_links">
                        <img src="https://edzorblaw.com/wp-content/uploads/2023/01/secure-icon-png-30.png" alt="" /> <p>Premium+</p>
                        <p>Blogs</p>
                        <img src="https://edzorblaw.com/wp-content/uploads/2023/08/Asset-144.png" alt="" /> <p>Podcast</p>
                    </div>
                </div>

                <div className="nav_downloads">
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/02/pngegg-1.png" alt="" />
                    <img src="https://edzorblaw.com/wp-content/uploads/2023/02/pngegg.png" alt="" />
                    <button>Login</button>
                    <button>Signup</button>
                </div>

                <div className="nav_downloads_res">
                    <p><FaCloudArrowDown />Brochure</p>
                    <p><FaPhoneSquareAlt />Call</p>
                    <p><FaUserCircle />Login</p>
                </div>


            </nav>
        </Fragment>
    )
}
