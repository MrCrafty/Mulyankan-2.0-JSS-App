import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/20/solid';
type BreadcrumbProps = ComponentProps & {
  fields: {
    data: {
      Breadcrumb: {
        CurrentPage: string;
        ancestors: ancestor[];
      };
    };
  };
};
type ancestor = {
  displayName: string;
  url: {
    path: string;
  };
};
const Breadcrumb = ({ fields }: BreadcrumbProps) => {
  console.log(fields);
  const Ancestors = fields.data.Breadcrumb.ancestors.reverse();
  return (
    <div className="my-2 m-auto container ">
      <ul className="flex list-none flex-row items-center">
        {Ancestors.map((ancestor: ancestor, index: number) => {
          console.log(ancestor);
          //   return (
          if (index == 0) {
            return (
              <li
                key={index}
                className="after:mx-3 flex items-center after:content-['/'] font-semibold text-gray-500 hover:text-gray-800 after:text-gray-400 md:after:text-lg text-base md:text-lg"
              >
                <Link href={ancestor.url.path}>
                  <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                </Link>
              </li>
            );
          }
          return (
            <li
              key={index}
              className="after:mx-3 after:content-['/'] font-semibold text-gray-500 hover:text-gray-800 after:text-gray-400 after:text-lg text-base md:text-lg"
            >
              <Link href={ancestor.url.path}>{ancestor.displayName.toUpperCase()}</Link>
            </li>
          );
          //   );
        })}
        <li className="font-semibold text-gray-500 self-center pointer-events-none text-base md:text-lg">
          <Link href="">{fields.data.Breadcrumb.CurrentPage.toUpperCase()}</Link>
        </li>
      </ul>
    </div>
  );
};
export default Breadcrumb;
