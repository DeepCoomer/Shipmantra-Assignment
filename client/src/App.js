import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CalculateDistance from "./Pages/CalculateDistance";
import Home from "./Pages/Home";
import ShipperData from "./Pages/ShipperData";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/calculatedistance" element={<CalculateDistance />}></Route>
          <Route exact path="/shipperdata" element={<ShipperData />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
