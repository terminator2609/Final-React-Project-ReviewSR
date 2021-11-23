function Login() {
    return (
        <div class="container-register">
            <div class="title-register">Login</div>
            <div class="content-register">
                <form action="#">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Username</span>
                            <input type="text" placeholder="Enter your username" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="text" placeholder="Enter your email" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Password</span>
                            <input type="text" placeholder="Enter your password" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div class="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login