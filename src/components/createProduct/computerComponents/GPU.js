import CreateProduct from "../createProduct"

function GPU() {

    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create GPU</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select>
                                    <option>Desktop.bg</option>
                                    <option>Asus</option>
                                    <option>Acer</option>
                                    <option>Lenovo</option>
                                    <option>Dell</option>
                                    <option>Apple</option>
                                    <option>Fujitsu</option>
                                    <option>Huawei</option>
                                    <option>G:RIGS</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Suitable for?</span>
                                <input type="text" id="suitable" name="suitable" placeholder="Enter info for suitable" />
                            </div>
                            <div className="input-box">
                                <span className="details">Hardware</span>
                                <input type="text" id="motherboard" name="motherboard" placeholder="Enter motherboard model and brand" required />
                                <input type="text" id="CPU" name="CPU" placeholder="Enter CPU brand and model" required />
                                <input type="text" id="RAM" name="RAM" placeholder="Enter info for RAM" required />
                                <label>External video card?</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <input type="text" id="external-video-card" name="external-video-card" placeholder="Enter info for external video card" />
                                <label>HDD?</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <input type="text" id="HDD" name="HDD" placeholder="Enter info for HDD" />
                                <label>SSD?</label>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <input type="text" id="SSD" name="SSD" placeholder="Enter info for SSD" />
                                <input type="text" id="power-supply" name="power-supply" placeholder="Enter brand, model, cert, watts on PSU"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Interface</span>
                                <input type="text" id="interface" name="interface" placeholder="Enter info for the interface" required />
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

export default GPU