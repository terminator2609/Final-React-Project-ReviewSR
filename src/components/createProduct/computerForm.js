import CreateProduct from "./createProduct"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import computerService from "../../services/computer"

function ComputerForm() {
    let [brand, setBrand] = useState("")

    const history = useHistory()

    const computerHandler = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.currentTarget))

        computerService(formData)

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
    }

    const externalGPUHandler = (e) => {

       if(e.target.value === "Yes") {
        e.target.parentNode.children[6].style.display = "inline"
       } else {
        e.target.parentNode.children[6].style.display = "none"
       }
    }

    const HDDHandler = (e) => {

        if(e.target.value === "Yes") {
         e.target.parentNode.children[9].style.display = "inline"
        } else {
         e.target.parentNode.children[9].style.display = "none"
        }
     }

     const SSDHandler = (e) => {

        if(e.target.value === "Yes") {
         e.target.parentNode.children[12].style.display = "inline"
        } else {
         e.target.parentNode.children[12].style.display = "none"
        }
     }


    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create Computer</div>
                <div className="content">
                    <form action="#" onSubmit={computerHandler}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select onChange={nameHandler}>
                                    <option>Choose brand!!!</option>
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
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" value={brand} onChange={nameHandler} />
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
                                <select name="externalGPU" onChange={externalGPUHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" id="external-video-card" name="externalVideoCard" placeholder="Enter info for external video card" style={{display: "none"}}/>
                                <label>HDD?</label>
                                <select name="HDD?" onChange={HDDHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" id="HDD" name="HDD" placeholder="Enter info for HDD" style={{display: "none"}}/>
                                <label>SSD?</label>
                                <select name="SSD?" onChange={SSDHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" id="SSD" name="SSD" placeholder="Enter info for SSD" style={{display: "none"}} />
                                <input type="text" id="power-supply" name="powerSupply" placeholder="Enter brand, model, cert, watts on PSU" />
                            </div>
                            <div className="input-box">
                                <span className="details">Interface</span>
                                <input type="text" id="interface" name="interface" placeholder="Enter info for the interface" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Description</span>
                                <input type="text" id="otherInfo" name="otherInfo" placeholder="Enter other info" required />
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
                                        <input type="text" className="linkDesktop" name="linkDesktop" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                                <label htmlFor="dot-2">
                                    <input type="checkbox" id="dot-2" onClick={desHandler}/>
                                    <span className="gender">Ozone.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkOzone" name="linkOzone" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                                <label htmlFor="dot-3">
                                    <input type="checkbox" id="dot-3" onClick={desHandler}/>
                                    <span className="gender">Gplay.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkGplay" name="linkGplay" placeholder="Enter link" style={{ display: "none" }} />
                                    </div>
                                </label>
                                <label htmlFor="dot-4">
                                    <input type="checkbox" id="dot-4" onClick={desHandler}/>
                                    <span className="gender">Ardes.bg</span>
                                    <div className="input-box">
                                        <input type="text" className="linkArdes" name="linkArdes" placeholder="Enter link" style={{ display: "none" }} />
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

export default ComputerForm