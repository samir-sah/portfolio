import Plum from './components/Plum'; // Ensure the path to your Plum file is correct
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    /* We use 'relative' so the content stays on top of the 'fixed' background */
    <div className="relative min-h-screen text-white">
      
      {/* The background component */}
      <Plum />

      {/* Your Page Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <Hero />

      </main>

    </div>
  );
}

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default App;