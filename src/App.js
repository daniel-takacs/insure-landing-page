import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
        <Footer />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
