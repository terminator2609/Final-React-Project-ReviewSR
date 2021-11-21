import Navigation from "./navigation/navigation"
import Section from "./section"

function Header() {
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
                <Section/>
            </div>
        </header>
    )
}

export default Header