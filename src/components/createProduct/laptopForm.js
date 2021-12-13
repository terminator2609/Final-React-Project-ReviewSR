import CreateProduct from "./createProduct"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import laptopService from "../../services/laptop"

function LaptopForm() {

    let [brand, setBrand] = useState("")

    const history = useHistory()
    
    const laptopHandler = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.currentTarget))

        laptopService(formData)

        history.push("/")

    }


    const nameHandler = (e) => {
        if (e.target.value !== "Choose brand!!!" && e.target.value !== "Other") {
            setBrand(e.target.value)
        } else {
            setBrand("")
        }
    }


    const typeHandler = (e) => {
        console.log(e.target.value)

        if (e.target.value === "Other") {
            e.target.parentNode.children[2].children[0].style.display = "inline"
        } else {
            e.target.parentNode.children[2].children[0].style.display = "none"
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
                <div className="title">Create Laptop</div>
                <div className="content">
                    <form action="#" onSubmit={laptopHandler}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <select onChange={nameHandler}>
                                    <option>Choose brand!!!</option>
                                    <option>Microsoft</option>
                                    <option>Asus</option>
                                    <option>Acer</option>
                                    <option>Lenovo</option>
                                    <option>Dell</option>
                                    <option>Apple</option>
                                    <option>Fujitsu</option>
                                    <option>Huawei</option>
                                    <option>Toshiba</option>
                                    <option>Gigabyte</option>
                                    <option>HP</option>
                                    <option>MSI</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Type</span>
                                <select name="typeForm" onChange={typeHandler}>
                                    <option>Choose type!!!</option>
                                    <option>Notebook</option>
                                    <option>Ultrabook</option>
                                    <option>2-in-1 convertible</option>
                                    <option>Workstation</option>
                                    <option>Other</option>
                                </select>
                                <div className="input-box">
                                    <input type="text" id="otherType" name="otherType" placeholder="Enter info for other type" style={{ display: "none" }} />
                                </div>
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
                                <label>External GPU ?</label>
                                <select name="externalGPU" onChange={externalGPUHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" id="external-video-card" name="externalVideoCard" placeholder="Enter info for external video card" style={{ display: "none" }} />
                                <label>HDD?</label>
                                <select name="HDD?" onChange={HDDHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" id="HDD" name="HDD" placeholder="Enter info for HDD" style={{ display: "none" }} />
                                <label>SSD?</label>
                                <select name="SSD?" onChange={SSDHandler}>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <input type="text" id="SSD" name="SSD" placeholder="Enter info for SSD" style={{ display: "none" }} />
                                <input type="text" id="power-supply" name="powerSupply" placeholder="Enter brand, model, cert, watts on PSU" />

                                <input type="text" id="battery" name="battery" placeholder="Enter info for battery" />
                            </div>

                            <div className="input-box">
                                <span className="details">Interface</span>
                                <input type="text" id="interface" name="interface" placeholder="Enter info for the interface" required />
                                <input type="text" id="connection" name="connection" placeholder="Enter info for the connection" required />
                                <input type="text" id="weight" name="weight" placeholder="Enter info for the weight" required />
                                <input type="text" id="display" name="display" placeholder="Enter info for the display" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Description</span>
                                <input type="text" id="OtherInfo" name="OtherInfo" placeholder="Enter other info" required />
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
            </div >
        </div >

    )
}

export default LaptopForm