import Plum from './components/Plum'; // Ensure the path to your Plum file is correct

function App() {
  return (
    /* We use 'relative' so the content stays on top of the 'fixed' background */
    <div className="relative min-h-screen text-white">
      
      {/* The background component */}
      <Plum />

      {/* Your Page Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-black tracking-tighter">
          PROJECT BLACK
        </h1>
        <p className="mt-4 text-gray-400">
          The branches should now be growing on a solid black background.
        </p>
      </main>

    </div>
  );
}

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default App;