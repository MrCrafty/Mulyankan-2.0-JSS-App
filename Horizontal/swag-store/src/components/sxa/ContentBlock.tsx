import {
  Text,
  Field,
  withDatasourceCheck,
  LinkField,
  ImageField,
  Image,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';
type ContentBlockProps = ComponentProps & {
  fields: {
    description: Field<string>;
    headingText: Field<string>;
    cta1: LinkField;
    imageOnLeft: Field<boolean>;
    image: ImageField;
  };
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  // const ContentImg = 'https://frank-corgi-nice.ngrok-free.app' + fields?.image;
  return (
    <div className={`container px-4 w-full sm:px-0 sm:mx-auto py-[40px] lg:py-[60px]`}>
      <div
        className={`row justify-center items-center flex gap-5 md:gap-10 ${
          fields?.imageOnLeft?.value
            ? 'flex-col-reverse md:flex-row-reverse'
            : 'flex-col md:flex-row'
        } `}
      >
        <div className="w-full items-center md:w-1/2 flex flex-col justify-around">
          <div className="text-justify md:text-start">
            <Text
              tag="h2"
              className="contentTitle font-bold text-xl md:text-2xl"
              field={fields?.headingText}
            />
            <RichText
              tag="p"
              field={fields?.description}
              className=" mt-1 lg:mt-5 my-5 text-sm md:text-base"
            />
          </div>
          {fields.cta1.value.href != '' ? (
            <div className="w-full flex md:justify-start justify-center">
              <Link
                href={fields?.cta1?.value}
                className="bg-blue-500 py-1.5 px-3 md:py-2.5 md:px-4 rounded-md lg:text-xl text-white hover:bg-blue-700 transition-all"
              >
                Learn More
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="w-full md:w-1/2 my-auto">
          <Image field={fields.image} className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
