import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Privacy } from "./routes";
import "./config/global.style.css";
import { Footer } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Privacy />} path="privacy" />
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
