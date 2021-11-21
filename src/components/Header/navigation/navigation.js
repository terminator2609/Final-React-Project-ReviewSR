import Categories from "./categories/categories"

function Navigation() {
    return (
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9">

            <div className="menu-area">
                <div className="limit-box">
                    <nav className="main-menu">
                        <ul className="menu-area-main">

                            <Categories />

                            <li className="active"> <a href="index.html">Home</a></li>

                            <li> <a className="nav" href="about.html">About</a> </li>
                            <li> <a className="nav" href="concerts.html">Concerts </a> </li>
                            <li> <a className="nav" href="gallery.html">Gallery</a> </li>
                            <li> <a className="nav" href="contact.html">Contact</a> </li>

                            <li> <a className="nav" href="#contact">login</a> </li>
                            <li> <a className="nav" href="#contact">Register</a> </li>
                            <li> <a className="nav" href="#contact">Logout</a> </li>

                            <li> <a className="last_manu" href="#"><img src="images/search_icon.png" alt="#" /></a> </li>

                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navigation