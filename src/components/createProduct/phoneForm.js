import CreateProduct from "./createProduct"
import createMobileDevice from "../../services/mobileDeviceService"
import {useHistory} from "react-router-dom"

function PhoneForm() {
    const history = useHistory()

    const mobilePhoneHandler = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.currentTarget))

        createMobileDevice(formData)

        history.push("/")

    }

    const desHandler = (e) => {


        if (e.target.parentNode.children[2].children[0].style.display === "block") {
            e.target.parentNode.children[2].children[0].style.display = "none"
        } else {
            e.target.parentNode.children[2].children[0].style.display = "block"
        }
    }


    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create Mobile Device</div>
                <div className="content">
                    <form action="#" onSubmit={mobilePhoneHandler}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Type</span>
                                <select name="type">
                                    <option>Phone</option>
                                    <option>Tablet</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select name="brand">
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>Xiaomi</option>
                                    <option>Huawei</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" required />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Release</span>
                                <input type="date" id="releaseDate" name="releaseDate" />
                            </div>
                            <div className="input-box">
                                <span className="details">Body</span>
                                <input type="text" id="dimension" name="dimension" placeholder="Enter information for dimensions" />
                                <input type="text" id="weight" name="weight" placeholder="Enter information for weight" />
                                <input type="text" id="build" name="build" placeholder="Enter information for materials on the build. Example: Front:..., Back:...., Sideways:....." />
                                <input type="text" id="sim" name="sim" placeholder="Enter information for sim" />
                            </div>
                            <div className="input-box">
                                <span className="details">Display</span>
                                <input type="text" id="typeDisplay" name="typeDisplay" placeholder="Enter type on display" />
                                <input type="text" id="size" name="size" placeholder="Enter size on display" />
                                <input type="text" id="resolution" name="resolution" placeholder="Enter resolution on display" />
                            </div>
                            <div className="input-box">
                                <span className="details">Hardware</span>
                                <input type="text" id="Chipset" name="Chipset" placeholder="Enter chipset" />
                                <input type="text" id="CPU" name="CPU" placeholder="Enter CPU" />
                                <input type="text" id="GPU" name="GPU" placeholder="Enter GPU" />
                                <input type="text" id="memory" name="memory" placeholder="Enter memory.Example: 5 RAM , 6 RAM" />
                                <input type="text" id="storage" name="storage" placeholder="Enter storage.Example: 64/128/256 GB" />
                            </div>
                            <div className="input-box">
                                <span className="details">OS</span>
                                <input type="text" id="nameOS" name="nameOS" placeholder="Enter name of OS" />
                                <input type="text" id="version" name="version" placeholder="Enter version" />
                            </div>
                            <div className="input-box">
                                <span className="details">Main Camera/s</span>
                                <input type="text" id="count" name="count" placeholder="Enter count of cameras" />
                                <input type="text" id="quad" name="quad" placeholder="Enter quad on cameras" />
                                <input type="text" id="features" name="features" placeholder="Enter features of cameras" />
                                <input type="text" id="video" name="video" placeholder="Enter video resolution & fps.Example: 4K/30ps" />
                            </div>
                            <div className="input-box">
                                <span className="details">Selfi Camera</span>
                                <input type="text" id="typeSelfi" name="typeSelfi" placeholder="Enter type of camera" />
                                <input type="text" id="featuresSelfi" name="featuresSelfi" placeholder="Enter features of cameras" />
                                <input type="text" id="videoSelfi" name="videoSelfi" placeholder="Enter video resolution & fps.Example: 4K/30ps" />
                            </div>
                            <div className="input-box">
                                <span className="details">Sound</span>
                                <input type="text" id="typeSound" name="typeSound" placeholder="Enter type of sound" />
                                <label>3.5mm jack ?</label>
                                <select name="jack">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Battery</span>
                                <input type="text" id="typeBattery" name="typeBattery" placeholder="Enter type of battery and capacity" />
                                <input type="text" id="charging" name="charging" placeholder="Enter info for charging" />
                            </div>
                            <div className="input-box">
                                <span className="details">Communication</span>
                                <input type="text" id="WLAN" name="WLAN" placeholder="Enter info on WLAN" />
                                <input type="text" id="bluetooth" name="bluetooth" placeholder="Enter info for bluetooth" />
                                <input type="text" id="GPS" name="GPS" placeholder="Enter info for GPS" />
                                <label>NFC ?</label>
                                <select name="NFC">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <label>Radio ?</label>
                                <select name="radio">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <input type="text" id="USB" name="USB" placeholder="Enter info for USB" />
                            </div>
                            <div className="input-box">
                                <span className="details">Features</span>
                                <input type="text" id="sensors" name="sensors" placeholder="Enter info for sensors" />
                                <input type="text" id="other" name="other" placeholder="Enter info for other features" />
                            </div>
                            <div className="input-box">
                                <span className="details">MISC</span>
                                <input type="text" id="color" name="color" placeholder="Enter info for colors" />
                            </div>
                            <div className="input-box">
                                <span className="details">Description</span>
                                <input type="text" id="OtherInfo" name="OtherInfo" placeholder="Enter other info" />
                                <input type="text" id="impression" name="impression" placeholder="Enter your impression" />
                            </div>
                        </div>

                        <div className="gender-details">

                            <span className="gender-title">Partners</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <input type="checkbox" id="dot-1" onClick={desHandler} />
                                    <span className="gender">Desktop.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkDesktop" name="linkDesktop" id="link" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                                <label htmlFor="dot-2">
                                    <input type="checkbox" id="dot-2" onClick={desHandler} />
                                    <span className="gender">Ozone.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkOzone" name="linkOzone" id="linkOzone" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                                <label htmlFor="dot-3">
                                    <input type="checkbox" id="dot-3" onClick={desHandler} />
                                    <span className="gender">Gplay.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkGplay" name="linkGplay" id="linkGplay" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                                <label htmlFor="dot-4">
                                    <input type="checkbox" id="dot-4" onClick={desHandler} />
                                    <span className="gender">Ardes.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkArdes" name="linkArdes" id="linkArdes" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default PhoneForm