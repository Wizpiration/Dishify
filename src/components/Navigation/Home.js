import { Fragment } from "react";
import Hero from "../Layout/Hero";
import Features from "../Layout/Features";
import Menu from "../Menu/Menu";
import Reviews from "../Layout/Reviews";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Menu />
      <Reviews />
    </Fragment>
  );
}
