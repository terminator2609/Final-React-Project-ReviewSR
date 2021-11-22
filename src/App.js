import Loader from "./components/loader";
import Header from "./components/Header/header";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Loader />

      <Switch>
        <Route to="/" exact component={Header} />
        <Route to="/AboutUs" component={Header} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
