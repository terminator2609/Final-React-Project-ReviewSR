import Categories from "./categories/categories"
import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9">

            <div className="menu-area">
                <div className="limit-box">
                    <nav className="main-menu">
                        <ul className="menu-area-main">

                            <Categories />

                            <li><NavLink to="/" exact activeClassName="activePage">Home</NavLink></li>
                            <li> <a href="index.html">Last Products</a></li>
                            <li> <a href="index.html">Create Product</a></li>

                            <li> <a className="nav" href="gallery.html">Partners</a> </li>
                            <li><NavLink to="/AboutUs" activeClassName="activePage">About Us</NavLink></li>

                            <li> <a className="nav" href="#contact">My account</a> </li>
                            <li> <NavLink to="/auth/login" exact activeClassName="activePage">Login</NavLink> </li>
                            <li> <NavLink to="/auth/register" activeClassName="activePage">Register</NavLink> </li>
                            <li> <NavLink to="/">Logout</NavLink> </li>

                            <li> <a className="last_manu" href="#"><img src="images/search_icon.png" alt="#" /></a> </li>

                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navigation