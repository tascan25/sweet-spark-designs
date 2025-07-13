import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { WholeAppContext } from "@/context/store";
import { Button } from "./button";

function CartList({ image, price, id, name, quantity }) {
  const { handleDeleteFromCart } = useContext(WholeAppContext);

  return (
    <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl bg-[#fff9f0] shadow-md space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Left: Image & Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="items-center justify-center flex flex-row flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-gray-200 overflow-hidden">
          {image}
        </div>
        <div className="flex-1 min-w-0">
          <span className="block text-lg sm:text-xl font-semibold text-gray-800 truncate">
            {name}
          </span>
          <span className="block text-sm sm:text-base text-gray-600 mt-1 italic font-semibold">
            Qty x {quantity}
          </span>
        </div>
      </div>

      {/* Right: Price & Delete */}
      <div className="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
        <span className="text-base sm:text-lg font-bold text-gray-700 whitespace-nowrap">
          ₹{price.toFixed(2)}
        </span>
        <Button
          variant="destructive"
          className="p-2 rounded-full hover:bg-red-600 transition ml-4 flex-shrink-0"
          onClick={() => handleDeleteFromCart(id)}
        >
          <MdDelete className="text-white" size={20} />
        </Button>
      </div>
    </li>
  );
}

export default CartList;
