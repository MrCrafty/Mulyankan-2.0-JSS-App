// Auto-generated xWrap item wrappers for HZTLSWAG.feature-templates configuration
using global::Sitecore.Data;
using global::Sitecore.Data.Items;
using global::Sitecore.Mvc.Presentation;
using global::System.CodeDom.Compiler;
using global::Xwrap;
using global::Xwrap.FieldWrappers.Abstractions;
using global::Xwrap.Mvc.RenderingParameters;

#region /sitecore/templates/Feature/swag-store/Data source Template/Banner

namespace HZTLSWAG.feature-templates.SitecoreTemplates
{
    /// <summary>
	/// Item wrapper for items of template 'Banner'.
	/// Template ID: {0FF8E4BB-C925-4932-9A03-0C90CBADC25D}.
	/// Template path: /sitecore/templates/Feature/swag-store/Data source Template/Banner.
	/// </summary>
	[GeneratedCode("Leprechaun", "2.0.1")]
    [TemplateId(Constants.TemplateIdString)]
    // ReSharper disable once InconsistentNaming
	// ReSharper disable once PartialTypeWithSinglePart
	public partial class BannerItem : ItemWrapper
	{
		public BannerItem(Item item) : base(item)
		{
		}

		public static class Constants
		{
			public static readonly TemplateID TemplateId = new TemplateID(new ID(TemplateIdString));
			public const string TemplateIdString = "{0FF8E4BB-C925-4932-9A03-0C90CBADC25D}"; 
		}
		
		/// <summary>
		/// A wrapped "General Link" field for item field with name: "ctaButton".
		/// <returns><see cref="IGeneralLinkFieldWrapper"/></returns>
		/// </summary>
		public IGeneralLinkFieldWrapper CtaButton => this.WrapField<IGeneralLinkFieldWrapper>(FieldNames.CtaButton);
		
		/// <summary>
		/// A wrapped "Multi-Line Text" field for item field with name: "description".
		/// <returns><see cref="ITextFieldWrapper"/></returns>
		/// </summary>
		public ITextFieldWrapper Description => this.WrapField<ITextFieldWrapper>(FieldNames.Description);
		
		/// <summary>
		/// A wrapped "Image" field for item field with name: "image".
		/// <returns><see cref="IImageFieldWrapper"/></returns>
		/// </summary>
		public IImageFieldWrapper Image => this.WrapField<IImageFieldWrapper>(FieldNames.Image);
		
		/// <summary>
		/// A wrapped "Single-Line Text" field for item field with name: "title".
		/// <returns><see cref="ITextFieldWrapper"/></returns>
		/// </summary>
		public ITextFieldWrapper Title => this.WrapField<ITextFieldWrapper>(FieldNames.Title);
		
		public struct FieldNames
		{
			public const string CtaButton = "ctaButton";
			public const string Description = "description";
			public const string Image = "image";
			public const string Title = "title";
		}

		public struct FieldIds
		{
			public static ID CtaButton => new ID("{32D83320-1D57-4294-921B-40BEA7EC0E91}");
			public static ID Description => new ID("{CB4246E3-0FE2-4D35-972B-1A912FCFCB32}");
			public static ID Image => new ID("{5EC05182-E32C-4C89-BED6-3DC5E4752E22}");
			public static ID Title => new ID("{E43A95DD-553F-4A11-A738-27B72C3F4F13}");
		}
	}
}

#endregion

#region /sitecore/templates/Feature/swag-store/Data source Template/ContentBlock

namespace HZTLSWAG.feature-templates.SitecoreTemplates
{
    /// <summary>
	/// Item wrapper for items of template 'ContentBlock'.
	/// Template ID: {E8A56EA2-659B-4D00-9972-87FA2D8F2937}.
	/// Template path: /sitecore/templates/Feature/swag-store/Data source Template/ContentBlock.
	/// </summary>
	[GeneratedCode("Leprechaun", "2.0.1")]
    [TemplateId(Constants.TemplateIdString)]
    // ReSharper disable once InconsistentNaming
	// ReSharper disable once PartialTypeWithSinglePart
	public partial class ContentBlockItem : ItemWrapper
	{
		public ContentBlockItem(Item item) : base(item)
		{
		}

		public static class Constants
		{
			public static readonly TemplateID TemplateId = new TemplateID(new ID(TemplateIdString));
			public const string TemplateIdString = "{E8A56EA2-659B-4D00-9972-87FA2D8F2937}"; 
		}
		
		/// <summary>
		/// A wrapped "General Link" field for item field with name: "cta1".
		/// <returns><see cref="IGeneralLinkFieldWrapper"/></returns>
		/// </summary>
		public IGeneralLinkFieldWrapper Cta1 => this.WrapField<IGeneralLinkFieldWrapper>(FieldNames.Cta1);
		
		/// <summary>
		/// A wrapped "Rich Text" field for item field with name: "description".
		/// <returns><see cref="IRichTextFieldWrapper"/></returns>
		/// </summary>
		public IRichTextFieldWrapper Description => this.WrapField<IRichTextFieldWrapper>(FieldNames.Description);
		
		/// <summary>
		/// A wrapped "Single-Line Text" field for item field with name: "headingText".
		/// <returns><see cref="ITextFieldWrapper"/></returns>
		/// </summary>
		public ITextFieldWrapper HeadingText => this.WrapField<ITextFieldWrapper>(FieldNames.HeadingText);
		
		/// <summary>
		/// A wrapped "Image" field for item field with name: "image".
		/// <returns><see cref="IImageFieldWrapper"/></returns>
		/// </summary>
		public IImageFieldWrapper Image => this.WrapField<IImageFieldWrapper>(FieldNames.Image);
		
		/// <summary>
		/// A wrapped "Checkbox" field for item field with name: "imageOnLeft".
		/// <returns><see cref="ICheckboxFieldWrapper"/></returns>
		/// </summary>
		public ICheckboxFieldWrapper ImageOnLeft => this.WrapField<ICheckboxFieldWrapper>(FieldNames.ImageOnLeft);
		
		public struct FieldNames
		{
			public const string Cta1 = "cta1";
			public const string Description = "description";
			public const string HeadingText = "headingText";
			public const string Image = "image";
			public const string ImageOnLeft = "imageOnLeft";
		}

		public struct FieldIds
		{
			public static ID Cta1 => new ID("{2C9DE173-7948-4D54-A6D5-F80C7C73CBF8}");
			public static ID Description => new ID("{58003D1F-7ACB-4EE5-93CF-2BDFCB418024}");
			public static ID HeadingText => new ID("{2D7B4330-1FC1-49C8-BBD2-515964D8A2CA}");
			public static ID Image => new ID("{B91EE507-3B71-481B-A5E7-F8DFE50626A7}");
			public static ID ImageOnLeft => new ID("{AA084B7D-72CB-455B-B1AE-ADE4CA25DCCA}");
		}
	}
}

#endregion

#region /sitecore/templates/Feature/swag-store/Data source Template/Header

namespace HZTLSWAG.feature-templates.SitecoreTemplates
{
    /// <summary>
	/// Item wrapper for items of template 'Header'.
	/// Template ID: {B41FABA6-B4C5-4101-9F4A-DB2E5C159C7F}.
	/// Template path: /sitecore/templates/Feature/swag-store/Data source Template/Header.
	/// </summary>
	[GeneratedCode("Leprechaun", "2.0.1")]
    [TemplateId(Constants.TemplateIdString)]
    // ReSharper disable once InconsistentNaming
	// ReSharper disable once PartialTypeWithSinglePart
	public partial class HeaderItem : ItemWrapper
	{
		public HeaderItem(Item item) : base(item)
		{
		}

		public static class Constants
		{
			public static readonly TemplateID TemplateId = new TemplateID(new ID(TemplateIdString));
			public const string TemplateIdString = "{B41FABA6-B4C5-4101-9F4A-DB2E5C159C7F}"; 
		}
		
		public struct FieldNames
		{
		}

		public struct FieldIds
		{
		}
	}
}

#endregion

#region /sitecore/templates/Feature/swag-store/Page Template/Home Page

namespace HZTLSWAG.feature-templates.SitecoreTemplates
{
    /// <summary>
	/// Item wrapper for items of template 'Home Page'.
	/// Template ID: {880272EE-B5DC-4556-BCE7-9340EC33F534}.
	/// Template path: /sitecore/templates/Feature/swag-store/Page Template/Home Page.
	/// </summary>
	[GeneratedCode("Leprechaun", "2.0.1")]
    [TemplateId(Constants.TemplateIdString)]
    // ReSharper disable once InconsistentNaming
	// ReSharper disable once PartialTypeWithSinglePart
	public partial class HomePageItem : ItemWrapper
	{
		public HomePageItem(Item item) : base(item)
		{
		}

		public static class Constants
		{
			public static readonly TemplateID TemplateId = new TemplateID(new ID(TemplateIdString));
			public const string TemplateIdString = "{880272EE-B5DC-4556-BCE7-9340EC33F534}"; 
		}
		
		public struct FieldNames
		{
		}

		public struct FieldIds
		{
		}
	}
}

#endregion


