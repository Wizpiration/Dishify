import { useState, useContext } from "react";
import meal from "../Menu/mealData";
import { CartContext } from "../context/Context";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  const [search, setSearch] = useState("");
  const GlobalState = useContext(CartContext);
  // console.log(GlobalState);
  const dispatch = GlobalState.dispatch;

  const searchMeals = meal
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    })
    .map(
      (item) => (
        (item.quantity = 2),
        (
          <div
            key={item.id}
            className="p-3 flex flex-col bg-white max-w-[300px] rounded-lg shadow-md"
          >
            <div>
              <img src={item.img} alt="food" className="rounded-lg" />
            </div>

            <h1 className="font-bold py-1">{item.name}</h1>

            <div className="bg-sec rounded-sm text my-2">
              <h2>Description:</h2>
              <h2>{item.desc}</h2>
            </div>

            <span>{item.rating}</span>

            <div className="flex items-center justify-between mt-4">
              <h1 className="font-bold">$ {item.price}</h1>
              <button
                onClick={() => dispatch({ type: "ADD", payload: item })}
                className="bg-[#AFD28C]  text-white font-medium px-3  py-1 rounded-md hover:bg-[orange]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      )
    );
  return (
    <div className="flex flex-col mb-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <input
          className="p-2 items-center"
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch color="d2fca8" size="20px" />
      </div>
      <div className="container my-8 grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-3 place-items-center">
        {searchMeals}
      </div>
    </div>
  );
}
