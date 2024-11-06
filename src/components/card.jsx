import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ANIMATIONS } from "../lib/constants";
import { PRODUCTS } from "../lib/constants";
import Carousel from "./Carousel";

const Card = ({ imgs, colors, name, description, link }) => {
  return (
    <div className="max-w-sm bg-[whitesmoke] border border-gray-200 rounded-lg shadow hover:shadow-lg md:w-[24%]">
      <div className="w-full h-[300px]">
        <Carousel imgs={imgs} />
      </div>
      <div className="flex gap-3 items-center px-4">
        {colors?.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="h-[30px] w-[30px] rounded-full border-[3px] border-[white] shadow-lg"
          />
        ))}
        {colors && <p>Any color</p>}
      </div>
      <div className={`p-5 ${!colors ? "mt-7" : ""}`}>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link
          to={`/${link.toLowerCase()}`}
          className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2c2c2c] rounded-lg hover:bg-[#5e5d5d] focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
