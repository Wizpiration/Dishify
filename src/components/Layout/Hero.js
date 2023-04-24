import { Fragment } from "react";
import heroImage from "./../Assets/HeroImage.png";
import CustomButton from "../UI/CustomButton";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="relative w-full h-full">
      <div className="flex justify-end ">
        <img
          src={heroImage}
          alt="Food"
          className="h-[50%] md:w-[40%] w-[50%]"
        />
      </div>

      <div className="absolute top-[10px] md:top-[10rem]">
        <h1 className="text-[black] font-bold text-2xl">
          The <span className="text-[orange]">Stomach</span>
        </h1>
        <h1 className="text-[black] font-bold text-2xl">Delight.</h1>
        <p className="pb-1 md:py-6">
          Satisfy your deepest cravings without breaking the Bank
        </p>

        <CustomButton>
          <div className="flex items-center justify-around gap-2">
            Place order <AiOutlineArrowRight />
          </div>
        </CustomButton>
      </div>
    </section>
  );
}
