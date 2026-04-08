import Plum from './components/Plum'; 
import Navbar from "./components/layout/Navbar";
import Samir from "./components/sections/Samir";
import Connectme from "./components/sections/Connectme";
import Projects from "./components/sections/Project";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Plum />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <Samir />
        <Skills />
        <Projects />
        <Connectme />


      </main>

    </div>
  );
}

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default App;