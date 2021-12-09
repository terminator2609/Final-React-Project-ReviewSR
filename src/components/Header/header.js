import Navigation from "./navigation/navigation"
import Section from "./section"
import {useState} from "react"

function Header({location, match}) {
    let pathname = location.pathname

    let [auth, isAuth] = useState({isAuth: false})

    return (
        <header>
            <div className="header-top">
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                    </div>
                                </div>
                            </div>
                            <Navigation/>
                        </div>
                    </div>
                </div>
                <Section pathName={pathname} authChecker = {isAuth}/>
            </div>
        </header>
    )
}

export default Header