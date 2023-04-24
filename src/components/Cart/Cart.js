import { RiDeleteBin3Line } from "react-icons/ri";
import { CartContext } from "../context/Context";
import { useContext } from "react";

export default function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const deliverFees = 0.99;

  function handleClick() {
    console.log("Ordering...");
  }

  const cartCard = state.map((item, i) => (
    <div className="flex justify-between" key={item.id}>
      <div>
        <div className="flex border bg-white mt-8 justify-between rounded-lg section-3 p-2 shadow-md">
          <div className="flex gap-4">
            <img
              src={item.img}
              alt="fried rice"
              className="rounded-lg h-[8rem] md:[10rem]"
            />

            <div className=" flex flex-col justify-between">
              <section className="flex justify-between ">
                <h2 className="font-bold">{item.name}</h2>
                <h2 className="font-bold">${item.price}</h2>
              </section>

              <section className="flex justify-between md:gap-3">
                <h2>{item.desc}</h2>
                <h2>
                  ${item.price} X {item.quantity}{" "}
                  {item.quantity > 1 ? "Items" : "Item"}
                </h2>
              </section>

              <section className="flex justify-between">
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  className="text-sec flex items-center gap-2 hover:bg-[red] rounded-lg px-1"
                >
                  <RiDeleteBin3Line color="green" /> <span>Remove</span>
                </button>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2 items-center font-bold">
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? dispatch({ type: "DECREASE", payload: item })
                          : dispatch({ type: "REMOVE", payload: item })
                      }
                    >
                      -
                    </button>
                    <button className="px-2 bg-[#FFF6D6] rounded-md">
                      {item.quantity}
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between">
      {state.length < 1 && (
        <h1 className="font-bold text-2xl">Cart is empty. Add items to cart</h1>
      )}

      <div>{cartCard}</div>

      <div className="flex flex-col max-w-[300px] md:w-[30%] mt-6">
        <section className="flex rounded-lg font-bold gap-1 bg-sec py-3 px-2 my-1 justify-between">
          Summary{" "}
          <span className="flex gap-1">
            <h3>({state.length})</h3>
            {state.length > 1 ? "Items" : "Item"}
          </span>
        </section>

        <section className="flex rounded-lg bg-sec py-2 px-2 my-1 justify-between">
          Subtotal <span>${total.toFixed(2)}</span>
        </section>
        <section className="flex rounded-lg bg-sec py-2 px-2 my-1 justify-between">
          Delivery Charges <span>${deliverFees}</span>
        </section>
        <h1 className="flex rounded-lg bg-sec py-2 px-2 my-1 justify-between mb-6">
          TOTAL <span>${(total + deliverFees).toFixed(2)}</span>
        </h1>
        <button
          onClick={handleClick}
          className="bg-[#AFD28C]  text-white font-medium px-3  py-1 rounded-md hover:bg-[orange]"
        >
          Proceed to pay
        </button>
      </div>
    </div>
  );
}
