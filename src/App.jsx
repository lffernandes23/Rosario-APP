import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./screens/Home";
import Terco from "./screens/Terco";
import Rosario from "./screens/Rosario";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/terco"
          element={<Terco />}
        />

        <Route
          path="/rosario"
          element={<Rosario />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;