import MobileDevice from "./mobileDevice"
import ComputersComponent from "./computersComponenst"
import Monitor from "./monitor"
import TVAndAccessories from "./TVAndAccessories"
import AudioTechnical from "./audioTechnical"
import Photo from "./photo"
import GamingAndPeriphery from "./GamingAndPeriphery"

function Categories() {
    return (
        <li className="catalog"> <a className="catalogTitle">Categories</a>
            <div className="categories">
                <ul>
                    <li>
                        <MobileDevice />
                        <ComputersComponent />
                        <Monitor />
                        <TVAndAccessories />
                        <AudioTechnical />
                        <Photo />
                        <GamingAndPeriphery />
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Categories