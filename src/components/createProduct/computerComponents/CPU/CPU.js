import CreateProduct from "../../createProduct"
import IntelSockets from "./Intelsockets"
import { useState } from "react"

function CPU() {

    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create CPU</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select name="brand">
                                    <option>Choose socket!!!</option>
                                    <option>Intel</option>
                                    <option>AMD</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Socket</span>
                                <select name="sockets">
                                </select>
                            </div>

                            <div className="input-box">
                                <span className="details">Core</span>
                                <input type="text" id="name-core" name="name-core" placeholder="Enter name of core" required />
                                <input type="text" id="count-core" name="count" placeholder="Enter count on core: Example: 4 physical / 8 logical" required />
                            </div>
                            <div className="input-box">
                                <span className="details">GRAPHIC CONTROLLER?</span>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <input type="text" id="external-video-card" name="external-video-card" placeholder="Enter info for GRAPHIC CONTROLLER" />
                            </div>

                            <div className="input-box">
                                <span className="details">Cooler</span>
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <span className="details">Cache</span>
                                <input type="text" id="Other-Info" name="Other-Info" placeholder="Enter other cache" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Consumption</span>
                                <input type="text" id="Other-Info" name="Other-Info" placeholder="Enter info for consumption" required />
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

export default CPU