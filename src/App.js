import ListItems from "./components/ListItems";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* Das ist ein Kommentar */}

      {/* In HTML ist das valide?! */}
      <img src="https://i.imgur.com/3FX40AW.jpeg" />

      {/* Wie könnte das gefixt werden? */}
      <ListItems />

      {/* Was ist hier kaputt? */}
      <p className="red">Why does this not work?</p>
    </div>
  );
}
