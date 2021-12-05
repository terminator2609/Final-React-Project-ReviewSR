import Header from "./components/Header/header";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" exact component={Header} />
        <Route to="/AboutUs" component={Header} />
        <Route to="/auth/register" exact component={Header} />
        <Route to="/auth/login" component={Header} />
        <Route to="/createProduct" exact component={Header} />
        <Route to="/createProduct/mobileDevice" exact component={Header} />
        <Route to="/createProduct/createComputer" exact component={Header} />
        <Route to="/createProduct/createLaptop" exact component={Header} />
        <Route to="/createProduct/createComponent" exact component={Header} />
        <Route to="/createProduct/createComponent/createCPU" exact component={Header} />
        <Route to="/createProduct/createComponent/createGPU" exact component={Header} />
        <Route to="/createProduct/createComponent/createMotherboard" exact component={Header} />
        <Route to="/createProduct/createComponent/createSSD" exact component={Header} />
        <Route to="/createProduct/createComponent/createMemory" exact component={Header} />
        <Route to="/createProduct/createComponent/createCase" exact component={Header} />
        <Route to="/createProduct/createComponent/createPowerSupply" exact component={Header} />
        <Route to="/createProduct/createComponent/createHDD" exact component={Header} />
        <Route to="/createProduct/createComponent/createDVD" exact component={Header} />
        <Route to="/createProduct/createComponent/createAudioCard" exact component={Header} />
        <Route to="/createProduct/createComponent/createFANS" exact component={Header} />
        <Route to="/createProduct/createComponent/createCoolers" exact component={Header} />
        <Route to="/createProduct/createComponent/createWIFEAdapters" exact component={Header} />
        <Route to="/createProduct/createComponent/createThermalPaste" exact component={Header} />
        <Route to="/createProduct/createMonitor" exact component={Header} />
        <Route to="/createProduct/createTV" exact component={Header} />
        <Route to="/createProduct/createProject" exact component={Header} />
        <Route to="/createProduct/createVideoScreen" exact component={Header} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
