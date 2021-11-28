import CreateProduct from "./createProduct"


function CreateComponent() {
    return (
        <div>
            <CreateProduct />
            <div className="container-create-mobile-device">
                <div className="title">Choose Component!!!</div>
                <div className="content">
                    <form action="#">
                        <div className="details-box">
                            <div className="input-box">
                                <span className="details">Component</span>
                                <select>
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