import "./App.css";
import Card from "./components/Card";
import starryNight from "./assets/starryNight.jpg";
import monaLisa from "./assets/monalisa.jpg";

function App() {
  let obj1 = {
    name: "The Starry Night",
    painter: "Van Gogh",
    image: starryNight,
  };
  let obj2 = {
    name: "Mona Lisa",
    painter: "Leonardo da Vinci",
    image: monaLisa,
  };

  return (
    <>
      <p className="mb-10 text-xl font-bold">Famous Painting Cards</p>
      <div className="flex gap-6">
        <Card abc={obj1} />
        <Card abc={obj2} />
      </div>
    </>
  );
}

export default App;
