import CreateProduct from "../createProduct"

function FANS() {

    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create FANS</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Size(MM)</span>
                                <input type="text" id="size" name="size" placeholder="Enter info for size in mm" />
                            </div>
                            <div className="input-box">
                                <span className="details">Revolutions</span>
                                <input type="text" id="revolutions" name="revolutions" placeholder="Enter info for revolutions" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Level on noise</span>
                                <input type="text" id="level-noise" name="level-noise" placeholder="Enter info for level on noise" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Connector</span>
                                <input type="text" id="connector" name="connector" placeholder="Enter info for connector" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Air flow</span>
                                <input type="text" id="air-flow" name="air-flow" placeholder="Enter info for air flow" required />
                            </div>
                            <div className="input-box">
                                <span className="details">RGB</span>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
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

export default FANS