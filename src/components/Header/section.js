import HomeSection from "./HomePage";
import AboutUS from "./aboutUs";
import Register from "../auth/register";
import Login from "../auth/login";
import CreateProduct from "../createProduct/createProduct";
import PhoneForm from "../createProduct/phoneForm";
import ComputerForm from "../createProduct/computerForm"
import LaptopForm from "../createProduct/laptopForm"
import CreateComponent from "../createProduct/createCompComponent"
import CPU from "../createProduct/computerComponents/CPU/CPU"
import GPU from "../createProduct/computerComponents/GPU"
import Motherboard from "../createProduct/computerComponents/motherboard"
import SSD from "../createProduct/computerComponents/SSD"
import Memory from "../createProduct/computerComponents/memory"
import PowerSupply from "../createProduct/computerComponents/powerSupply"
import HDD from "../createProduct/computerComponents/HDD"
import DVD from "../createProduct/computerComponents/DVD"
import AudioCard from "../createProduct/computerComponents/audioCard"
import FANS from "../createProduct/computerComponents/FANS"
import Coolers from "../createProduct/computerComponents/Coolers"
import WIFEAdapter from "../createProduct/computerComponents/WIFEAdapter"
import ThermalPaste from "../createProduct/computerComponents/ThermalPaste"
import Case from "../createProduct/computerComponents/case"
import Monitor from "../createProduct/monitor"

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
        {pathName === "/createProduct/createLaptop" ? <LaptopForm /> : ""}
        {pathName === "/createProduct/createComponent" ? <CreateComponent /> : ""}
        {pathName === "/createProduct/createComponent/createCPU" ? <CPU /> : ""}
        {pathName === "/createProduct/createComponent/createGPU" ? <GPU /> : ""}
        {pathName === "/createProduct/createComponent/createMotherboard" ? <Motherboard /> : ""}
        {pathName === "/createProduct/createComponent/createSSD" ? <SSD /> : ""}
        {pathName === "/createProduct/createComponent/createMemory" ? <Memory /> : ""}
        {pathName === "/createProduct/createComponent/createPowerSupply" ? <PowerSupply /> : ""}
        {pathName === "/createProduct/createComponent/createHDD" ? <HDD /> : ""}
        {pathName === "/createProduct/createComponent/createDVD" ? <DVD /> : ""}
        {pathName === "/createProduct/createComponent/createAudioCard" ? <AudioCard /> : ""}
        {pathName === "/createProduct/createComponent/createFANS" ? <FANS /> : ""}
        {pathName === "/createProduct/createComponent/createCoolers" ? <Coolers /> : ""}
        {pathName === "/createProduct/createComponent/createWIFEAdapters" ? <WIFEAdapter /> : ""}
        {pathName === "/createProduct/createComponent/createThermalPaste" ? <ThermalPaste /> : ""}
        {pathName === "/createProduct/createComponent/createCase" ? <Case /> : ""}
        {pathName === "/createProduct/createMonitor" ? <Monitor /> : ""}
      </div>
    </section>
  );
}

export default Section;
