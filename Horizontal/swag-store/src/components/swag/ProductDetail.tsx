import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';
export type ProductDetailProps =
  HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields.ProductDetail;

const ProductDetail = (props: ProductDetailProps) => {
  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <Text field={props?.fields?.Price} tag="h3" className="text-3xl" />
          <Text field={props?.fields?.Content} tag="p" className="text-xl" />
          <button className="bg-primary py-3 px-2 text-white pointer-events-none">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
