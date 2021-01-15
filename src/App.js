import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Main from './Components/Main';


function App() {
  return (
    <div className="app">
        {/* Header */}
        <Header />
        <LandingPage />
        <Main />
    </div>
  );
}

export default App;
