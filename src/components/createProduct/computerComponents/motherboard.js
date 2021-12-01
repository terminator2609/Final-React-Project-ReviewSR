import CreateProduct from "../createProduct"

function Motherboard() {

    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create Motherboard</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Platform</span>
                                <select>
                                    <option>Intel</option>
                                    <option>AMD</option>
                                    <option>Other</option>
                                </select>
                                <input type="text" id="platform" name="platform" placeholder="Enter info for other platform" />
                            </div>
                            <div className="input-box">
                                <span className="details">Socket</span>
                                <select>
                                </select>
                                <input type="text" id="socket" name="socket" placeholder="Enter info for other socket" />
                            </div>
                            <div className="input-box">
                                <span className="details">Audio Controller</span>
                                <input type="text" id="audio" name="audio" placeholder="Enter info for audio controller" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Internet Controller</span>
                                <input type="text" id="internet" name="internet" placeholder="Enter info for internet controller" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Size</span>
                                <input type="text" id="motherboard" name="motherboard" placeholder="Enter info for size.Example: ATX" required />
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

export default Motherboard