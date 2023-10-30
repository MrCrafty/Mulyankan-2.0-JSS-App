import { HZTLSWAG } from 'src/models/HZTLSWAG.Templates.Model';
// import { Tab } from '@headlessui/react';
// import clsx from 'clsx';
// import { Fragment } from 'react';

type TabsProps = HZTLSWAG.Templates.Sitecore.templates.swagstore.Tabs.Fields.Tabs;
const Tabs = ({ fields }: TabsProps) => {
  console.log(fields);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <h2 className="text-3xl text-center">{fields?.Title.value}</h2>
      {/* <Tab.Group as="div">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex space-x-8">
            {fields?.Items.map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  clsx(
                    selected
                      ? 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800'
                      : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                  )
                }
              >
                {item?.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          {fields?.Items.map((item, index) => (
            <Tab.Panel key={index}>
              <h3 key={index} className="sr-only">
                {item?.name}
              </h3>
              {item.fields.Type?.value === 'review' && (
                <>
                  {item?.fields?.Items.map((itm, idx: number) => {
                    return (
                      <div key={idx} className="flex space-x-4 text-sm text-gray-500">
                        <div className="flex-none py-10">
                          <img
                            src={itm.fields.Image.value.src}
                            alt=""
                            className="h-10 w-10 rounded-full bg-gray-100"
                          />
                        </div>
                        <div className={clsx(idx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                          <h3 className="font-medium text-gray-900">{itm.fields.Title.value}</h3>
                          <p>
                            <time dateTime={itm.fields.Subtitle.value}>
                              {itm.fields.Subtitle.value}
                            </time>
                          </p>
                          <div
                            className="prose prose-sm mt-4 max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{ __html: itm.fields.Description.value }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
              {item.fields.Type?.value === 'faq' && (
                <>
                  <dl>
                    {item.fields.Items.map((itm, idx: number) => {
                      return (
                        <Fragment key={idx}>
                          <dt className="mt-10 font-medium text-gray-900">
                            {itm.fields.Title.value}
                          </dt>
                          <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                            <p
                              dangerouslySetInnerHTML={{ __html: itm.fields.Description.value }}
                            ></p>
                          </dd>
                        </Fragment>
                      );
                    })}
                  </dl>
                </>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group> */}
    </div>
  );
};

export default Tabs;
