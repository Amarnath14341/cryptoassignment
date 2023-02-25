import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import HomeContainer   from './components/HomeContainer';
import WalletContainer from './components/WalletContainer';

function App() {
  return (
    <Router>
        <Routes path="/" exact component={HomeContainer} />
        <Routes path="/wallet" component={WalletContainer} />
    </Router>
  );
}

export default App;
