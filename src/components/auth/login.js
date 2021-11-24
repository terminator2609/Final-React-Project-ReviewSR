function Login() {
    return (
        <div className="container-register">
            <div className="title-register">Login</div>
            <div className="content-register">
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter your username" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password" required />
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

export default Login