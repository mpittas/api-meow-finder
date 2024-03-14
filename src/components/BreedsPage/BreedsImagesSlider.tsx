"use client"
import React, {useEffect, useState} from "react"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {fetchImages} from "../../api/catApi"

interface Image {
  url: string
}

const BreedsImagesSlider: React.FC<{breedId: string | null}> = ({breedId}) => {
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    if (breedId) {
      fetchImages(breedId, 5).then((fetchedImages: Image[]) => {
        setImages(fetchedImages)
      })
    }
  }, [breedId])

  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  }

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <div
              key={index}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "450px",
                borderRadius: "0 140px 0 140px",
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default BreedsImagesSlider
