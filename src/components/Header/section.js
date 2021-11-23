import HomeSection from "./HomePage"
import AboutUS from "./aboutUs"
import Register from "../auth/register"

function Section({ pathName }) {
    
    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                {pathName === "/AboutUs" ? <AboutUS/> : ""}
                {pathName === "/" ? <HomeSection /> : ""}
                {pathName === "/auth/register" ? <Register /> : ""}
            </div>
        </section>
    )
}

export default Section