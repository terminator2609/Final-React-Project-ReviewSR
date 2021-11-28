import { NavLink } from "react-router-dom"

function CreateProduct() {

    return (
        <div className="create-product-filters">
            <ul>
                <li>
                    <NavLink to="/createProduct/mobileDevice">Mobile Device</NavLink>
                </li>

                <li>
                    <a>Computers & Components</a>
                    <div className="categories-forms">
                        <ul>
                            <li><NavLink to="/createProduct/createComputer">Computer</NavLink></li>
                            <li><NavLink to="/createProduct/createLaptop">Laptop</NavLink></li>
                            <li><a>Components</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a>Monitor</a>
                </li>

                <li>
                    <a>TV & Accessories</a>
                </li>

                <li>
                    <a>Audio Technical</a>
                </li>

                <li>
                    <a>Photo</a>
                </li>

                <li>
                    <a>Gaming & Periphery</a>
                </li>
            </ul>
        </div>
    )

}

export default CreateProduct