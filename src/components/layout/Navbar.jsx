const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Bölümi */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-black text-indigo-600 tracking-tighter">
              SUMBAR<span className="text-slate-800">CLONE</span>
            </span>
          </div>

          {/* Gözleg (Search) Bölümi - Pro Developer Stili */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Harytlary gözläň..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              />
            </div>
          </div>

          {/* Ikonkalar we Ulanyjy Menýusy */}
          <div className="flex items-center gap-6">
            <div className="cursor-pointer text-slate-600 hover:text-indigo-600 transition-colors">
              <span className="text-sm font-medium">Hasabym</span>
            </div>
            <div className="relative cursor-pointer group">
              <div className="bg-indigo-50 p-2.5 rounded-full group-hover:bg-indigo-100 transition-all">
                {/* Sebet Ikonkasy (Ýönekeýje tekst hökmünde) */}
                <span className="text-indigo-600 font-bold">🛒</span>
              </div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
