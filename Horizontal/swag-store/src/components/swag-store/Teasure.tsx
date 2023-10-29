import { HZTLSWAG } from '../../models/HZTLSWAG.Templates.Model';
import { Field, Link, NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
export type TeasureProps =
HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Teasure.Fields;
const Teasure = (props: TeasureProps) => {  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.Title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a here.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {props.fields.Items.map((item: any, index: number) => (
            <li key={item.name} className="flex flex-col gap-6 xl:flex-row">
              {/* <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={item.imageUrl} alt="" /> */}
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</h3>
                <p className="text-base leading-7 text-gray-600">Sample text</p>
                {/* <p className="text-base leading-7 text-gray-600">{item.Title}</p> */}
                {/* <p className="mt-6 text-base leading-7 text-gray-600">{item.address}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Teasure;