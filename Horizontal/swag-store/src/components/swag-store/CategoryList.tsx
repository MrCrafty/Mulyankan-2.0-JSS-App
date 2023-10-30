import React from 'react';
import { HZTLSWAG } from '../../models/HZTLSWAG.Templates.Model';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';

type CategoryListProps =
  HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields.CategoryListing;

const ProductList = (props: CategoryListProps) => {
  return (
    <div>
      <section
        aria-labelledby="category-heading"
        className="pt-12 pb-12 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
      >
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <Text
            field={props?.fields?.title}
            tag="h2"
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          />
        </div>
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {props.fields?.categoryList.map((itm: any, index: number) => {
                  return (
                    <a
                      key={index}
                      href={itm.url}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <Image
                          src={itm?.fields.Thumbnail.value.src}
                          alt=""
                          width={200}
                          height={200}
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      ></span>
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {itm?.fields.Title.value}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
