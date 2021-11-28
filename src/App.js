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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
