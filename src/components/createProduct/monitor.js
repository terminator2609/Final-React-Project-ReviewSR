import CreateProduct from "./createProduct"

function Monitor() {

    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create Monitor</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select>
                                    <option>Dell</option>
                                    <option>Acer</option>
                                    <option>LG</option>
                                    <option>AOC</option>
                                    <option>Asus</option>
                                    <option>HP</option>
                                    <option>MSI</option>
                                    <option>BenQ</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>

                            <div className="input-box">
                                <span className="details">Display</span>
                                <input type="text" id="size" name="size" placeholder="Enter info for size" required />
                                <input type="text" id="time-reaction" name="time-reaction" placeholder="Enter info for time on reaction" required />
                                <input type="text" id="type" name="type" placeholder="Type on LCD Matrix" required />

                                <input type="text" id="type-lighting" name="type-lighting" placeholder="Enter info for type on lighting" />

                                <input type="text" id="display-cover" name="display-cover" placeholder="Enter info for display cover" />

                                <input type="text" id="resolution" name="resolution" placeholder="Enter info for resolution" />

                                <input type="text" id="frequency of refreshment" name="frequency of refreshment" placeholder="Enter info for frequency of refreshment" />

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
            </div >
        </div >

    )
}

export default Monitor