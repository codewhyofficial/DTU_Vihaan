import React from "react";
import tv3 from "../assets/tv3.jpg";

const Cards = () => {
  return (
    <>
      <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
        <div class="relative mx-6 my-28  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src={tv3} />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"></h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased ">
            Samsung 108 cm (43 Inches) Crystal Vision 4K Ultra HD Smart LED TV
            UA43CUE70AKLXL (Titan Gray)
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none pt-2"
          >
            View Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
