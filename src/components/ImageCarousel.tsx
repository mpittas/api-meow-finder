"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fetchImages } from "../api/catApi";

interface Image {
  url: string;
}

const ImageCarousel: React.FC<{ breedId: string | null }> = ({ breedId }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    if (breedId) {
      fetchImages(breedId, 5).then((fetchedImages: Image[]) => {
        setImages(fetchedImages);
      });
    }
  }, [breedId]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.url}
              width={450}
              height={150}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ImageCarousel;
