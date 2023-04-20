import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderAppBar from "./components/Header/AppBar";
import Form from "./pages/Forms/Forms";
import Body from "./components/Body/Body";
import ProductContextProvider from "./context/ProductContext";

function App() {
  const [state, setState] = useState({ isLogging: false, logged: false });
  const [isLogging, setIsLogging] = useState(false);
  const [logged, setLogged] = useState(false);

  const isLoggingSetter = () => {
    setIsLogging(!isLogging);
  };
  const loggedSetter = () => {
    setLogged(!logged);
  };
  console.log(isLogging);

  return (
    <ProductContextProvider>
      <Router>
        <div className="App">
          <HeaderAppBar />
          <Body />
          <Routes>
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </ProductContextProvider>
  );
}
export default App;
