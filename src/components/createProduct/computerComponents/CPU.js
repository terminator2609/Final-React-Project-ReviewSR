import CreateProduct from "../createProduct"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import CPUService from "../../../services/CPU"

function CPU() {

    let [sockets, setSockets] = useState([])
    let [brand, setBrand] = useState("")


    const history = useHistory()

    const CPUHandler = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.currentTarget))

        CPUService(formData)

        history.push("/")
    }

    const desHandler = (e) => {

        if (e.target.parentNode.children[2].children[0].style.display === "block") {
            e.target.parentNode.children[2].children[0].style.display = "none"
        } else {
            e.target.parentNode.children[2].children[0].style.display = "block"
        }
    }



    const nameHandler = (e) => {
        if (e.target.value !== "Choose brand!!!" && e.target.value !== "Other") {
            setBrand(e.target.value)
        } else {
            setBrand("")
        }

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

    const controllerHandler = (e) => {
        const value = e.target.value

        if (value === "Yes") {
            e.target.parentNode.children[2].style.display = "block"
        } else {
            e.target.parentNode.children[2].style.display = "none"
        }
    }



    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create CPU</div>
                <div className="content">
                    <form action="#" onSubmit={CPUHandler}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select name="brand" onChange={nameHandler}>
                                    <option>Choose brand!!!</option>
                                    <option>Intel</option>
                                    <option>AMD</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" value={brand} onChange={nameHandler} />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
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
                                <span className="details">Core</span>
                                <input type="text" id="name-core" name="nameCore" placeholder="Enter name of core" required />
                                <input type="text" id="count-core" name="count" placeholder="Enter count on core: Example: 4 physical / 8 logical" required />
                            </div>
                            <div className="input-box">
                                <span className="details">GRAPHIC CONTROLLER?</span>
                                <select onChange={controllerHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" name="controller" placeholder="Enter info for GRAPHIC CONTROLLER" style={{ display: "none" }} />
                            </div>

                            <div className="input-box">
                                <span className="details">Cooler</span>
                                <select name="cooler">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <span className="details">Cache</span>
                                <input type="text" id="Other-Info" name="cache" placeholder="Enter other cache" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Consumption</span>
                                <input type="text" id="Other-Info" name="consumption" placeholder="Enter info for consumption" required />
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

export default CPU