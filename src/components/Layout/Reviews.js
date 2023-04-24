import Carousel from "./Carousel/Carousel";

export default function Reviews() {
  return (
    <div className="container  p-4 bg-white ">
      <h1 className="text-sec font-bold text-2xl  text-center p-4 bg-white">
        Reviews
      </h1>

      <div className="relative">
        <Carousel />
      </div>
    </div>
  );
}
