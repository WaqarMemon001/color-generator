import React, { useState } from "react";
import Values from "values.js";
import SingleColour from "./SingleColour";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="color"
            value={color}
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ffffe"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index, hex) => {
          return (
            <SingleColour
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
        <footer>
        <h4>By waqar</h4>
      </footer>
      </section>
      
    </>
  );
}

export default App;
