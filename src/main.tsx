import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/wash-club" element={<App />} />{" "}
      {/* Glöm inte att fixa detta vid deploy på annat än github */}
    </Routes>
  </BrowserRouter>
);
