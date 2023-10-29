
/**
 * <auto-generated>
 *     This code was generated by a tool.
 *
 *     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * </auto-generated>
 */

// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { Sitecore } from "./_.Sitecore.Override"
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { ComponentRendering, RouteData, Field, ImageField, FileField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { DefaultComponentProps } from '@/lib/component-props';


export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields {
    export type Banner = {
        fields?: {
            /**
            * Represents the ctaButton field (32d83320-1d57-4294-921b-40bea7ec0e91).
            */
            ctaButton: LinkField;

            /**
            * Represents the description field (cb4246e3-0fe2-4d35-972b-1a912fcfcb32).
            */
            description: Field<string>;

            /**
            * Represents the image field (5ec05182-e32c-4c89-bed6-3dc5e4752e22).
            */
            image: ImageField;

            /**
            * Represents the title field (e43a95dd-553f-4a11-a738-27b72c3f4f13).
            */
            title: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.Carousel.Fields {
    export type Carousel = {
        fields?: {
            /**
            * Represents the Items field (896b5666-dccc-4e85-bca3-b91cabc395b4).
            */
            Items: Sitecore.Override.ItemEx[];

            /**
            * Represents the Title field (37fefbd2-dbde-4db8-bfc0-eb646f06a681).
            */
            Title: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.Carousel.RenderingParameters.Fields {
    export type Carousel = {
        fields?: {
            /**
            * Represents the Speed field (d5b1e205-fd76-4ad2-96d8-80c183df1171).
            */
            Speed: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.Carousel.Fields {
    export type CarouselFolder = {
        fields?: {
        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.Carousel.Fields {
    export type CarouselItem = {
        fields?: {
            /**
            * Represents the CTA field (fd96fc83-87e3-41e4-a5f9-6e2343f65edd).
            */
            CTA: LinkField;

            /**
            * Represents the Image field (34a7a9e1-a996-4fb8-bbcf-9fbb53d99d54).
            */
            Image: ImageField;

            /**
            * Represents the Title field (a280c65d-3495-45e8-9ef3-17b46aa62c70).
            */
            Title: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields {
    export type ContentBlock = {
        fields?: {
            /**
            * Represents the cta1 field (2c9de173-7948-4d54-a6d5-f80c7c73cbf8).
            */
            cta1: LinkField;

            /**
            * Represents the description field (58003d1f-7acb-4ee5-93cf-2bdfcb418024).
            */
            description: Field<string>;

            /**
            * Represents the headingText field (2d7b4330-1fc1-49c8-bbd2-515964d8a2ca).
            */
            headingText: Field<string>;

            /**
            * Represents the image field (b91ee507-3b71-481b-a5e7-f8dfe50626a7).
            */
            image: ImageField;

            /**
            * Represents the imageOnLeft field (aa084b7d-72cb-455b-b1ae-ade4ca25dcca).
            */
            imageOnLeft: Field<boolean>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.GlobalComponents.Fields {
    export type Footer = {
        fields?: {
            /**
            * Represents the copyrightText field (2739a010-c720-4b4b-8bd7-1b00977e6dfd).
            */
            copyrightText: Field<string>;

            /**
            * Represents the list1Links field (b1123ffc-4a6e-4679-b287-6f46d785f8dc).
            */
            list1Links: Sitecore.Override.ItemEx[];

            /**
            * Represents the list1Title field (c04bf061-e290-405d-9765-82d8763a1e4b).
            */
            list1Title: Field<string>;

            /**
            * Represents the list2Links field (21eb929b-c125-4477-9de9-e1b12adb9100).
            */
            list2Links: Sitecore.Override.ItemEx[];

            /**
            * Represents the list2Title field (d2a4aeb6-db33-4b6f-a6f7-700f1f00b4bf).
            */
            list2Title: Field<string>;

            /**
            * Represents the logo field (9fd659fc-9c2e-4e03-93ba-4851f6ac02b7).
            */
            logo: ImageField;

            /**
            * Represents the socialMediaLinks field (9814bc57-8239-4f9d-b9b9-3bd9801862c2).
            */
            socialMediaLinks: Sitecore.Override.ItemEx[];

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.GlobalComponents.Fields {
    export type Footerdata = {
        fields?: {
            /**
            * Represents the link field (3c7d8465-0da0-49ba-9af0-486828ee9395).
            */
            link: LinkField;

            /**
            * Represents the name field (b5bc6560-2042-4281-917c-05b2a4574bda).
            */
            name: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.GlobalComponents.Fields {
    export type Header = {
        fields?: {
            /**
            * Represents the headerLinks field (515179c8-d466-4743-976d-75fa824581f7).
            */
            headerLinks: Sitecore.Override.ItemEx[];

            /**
            * Represents the logo field (dea075cb-9867-4afe-a2f1-cd360bfc57ca).
            */
            logo: ImageField;

            /**
            * Represents the logoLink field (c83c4cd3-a6ca-4db3-af0f-b41accc5581e).
            */
            logoLink: LinkField;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.PageTemplate.Fields {
    export type HomePage = {
        fields?: {
        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields {
    export type ProductCard = {
        fields?: {
            /**
            * Represents the description field (8d76e138-f6a3-4317-8c64-44b573eb395f).
            */
            description: Field<string>;

            /**
            * Represents the image field (dbc968fd-0675-4b67-addd-269a900b4068).
            */
            image: ImageField;

            /**
            * Represents the price field (325a3c51-f73d-4525-b352-863a53d04300).
            */
            price: Field<string>;

            /**
            * Represents the title field (66a7ac93-6903-4622-86a2-28255b790d7e).
            */
            title: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields {
    export type ProductListing = {
        fields?: {
            /**
            * Represents the description field (5ca2714b-743a-4b4a-a8a9-ff71a935eeee).
            */
            description: Field<string>;

            /**
            * Represents the productList field (c00ccf30-3e99-47fd-9164-c0b256470bf8).
            */
            productList: Sitecore.Override.ItemEx[];

            /**
            * Represents the title field (f789a2c2-5136-4ac3-80e9-93421da269e8).
            */
            title: Field<string>;

        }
    };
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.GlobalComponents.Fields {
    export type SocialMediaLinks = {
        fields?: {
            /**
            * Represents the link field (5891c2d8-5c52-4ffd-8bcf-7254d32c74d7).
            */
            link: LinkField;

            /**
            * Represents the name field (10a38f98-939d-415f-b3b8-e6eb73d8f8de).
            */
            name: Field<string>;

        }
    };
}


