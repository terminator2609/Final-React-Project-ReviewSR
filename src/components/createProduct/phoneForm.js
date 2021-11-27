import CreateProduct from "./createProduct"

function PhoneForm() {
    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create Mobile Device</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Categories</span>
                                <select>
                                    <option>Phone</option>
                                    <option>Tablet</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select>
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>Xiaomi</option>
                                    <option>Huawei</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Release</span>
                                <input type="date" id="release-date" name="release-date" />
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
                                <input type="text" id="type" name="type" placeholder="Enter type on display" required />
                                <input type="text" id="size" name="size" placeholder="Enter size on display" required />
                                <input type="text" id="resolution" name="resolution" placeholder="Enter resolution on display" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Hardware</span>
                                <input type="text" id="Chipset" name="Chipset" placeholder="Enter chipset" required />
                                <input type="text" id="CPU" name="CPU" placeholder="Enter CPU" required />
                                <input type="text" id="GPU" name="GPU" placeholder="Enter GPU" required />
                                <input type="text" id="memory" name="memory" placeholder="Enter memory.Example: 5 RAM , 6 RAM" required />
                                <input type="text" id="storage" name="storage" placeholder="Enter storage.Example: 64/128/256 GB" required />
                            </div>
                            <div className="input-box">
                                <span className="details">OS</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of OS" required />
                                <input type="text" id="version" name="version" placeholder="Enter version" required />
                                <input type="text" id="GPU" name="GPU" placeholder="Enter GPU" required />
                                <input type="text" id="memory" name="memory" placeholder="Enter memory.Example: 5 RAM , 6 RAM" required />
                                <input type="text" id="storage" name="storage" placeholder="Enter storage.Example: 64/128/256 GB" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Main Camera/s</span>
                                <input type="text" id="count" name="count" placeholder="Enter count of cameras" required />
                                <input type="text" id="quad" name="quad" placeholder="Enter quad on cameras" required />
                                <input type="text" id="features" name="features" placeholder="Enter features of cameras" required />
                                <input type="text" id="video" name="video" placeholder="Enter video resolution & fps.Example: 4K/30ps" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Selfi Camera</span>
                                <input type="text" id="type" name="type" placeholder="Enter type of camera" required />
                                <input type="text" id="features" name="features" placeholder="Enter features of cameras" required />
                                <input type="text" id="video" name="video" placeholder="Enter video resolution & fps.Example: 4K/30ps" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Sound</span>
                                <input type="text" id="type" name="type" placeholder="Enter type of sound" required />
                                <label>3.5mm jack ?</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Battery</span>
                                <input type="text" id="type" name="type" placeholder="Enter type of battery and capacity" required />
                                <input type="text" id="charging" name="charging" placeholder="Enter info for charging" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Communication</span>
                                <input type="text" id="WLAN" name="WLAN" placeholder="Enter info on WLAN" required />
                                <input type="text" id="bluetooth" name="bluetooth" placeholder="Enter info for bluetooth" required />
                                <input type="text" id="GPS" name="GPS" placeholder="Enter info for GPS" required />
                                <label>NFC ?</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <label>Radio ?</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <input type="text" id="USB" name="USB" placeholder="Enter info for USB" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Features</span>
                                <input type="text" id="sensors" name="sensors" placeholder="Enter info for sensors" required />
                                <input type="text" id="other" name="other" placeholder="Enter info for other features" required />
                            </div>
                            <div className="input-box">
                                <span className="details">MISC</span>
                                <input type="text" id="color" name="color" placeholder="Enter info for colors" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Description</span>
                                <input type="text" id="Other-Info" name="Other-Info" placeholder="Enter other info" required />
                                <input type="text" id="impression" name="impression" placeholder="Enter your impression" required />
                            </div>
                        </div>

                        <div className="gender-details">
                            <input type="checkbox" name="desktop.bg" id="dot-1" />
                            <input type="checkbox" name="ozone.bg" id="dot-2" />
                            <input type="checkbox" name="gplay.bg" id="dot-3" />
                            <input type="checkbox" name="ardes.bg" id="dot-4" />

                            <span className="gender-title">Partners</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Desktop.bg</span>
                                    <input type="text" name="link" id="link" placeholder="Enter link to product on site on my partner" style={{ display: "none" }} />
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Ozone.bg</span>
                                    <input type="text" name="link" id="link" placeholder="Enter link to product on site on my partner" style={{ display: "none" }} />
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Gplay.bg</span>
                                    <input type="text" name="link" id="link" placeholder="Enter link to product on site on my partner" style={{ display: "none" }} />
                                </label>
                                <label htmlFor="dot-4">
                                    <span className="dot four"></span>
                                    <span className="gender">Ardes.bg</span>
                                    <input type="text" name="link" id="link" placeholder="Enter link to product on site on my partner" style={{ display: "none" }} />
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