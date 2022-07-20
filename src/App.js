import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
function App() {
  const [loadingScript, setLoadingscript] = useState(null);
  console.log("hello", loadingScript);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setLoadingscript={setLoadingscript} />}
        />
        <Route
          path="/:productId"
          element={
            <ProductDetails
              loadingScript={loadingScript}
              setLoadingscript={setLoadingscript}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
