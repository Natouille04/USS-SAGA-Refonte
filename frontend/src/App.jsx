import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import Archive from "./pages/archive.jsx";
import Details from "./pages/details.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}