import tasty from "../Assets/tasty.png";
import wallet from "../Assets/wallet.png";
import driving from "../Assets/driving.png";

export default function Features() {
  return (
    <section className="container bg-white px-18 py-10 mx-auto flex items-center justify-around gap-5 w-full">
      <div className="flex flex-col items-center">
        <div>
          <img src={tasty} alt="tasty" />
        </div>
        <h2 className="font-bold">Tasty Food</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit a.</p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={wallet} alt="tasty" />
        </div>
        <h2 className="font-bold">Affordable</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit a.</p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={driving} alt="tasty" />
        </div>
        <h2 className="font-bold">Fast Delivery</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit a.</p>
      </div>
    </section>
  );
}
