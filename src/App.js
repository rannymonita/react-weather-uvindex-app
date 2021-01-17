import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";
import orangeBG from "./asset/orangeBG.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div styles={{ backgroundImage: `url(${orangeBG})` }}>
          <h1> Weather App </h1>
          <Weather />

          <Footer />
        </div>
      </div>
    </div>
  );
}
