import Image from 'next/image';
import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';
export type GalleryProps =
  HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields.Gallery;

const Gallery = (props: GalleryProps) => {
  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          {/* Image gallery */}
          {/* standalone image */}
          {props.fields?.Images.map((standaloneImg, standaloneIndex) => {
            if (standaloneIndex == 0) {
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  key={standaloneIndex}
                  className="mx-auto mt-3 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-8 justify-center"
                >
                  <Image
                    // You should add a key prop when rendering a list of elements
                    src={standaloneImg.url as string}
                    alt={standaloneImg?.name as string}
                    width={300}
                    height={300}
                    className="col-start-2"
                  />
                </div>
              );
            } else {
              return <></>;
            }
          })}
          {/* coloumn grid */}
          <div className="mx-auto mt-3 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-8">
            {props.fields?.Images.map((item, index) => {
              console.log('Image - ', item);
              if (index !== 0) {
                return (
                  <Image
                    key={index} // You should add a key prop when rendering a list of elements
                    src={item.url as string}
                    alt={item?.name}
                    width={300}
                    height={300}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
