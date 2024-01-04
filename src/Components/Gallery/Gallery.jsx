"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import styles from "./Gallery.module.css";
const SliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545917992-dea2d782ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80",
  },
];
const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesLength = SliderData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev == slidesLength ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev == 0 ? slidesLength - 1 : prev));
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Gallery</h2>
        <div className={styles.body}>
          <FaArrowCircleLeft className={styles.leftAction} />
          <FaArrowCircleRight className={styles.rightAction} />
          {SliderData.map((slide, index) => {
            return (
              <>
                <figure>
                  <Image
                    src={slide.image}
                    width="1440"
                    height="600"
                    objectFit="cover"
                  />
                </figure>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
