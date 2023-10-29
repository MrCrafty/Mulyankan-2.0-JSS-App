// Global
import { HZTLSWAG } from '.generated/templates/models/HZTLSWAG.Templates.Model';
import { Field, Link, NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type FooterProps =
  HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields.Footerdata;
const Footer = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = {
    value: props.fields?.copyrightText.value.replace('$year', currentYear),
  } as Field<string>;

  return (
    <>
      <div className="bg-black">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-12 xl:gap-8">
            <div className="space-y-12 col-span-2 md:gap-8 md:space-y-0">
              <NextImage field={props.fields.logo} />
            </div>
            <div className="space-y-12 col-start-5 col-span-2 md:gap-8 md:space-y-0">
              <div className="text-sm font-medium text-white">
                <Text field={props.fields.list1Title} tag="h3" />
              </div>
              <ul role="list" className="mt-6 space-y-6">
                {props.fields.list1Links.map((itm: any, index: number) => {
                  console.log(itm);
                  return (
                    <li className="text-sm text-white" key={index}>
                      <Link field={itm.fields.link} />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-12 col-span-2 md:gap-8 md:space-y-0">
              <div className="text-sm font-medium text-white">
                <Text field={props.fields.list2Title} tag="h3" />
              </div>
              <ul role="list" className="mt-6 space-y-6">
                {props.fields.list2Links.map((itm2: any, index: number) => {
                  console.log(itm2);
                  return (
                    <li className="text-sm text-white" key={index}>
                      <Link field={itm2.fields.link} />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-12 col-span-2 md:gap-8 md:space-y-0">
              <div>
                <div className="text-sm font-medium text-white">
                  <Text field={props.fields.list1Title} tag="h3" />
                </div>
                <ul role="list" className="mt-6 space-y-6">
                  {props.fields.socialMediaLinks.map((itm: any, index: number) => {
                    console.log(itm);
                    return (
                      <li className="text-sm text-white" key={index}>
                        <Link field={itm.fields.link} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 py-10">
            <div className="text-sm text-white">
              &copy;<Text field={copyrightText} tag="p" /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
