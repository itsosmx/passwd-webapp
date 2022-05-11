import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Privacy } from "./routes";
import "./bin/global.style.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Privacy />} path="privacy" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
