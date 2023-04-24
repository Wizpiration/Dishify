import { Link } from "react-router-dom";
export default function MenuHeader() {
  return (
    <div className="container">
      <h1 className="text-sec  font-bold text-2xl  text-center p-4">
        Our Menu
      </h1>

      <div className="rounded-xl flex bg-[#AFD28C] justify-between gap-0 px-6 max-w-[800px] mx-auto py-2  hover:bg-[orange]">
        <Link to="/home">Dessert</Link>
        <Link to="/home">Drinks</Link>
        <Link to="/home">Platter</Link>
        <Link to="/home">Snacks</Link>
      </div>
    </div>
  );
}
