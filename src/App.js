import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
