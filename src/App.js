import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Main from './Components/Main';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="app">
        {/* Header */}
        <Header />
        <LandingPage />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
