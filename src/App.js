import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import WalletContainer from "./components/WalletContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/wallet" element={<WalletContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
