import {useCookies} from "react-cookie"
import { useHistory } from "react-router-dom"
import loginUser from "../../services/loginUser"

function Login() {
    let [cookie, setCookie, removeCookie] = useCookies([])
    let history = useHistory()

    const loginHandler = (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.currentTarget))

        loginUser(data)
        .then((res) => res.json())
        .then((res) => {
            setCookie("new_token", res.token, {path: "/"})
        })

        history.push("/")
    }

    return (
        <div className="container-register">
            <div className="title-register">Login</div>
            <div className="content-register">
                <form action="#" onSubmit={loginHandler}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" id="password-login" name="password-login" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" id="repPassword-login" name="repPassword-login" placeholder="Confirm your password" required />
                        </div>
                        <div className="input-box">
                            <label>Remember Me</label>
                            <input type="radio" value="Remember Me"/>
                            
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login