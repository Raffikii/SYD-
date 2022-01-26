import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("You clicked on Me");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large "
      >
        historique de consomation
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
