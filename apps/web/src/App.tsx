import "./App.css";
import { photographersState } from "@letshang/customHooks";

function App() {
  const { photographers } = photographersState();
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {photographers &&
        photographers.map((item) => (
          <div style={{ margin: 10 }}>
            <img
              src={item?.src?.landscape}
              style={{ width: 200, height: 200, objectFit: "cover" }}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
