import "./App.scss";
import TokenSelect from "./components/TokenSelect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TokenSelect />
        </div>
      </header>
    </div>
  );
}

export default App;
