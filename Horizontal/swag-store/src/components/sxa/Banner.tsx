import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
// import Image from 'next/image';

import Link from 'next/link';
import React from 'react';
import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';
type BannerProps = HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields.Banner;
const Banner = ({ fields }: BannerProps) => {
  console.log('b', fields);
  const BannerImg =
    // fields?.image.value?.src ||
    fields?.image.value?.src?.replace('https://xm1.cm', 'https://frank-corgi-nice.ngrok-free.app');
  console.log('Big', BannerImg);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <NextImage
        className="min-w-fit h-screen"
        src={BannerImg}
        height={1000}
        width={2000}
        alt={fields?.image.value?.src as string}
      ></NextImage>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-auto w-full overflow-hidden  bg-black/[0.6]">
        <div className=" flex flex-col gap-10 justify-center items-center h-full w-full md:w-3/4 container mx-auto py-auto px-4">
          <div className="font-bold text-4xl text-white">
            <Text tag="h2" field={fields?.title}></Text>
          </div>
          <div className="font-normal text-lg text-justify text-white">
            <Text tag="p" field={fields?.description}></Text>
          </div>
          {/* <Link></Link> */}
          {fields?.ctaButton.value.href != '' ? (
            <div className="w-full flex justify-center">
              <Link
                href={fields?.ctaButton?.value?.href as string}
                className="bg-blue-500 py-1.5 px-3 md:py-2.5 md:px-4 rounded-md lg:text-xl text-white hover:bg-blue-700 transition-all"
              >
                Learn More
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default Banner;
