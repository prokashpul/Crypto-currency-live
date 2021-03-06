import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import BdContact from "./Components/BdContact/BdContact";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import Coins from "./Components/Coins/Coins";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import UsContact from "./Components/UsContact/UsContact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route
          path="/coins-details/:coinId"
          element={<CoinDetails></CoinDetails>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="bd-address" element={<BdContact></BdContact>}></Route>
          <Route path="us-address" element={<UsContact />}></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
