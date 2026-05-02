function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 text-center max-w-lg">
        
        {/* Tailwind v4 Test Yazgysy */}
        <h1 className="text-4xl font-black text-indigo-600 mb-4 italic">
          Tailwind v4 İşleýär! ⚡
        </h1>
        
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          JavaScript bilen <span className="font-bold text-slate-800 underline decoration-indigo-500">Sumbar Computer</span> klonyna başlamaga taýýar. Eger şu dizaýny görýän bolsaň, hemme zat gowy!
        </p>

        {/* Effektli Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:shadow-indigo-200 hover:shadow-2xl active:scale-95 cursor-pointer">
          Taslama Başla
        </button>

      </div>
    </div>
  )
}

export default App
