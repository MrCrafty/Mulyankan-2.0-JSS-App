import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { HZTLSWAG } from '../../models/HZTLSWAG.Templates.Model';
import Link from 'next/link';
export type HeaderProps =
  HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.GlobalComponents.Fields.Header;
const Header = (props: HeaderProps) => {
  return (
    <>
      <nav aria-label="Top">
        <div className="bg-black bg-opacity-1 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href="/">
                    <span className="sr-only">Horizontal Swag Store</span>
                    <NextImage field={props?.fields?.logo} className="h-12 w-auto" />
                  </Link>
                </div>
                <div className="hidden h-full lg:flex">
                  <div className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {props?.fields?.headerLinks.map((itm2, index) => {
                        console.log(itm2);
                        return (
                          <Link
                            href={itm2.url}
                            key={index}
                            className="flex items-center text-sm font-medium text-white hover:text-rose-300"
                          >
                            {itm2.fields.Title.value}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center lg:hidden">
                  <button type="button" className="-ml-2 p-2 text-white">
                    <span className="sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      ></path>
                    </svg>
                  </button>
                  <a href="#" className="ml-2 p-2 text-white">
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>
                <div className="flex flex-1 items-center justify-end">
                  <a href="#" className="hidden text-sm font-medium text-white lg:block">
                    Search
                  </a>
                  <div className="flex items-center lg:ml-8">
                    <a href="#" className="p-2 text-white lg:hidden">
                      <span className="sr-only">Help</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" className="hidden text-sm font-medium text-white lg:block">
                      Help
                    </a>
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-6 w-6 flex-shrink-0 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          ></path>
                        </svg>
                        <span className="ml-2 text-sm font-medium text-white">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
