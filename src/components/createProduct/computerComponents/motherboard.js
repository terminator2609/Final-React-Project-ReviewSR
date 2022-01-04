import { useState } from "react"
import CreateProduct from "../createProduct"
import { useHistory } from "react-router-dom"
import motherboardService from "../../../services/motherboard"

function Motherboard() {

    let [sockets, setSockets] = useState([])

    const history = useHistory()

    const motherboardHandler = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.currentTarget))

        motherboardService(formData)

        history.push("/")
    }


    const nameHandler = (e) => {

        let socketSelect = e.currentTarget.parentNode.parentNode.children[2].children[1]

        let otherProcessorSockets = e.currentTarget.parentNode.parentNode.children[2].children[2]

        if (e.target.value === "Intel") {
            setSockets([

                "LGA 1151", "LGA 1200", "LGA 1700"
            ])

            socketSelect.style.display = "block"

            otherProcessorSockets.style.display = "none"

        } else if (e.target.value === "AMD") {
            setSockets([

                "PGA AM1", "PGA AM4"
            ])

            socketSelect.style.display = "block"

            otherProcessorSockets.style.display = "none"

        } else if (e.target.value === "Other") {

            setSockets([])

            socketSelect.style.display = "none"

            otherProcessorSockets.style.display = "block"

        } else {

            setSockets([])

            socketSelect.style.display = "none"

            otherProcessorSockets.style.display = "none"
        }

    }

    const socketsHandler = (e) => {


        if (e.target.value === "Other") {
            e.target.parentNode.children[2].style.display = "block"
        } else {
            e.target.parentNode.children[2].style.display = "none"
        }
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
                <div className="title">Create Motherboard</div>
                <div className="content">
                    <form action="#" onSubmit={motherboardHandler}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Platform</span>
                                <select name="platform" onChange={nameHandler}>
                                    <option>Choose brand!!!</option>
                                    <option>Intel</option>
                                    <option>AMD</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Socket</span>
                                <select name="socket" style={{ display: "none" }} onChange={socketsHandler}>
                                    <option>Choose socket!!!</option>
                                    {sockets.map((a) => <option key={a} value={a}>{a}</option>)}
                                    <option>Other</option>
                                </select>
                                <input type="text" name="otherProcessorSocket" placeholder="Enter info for socket" style={{ display: "none" }} />
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
                                <input type="text" id="Other-Info" name="otherInfo" placeholder="Enter other info" required />
                                <input type="text" id="impression" name="impression" placeholder="Enter your impression" required />
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

export default Motherboard