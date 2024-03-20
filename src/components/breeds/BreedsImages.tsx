"use client"
import React, {useEffect, useState} from "react"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {fetchImages} from "@/api/catApi"

interface CatImage {
  url: string
}

const BreedsImages: React.FC<{breedId: string | null}> = ({breedId}) => {
  const [images, setImages] = useState<CatImage[]>([])

  useEffect(() => {
    if (breedId) {
      fetchImages(breedId, 5).then((fetchedImages) => {
        setImages(fetchedImages)
      })
    }
  }, [breedId])

  const settings = {
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full aspect-[4/4] md:aspect-[4/3] relative"
          >
            <Image
              src={image.url}
              alt="Cats logo"
              fill={true}
              style={{objectFit: "cover"}}
              priority={true}
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default BreedsImages
