import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { data } from "./data";

function App() {
  return (
    <>
      <Header />
      <main>
        {data.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </main>
    </>
  );
}

export default App;
