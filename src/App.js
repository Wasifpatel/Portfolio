import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Qualifications /> */}
        <Experience />
        <Work/>
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
