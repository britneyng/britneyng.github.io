import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
