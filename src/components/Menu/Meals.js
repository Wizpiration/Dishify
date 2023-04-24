import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Context";

import meal from "./mealData";

export default function Meals(props) {
  const [meals, setMeals] = useState(meal);

  const GlobalState = useContext(CartContext);
  // console.log(GlobalState);
  const dispatch = GlobalState.dispatch;

  const mealsCard = meals.map(
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
            <h1 className="font-bold">${item.price}</h1>
            <button
              onClick={() => dispatch({ type: "ADD", payload: item })}
              className="bg-[#AFD28C]  text-white font-medium px:2 md:px-3  py-1 rounded-md hover:bg-[orange]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )
    )
  );

  return (
    <div className="container my-8 grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-3 place-items-center">
      {mealsCard}
    </div>
  );
}
