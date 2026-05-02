import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-8 text-center mt-20">
        <h1 className="text-4xl font-bold text-slate-800">
          Sumbar Computer Klony Başlaýar!
        </h1>
        <p className="mt-4 text-slate-500">
          Bu ýerde harytlar we kategoriýalar bolar.
        </p>
      </main>
    </div>
  )
}

export default App;
