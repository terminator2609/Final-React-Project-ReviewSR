import { useHistory } from "react-router-dom"
import registerUser from "../../services/RegisterUser"
import { useEffect } from "react"

function Register() {

    let history = useHistory()

    const RegisterHandler = (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.currentTarget))

        registerUser(data)
        
        history.push("/auth/login")
    }

    return (
        <div className="container-register">
            <div className="title-register">Registration</div>
            <div className="content-register">
                <form action="#" onSubmit={RegisterHandler}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your number" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" id="repPassword" name="repPassword" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register