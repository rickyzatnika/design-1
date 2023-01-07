/* eslint-disable react-hooks/rules-of-hooks */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Animations } from "../../variants/animations";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const images = [
  {
    id: 1,
    url: "/carousel/asset1.jpg",
  },
  {
    id: 2,
    url: "/carousel/asset2.jpg",
  },
  {
    id: 3,
    url: "/carousel/asset3.jpg",
  },
];

const Slider = () => {
  return (
    <div className=" w-full h-full relative overflow-hidden">
      <Carousel
        ssr={true}
        responsive={responsive}
        additionalTransfrom={0}
        arrows={false}
        centerMode={false}
        autoPlay
        autoPlaySpeed={3000}
        draggable
        focusOnSelect={true}
        customTransition="all .8s ease"
        infinite
        infiniteScroll
        keyBoardControl
        pauseOnHover
        slidesToSlide={1}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        className="w-full h-full lg:min-h-[55vh] my-2 lg:my-10 "
      >
        {images.map((image) => (
          <motion.div
            variants={Animations.picture}
            key={image.id}
            className="flex justify-center items-center "
          >
            <Image
              src={image.url}
              alt=""
              width="900"
              height="300"
              priority
              style={{
                width: "auto",
                height: "auto",
                objectFit: "contain",
                objectPosition: "right",
              }}
              className="p-6 lg:p-24"
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
