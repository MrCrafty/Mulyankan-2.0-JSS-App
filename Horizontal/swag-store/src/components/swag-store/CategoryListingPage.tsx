import { HZTLSWAG } from '../../models/HZTLSWAG.Templates.Model';

type CategoryDetailProps = HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields.CategoryDetail;

const CategoryListingPage = (props: CategoryDetailProps) => {
    return (
        <>
            {console.log("bbb", props)}
            <div>
                <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                    <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Products in {props.fields?.Title.value}</h2>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CategoryListingPage