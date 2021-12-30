import CreateProduct from "../createProduct"
import { useHistory } from "react-router-dom"
import GPUService from "../../../services/GPU"

function GPU() {

    const history = useHistory()

    const desHandler = (e) => {

        if (e.target.parentNode.children[2].children[0].style.display === "block") {
            e.target.parentNode.children[2].children[0].style.display = "none"
        } else {
            e.target.parentNode.children[2].children[0].style.display = "block"
        }
    }

    const GPUHandler = (e) => {
        e.preventDefault()

        const formData = Object.fromEntries(new FormData(e.currentTarget))

        GPUService(formData)

        history.push("/")
    }


    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Create GPU</div>
                <div className="content">
                    <form action="#" onSubmit={GPUHandler}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Names</span>
                                <input type="text" id="name" name="name" placeholder="Enter name of brand" />
                                <input type="text" id="model" name="model" placeholder="Enter name of model" />
                            </div>
                            <div className="input-box">
                                <span className="details">Graphic Processor</span>
                                <select name="graphicProcessorBrand">
                                    <option>Nvidia</option>
                                    <option>AMD</option>
                                </select>
                                <input type="text" name="modelProcessor" placeholder="Enter info for model on graphic processor" />
                            </div>
                            <div className="input-box">
                                <span className="details">VRAM</span>
                                <input type="text" id="VRAM" name="VRAM" placeholder="Enter info for VRAM" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Type of memory</span>
                                <input type="text" id="type" name="typeMemory" placeholder="Enter info for type of memory" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Rail size</span>
                                <input type="text" id="type" name="railSize" placeholder="Enter info for rail size" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Size</span>
                                <input type="text" id="type" name="size" placeholder="Enter info for size.Example: ATX" required />
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

export default GPU