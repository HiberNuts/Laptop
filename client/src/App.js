//React imports
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//folder imports
import Trail from "./components/trail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Trail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
