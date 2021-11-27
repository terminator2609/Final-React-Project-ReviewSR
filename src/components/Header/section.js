import HomeSection from "./HomePage";
import AboutUS from "./aboutUs";
import Register from "../auth/register";
import Login from "../auth/login";
import CreateProduct from "../createProduct/createProduct";
import PhoneForm from "../createProduct/phoneForm";
import ComputerForm from "../createProduct/computerForm"

function Section({ pathName }) {
  return (
    <section className="slider_section">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        {pathName === "/AboutUs" ? <AboutUS /> : ""}
        {pathName === "/" ? <HomeSection /> : ""}
        {pathName === "/auth/register" ? <Register /> : ""}
        {pathName === "/auth/login" ? <Login /> : ""}
        {pathName === "/createProduct" ? <CreateProduct /> : ""}
        {pathName === "/createProduct/mobileDevice" ? <PhoneForm /> : ""}
        {pathName === "/createProduct/createComputer" ? <ComputerForm /> : ""}

      </div>
    </section>
  );
}

export default Section;
