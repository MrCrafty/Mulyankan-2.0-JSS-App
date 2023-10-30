import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
type CarouselProps = HZTLSWAG.Templates.Sitecore.templates.swagstore.Carousel.Fields.Carousel;
type CarouselItem = HZTLSWAG.Templates.Sitecore.templates.swagstore.Carousel.Fields.CarouselItem;
const Carousel = ({ fields }: CarouselProps) => {
  console.log('Carousel', fields);

  return (
    <div className="w-screen overflow-hidden py-5 ">
      <div className="text-center font-bold text-3xl ">
        <Text tag="h2" field={fields?.Title}></Text>
      </div>
      <div className="">
        <Slider {...settings}>
          {fields?.Items.map((Carousel: CarouselItem, index: number) => {
            return (
              <div key={index} className="w-1/3 mt-11 px-14 md:px-28">
                <div className="h-48">
                  <Image
                    className="mx-auto h-full"
                    src={Carousel.fields?.Image.value?.src as string}
                    alt={Carousel.fields?.Image.value?.alt as string}
                    width={145}
                    height={110}
                  ></Image>
                </div>
                <div className="mt-5 text-center">
                  <div className="text-lg font-bold">
                    <Text field={Carousel.fields?.Title}></Text>
                  </div>
                  {Carousel.fields?.CTA.value.href != '' ? (
                    <div className="w-full flex justify-center">
                      <Link
                        href={Carousel.fields?.CTA.value?.href as string}
                        className="bg-blue-500 py-1.5 mt-2 px-3 md:py-2.5 md:px-4 rounded-md lg:text-xl text-white hover:bg-blue-700 transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
