import "./App.css";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-br from-neutral-900 to-black  overflow-auto font-[Poppins] z-0 scroll-smooth">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section>
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
