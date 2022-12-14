import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" component ={<> <Header /> <Home /> </>} />
          <Route path="/login" component ={<> <Header /> <Login /> </>} />
          <Route path="/checkout" component ={<> <Header /> <Checkout /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
