import CreateProduct from "./createProduct"
import { useHistory } from "react-router-dom"

function CreateComponent() {
    let history = useHistory()

    const chooser = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)

        let chooseComponent = formData.get("chooseComponent")

        switch (chooseComponent) {
            case "CPU":
                history.push("/createProduct/createComponent/createCPU")
                break

            case "GPU":
                history.push("/createProduct/createComponent/createGPU")
                break

            case "Motherboard":
                history.push("/createProduct/createComponent/createMotherboard")
                break
            case "SSD":
                history.push("/createProduct/createComponent/createSSD")
                break
            case "Memory":
                history.push("/createProduct/createComponent/createMemory")
                break
            case "Power Supply":
                history.push("/createProduct/createComponent/createPowerSupply")
                break
            case "HDD":
                history.push("/createProduct/createComponent/createHDD")
                break
            case "DVD":
                history.push("/createProduct/createComponent/createDVD")
                break
            case "Audio card":
                history.push("/createProduct/createComponent/createAudioCard")
                break
            case "FANS":
                history.push("/createProduct/createComponent/createFANS")
                break
            case "Coolers":
                history.push("/createProduct/createComponent/createCoolers")
                break
            case "WIFE Adapters":
                history.push("/createProduct/createComponent/createWIFEAdapters")
                break
            case "Thermal paste":
                history.push("/createProduct/createComponent/createThermalPaste")
                break
        }
    }


    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Choose Component!!!</div>
                <div className="content">
                    <form action="#" onSubmit={chooser}>
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Component</span>
                                <select id="chooseComponent" name="chooseComponent">
                                    <option>CPU</option>
                                    <option>GPU</option>
                                    <option>Motherboard</option>
                                    <option>SSD</option>
                                    <option>Memory</option>
                                    <option>Power Supply</option>
                                    <option>HDD</option>
                                    <option>DVD</option>
                                    <option>Audio card</option>
                                    <option>FANS</option>
                                    <option>Coolers</option>
                                    <option>WIFE Adapters</option>
                                    <option>Thermal paste</option>
                                </select>
                            </div>

                        </div>
                        <div className="button">
                            <input type="submit" value="Choose" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateComponent