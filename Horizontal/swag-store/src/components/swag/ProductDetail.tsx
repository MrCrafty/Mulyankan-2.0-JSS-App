import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';
export type ProductDetailProps =
  HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields.ProductDetail;

const ProductDetail = (props: ProductDetailProps) => {
  return (
    <>
      <h1>{props.fields?.Title.value}</h1>
      <div className="bg-white">
        <div className="pt-6"></div>
      </div>
    </>
  );
};
export default ProductDetail;
