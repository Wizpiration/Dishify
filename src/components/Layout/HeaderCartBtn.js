import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../context/Context";

export default function HeaderCartBtn({ size }) {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  return (
    <Link to="/cart">
      <button className="flex text-white items-center justify-between gap-1 bg-sec rounded-lg px-3 py-1 cursor-pointer hover:bg-[orange]">
        <span>Cart</span>
        <span>
          <AiOutlineShoppingCart />
        </span>
        <span className="px-1 rounded-md bg-primary text-[orange] hover:text-sec font-bold">
          {state.length}
        </span>
      </button>
    </Link>
  );
}
