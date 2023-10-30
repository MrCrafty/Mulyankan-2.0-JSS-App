import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';

type AccordionProps =
  HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.AccordionTemp.Fields.Accordion;

type AccordionItem =
  HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.AccordionTemp.Fields.AccordionItem;
const Accordion = ({ fields }: AccordionProps) => {
  console.log('Accrodiondata', fields);

  return (
    <div className="divide-y container mx-auto py-5 divide-gray-200 border-t">
      {fields?.accordionItems.map((Item: AccordionItem, index: number) => (
        <Disclosure as="div" key={index}>
          {({ open }) => (
            <>
              <h3>
                <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                  <span
                    className={[
                      open ? 'text-indigo-600' : 'text-gray-900',
                      'text-sm font-medium',
                    ].join('')}
                  >
                    <Text field={Item.fields?.title}></Text>
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon
                        className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <PlusIcon
                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel as="div">
                {/* <ul role="list">
                  {detail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}
                <RichText field={Item.fields?.description}></RichText>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
