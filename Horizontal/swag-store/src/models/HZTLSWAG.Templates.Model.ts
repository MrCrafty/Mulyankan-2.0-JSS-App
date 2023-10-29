
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


export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.AccordionTemp.Fields {
    export type Accordion = { 
        fields?: { 
            /**
            * Represents the accordionItems field (ddb14b64-abd1-4ddd-8cde-59422bffd61c).
            */
            accordionItems: Sitecore.Override.ItemEx[];

            /**
            * Represents the headingText field (2a5d1bf5-6541-4ac1-beff-6e7cd26036f9).
            */
            headingText: Field<string>;
 
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.AccordionTemp.Fields {
    export type AccordionItem = { 
        fields?: { 
            /**
            * Represents the description field (9800da25-6394-4ff6-b1e4-f9d2d233a632).
            */
            description: Field<string>;

            /**
            * Represents the title field (7efef5fc-b765-4950-bc96-5ce1a6276b77).
            */
            title: Field<string>;
 
        }
 }; 
}

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

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type CategoryDetail = 
            HZTLSWAG.Templates.Sitecore.templates.Horizontal.Base.Fields.HasThumbnail & { 
        fields?: { 
            /**
            * Represents the Content field (9601bcda-be54-449d-a6bd-505b944045e1).
            */
            Content: Field<string>;

            /**
            * Represents the Title field (3db7db4a-2224-4fae-9199-fa9fa735af49).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields {
    export type CategoryListing = { 
        fields?: { 
            /**
            * Represents the categoryList field (c00ccf30-3e99-47fd-9164-c0b256470bf8).
            */
            categoryList: Sitecore.Override.ItemEx[];

            /**
            * Represents the description field (5ca2714b-743a-4b4a-a8a9-ff71a935eeee).
            */
            description: Field<string>;

            /**
            * Represents the title field (f789a2c2-5136-4ac3-80e9-93421da269e8).
            */
            title: Field<string>;
 
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

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type HeadlessSite = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type HeadlessTenant = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.PageTemplate.Fields {
    export type HomePage = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type JssSettings = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.Fields {
    export type MediaComponent = { 
        fields?: { 
            /**
            * Represents the isVideoField field (3873dcec-ea08-4069-99a4-4ec16e46dd6a).
            */
            isVideoField: Field<boolean>;

            /**
            * Represents the mediaImage field (57cbb200-df7c-465c-89fd-ea45f44ff0fa).
            */
            mediaImage: ImageField;

            /**
            * Represents the mediaVideo field (f6226088-efc4-4d84-a43b-4a55021ab81b).
            */
            mediaVideo: LinkField;
 
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type Page = { 
        fields?: { 
            /**
            * Represents the Content field (d96602ce-7ffe-47cd-ab36-742e595c9471).
            */
            Content: Field<string>;

            /**
            * Represents the Title field (83d8202b-faf2-4a4f-af90-ef8f05b10abb).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type PageDesignFolder = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type PageDesigns = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type PartialDesignFolder = { 
        fields?: {  
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type PartialDesigns = { 
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

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Fields {
    export type ProductDetail = 
            HZTLSWAG.Templates.Sitecore.templates.Horizontal.Base.Fields.HasThumbnail & { 
        fields?: { 
            /**
            * Represents the Content field (081c705a-7f07-4e2e-a3a5-d602a0b4f270).
            */
            Content: Field<string>;

            /**
            * Represents the Except field (e3540d36-ba94-4274-a498-a9d4f76a75b5).
            */
            Except: Field<string>;

            /**
            * Represents the Images field (e79560a0-e221-4476-a3ea-705e3363b6c4).
            */
            Images: Sitecore.Override.ItemEx[];

            /**
            * Represents the Price field (2dd78d5b-0c58-41fd-8c2d-931e74c814ab).
            */
            Price: Field<number>;

            /**
            * Represents the RelatedProducts field (c2642f65-25be-4d2f-a277-48d2ce6d29b8).
            */
            RelatedProducts: Sitecore.Override.ItemEx[];

            /**
            * Represents the Title field (f2c9a2ec-0b78-464d-9d13-a57d9b730eb3).
            */
            Title: Field<string>;
 
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

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.TabComponent.Fields {
    export type Tab = { 
        fields?: { 
            /**
            * Represents the Items field (e32961c9-5e61-4124-aa94-29d0be319373).
            */
            Items: Sitecore.Override.ItemEx[];

            /**
            * Represents the Title field (54da3833-f2a3-4cca-a4ab-20194abf1a2a).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.swagstore.DataSourceTemplate.TabComponent.Fields {
    export type TabItem = { 
        fields?: { 
            /**
            * Represents the Address field (a7d531d7-5a99-428f-a5dc-4b1f40df6c7f).
            */
            Address: Field<string>;

            /**
            * Represents the Email field (0c7be415-2fff-41c8-ad87-0fe4946a73e0).
            */
            Email: Field<string>;

            /**
            * Represents the Mobile field (5536182a-3f11-4ad6-a7ac-7de7d91ca7f8).
            */
            Mobile: Field<string>;

            /**
            * Represents the Phone field (37d13150-fadb-4217-9e76-0592d9d8984d).
            */
            Phone: Field<string>;

            /**
            * Represents the Title field (a129892b-a577-4254-bee1-998dcfee65b9).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace HZTLSWAG.Templates.Sitecore.templates.Horizontal.Base.Fields {
    export type HasThumbnail = { 
        fields?: { 
            /**
            * Represents the Thumbnail field (55a816a3-e23a-4816-b183-9786b42a4088).
            */
            Thumbnail: ImageField;
 
        }
 }; 
}


