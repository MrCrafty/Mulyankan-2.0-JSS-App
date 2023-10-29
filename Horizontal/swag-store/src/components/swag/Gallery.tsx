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
                <div className="mx-auto mt-3 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-8 justify-center">
                  <Image
                    key={standaloneImg} // You should add a key prop when rendering a list of elements
                    src={standaloneImg.url}
                    alt={standaloneImg.fields.Alt}
                    width={300}
                    height={300}
                    className="col-start-2"
                  />
                </div>
              );
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
                    src={item.url}
                    alt={item.fields.Alt}
                    width={300}
                    height={300}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
