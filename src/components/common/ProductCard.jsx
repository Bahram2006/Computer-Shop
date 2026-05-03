import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-md p-4 flex flex-col items-center group hover:shadow-xl transition-all relative">
      
      {/* Üstündäki ikonkalar (Deňeşdirmek, Halanlarym) */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-600">
          <FiHeart size={16} />
        </button>
        <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-200">
          <FiSearch size={16} />
        </button>
      </div>

      {/* Haryt suraty */}
      <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name} 
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* Haryt maglumatlary */}
      <div className="text-center w-full">
        <h3 className="text-[12px] font-semibold text-gray-700 h-10 overflow-hidden line-clamp-2 mb-2 leading-tight">
          {product.name}
        </h3>
        
        <div className="text-[#d32f2f] font-black text-sm mb-3">
          {product.price} <span className="text-[10px]">TMT</span>
        </div>

        {/* Sebede goş düwmesi */}
        <button className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-[10px] font-bold py-2 rounded-sm flex items-center justify-center gap-2 transition-colors uppercase">
          <FiShoppingCart size={14} />
          Sebede goş
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
