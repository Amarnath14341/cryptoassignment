import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer   from './components/HomeContainer';
import WalletContainer from './components/WalletContainer';

function App() {
  return (
    <Router>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/wallet" component={WalletContainer} />
    </Router>
  );
}

export default App;
