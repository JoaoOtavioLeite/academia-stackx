import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="app">
      <Header onNavigate={setRoute} />
      <main className="container">
        {route === "home" && <Home />}
        {route === "courses" && <Courses />}
        {route === "about" && <About />}
        {route === "contact" && <Contact />}
      </main>
      <footer className="footer">© {new Date().getFullYear()} Academia StackX</footer>
    </div>
  );
}
