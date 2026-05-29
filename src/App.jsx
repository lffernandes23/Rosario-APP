import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./screens/Home";
import Terco from "./screens/Terco";
import Rosario from "./screens/Rosario";
import Guia from "./screens/Guia";

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

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

        <Route
          path="/guia"
          element={<Guia />}
        />

      </Routes>

    </AnimatePresence>

  );

}

function App() {

  return (

    <BrowserRouter>

      <AnimatedRoutes />

    </BrowserRouter>

  );

}

export default App;