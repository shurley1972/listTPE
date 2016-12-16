define([], function( ) { return  JSON.stringify({"components":[{"Title":"textboxcustom","Require":{"name":"textboxcustom","proto":false,"path":"textboxcustom"},"Markup":{"tag":"component-textboxcustom"},"Connections":{"ListItem":["Text"]},"Params":{"InternalName":"","Title":"","Description":"","width":"600px","maxlength":255,"required":true,"label":"","infotip":"","datatype":"","placeholder":""}},{"Title":"buttonscustom","Require":{"name":"buttonscustom","proto":false,"path":"buttonscustom"},"Markup":{"tag":"component-buttonscustom"},"Params":{"hidden":false,"save":true,"cancel":true,"deletesubmitted":true,"moderation":"Draft","uniqueid":"Counter"}},{"Title":"reviewcustom","Require":{"name":"reviewcustom","proto":false,"path":"reviewcustom"},"Markup":{"tag":"component-reviewcustom"},"Params":{"ID":"ManagerApproval","NextID":"","StepName":"Manager Approval Needed","ApproverType":"User","ApproverAccountID":"sphurley","FirstStep":"true"}},{"Title":"managerapproval","Require":{"name":"managerapproval","proto":false,"path":"managerapproval"},"Markup":{"tag":"component-managerapproval"},"Params":{"ID":"ManagerApproval","NextID":"","StepName":"Manager Approval Needed","ApproverType":"User","ApproverAccountID":"sphurley","FirstStep":"true","closeonclick":false}},{"Title":"attachmentcustom","Require":{"name":"attachmentcustom","proto":false,"path":"attachmentcustom"},"Markup":{"tag":"component-attachmentcustom"},"Params":{"prefix":"","required":false}},{"Title":"oecapproval","Require":{"name":"oecapproval","proto":false,"path":"oecapproval"},"Markup":{"tag":"component-oecapproval"},"Params":{"ID":"ManagerApproval","NextID":"","StepName":"Manager Approval Needed","ApproverType":"User","ApproverAccountID":"sphurley","FirstStep":"true","closeonclick":false}}],"columns":{"mwp_FormID":"<Field ID=\"{3c53b379-6256-4ab5-bc14-8fa61360e526}\" Type=\"Text\" Name=\"mwp_FormID\" Required=\"FALSE\" DisplayName=\"Form ID\" Description=\"Unique Form Identificator\" Group=\"Medline Web Portal\" SourceID=\"{f24ebe2f-c0d9-4b7d-85e5-22157a4ff0a1}\" StaticName=\"mwp_FormID\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar4\" RowOrdinal=\"0\"><Default>0</Default></Field>","mwp_FormType":"<Field ID=\"{ac53b379-6156-4aa5-bc14-8fa6136be526}\" Type=\"Text\" Name=\"mwp_FormType\" Required=\"FALSE\" DisplayName=\"Form Type\" Description=\"Give SPA Form Name\" Group=\"Medline Web Portal\" SourceID=\"{f24ebe2f-c0d9-4b7d-85e5-22157a4ff0a1}\" StaticName=\"mwp_FormType\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar3\" RowOrdinal=\"0\"><Default>Generic SPA Form</Default></Field>","mwp_FormState":"<Field ID=\"{2223b379-4a56-25b5-bc14-8f3c5360e526}\" Type=\"Text\" Name=\"mwp_FormState\" Required=\"FALSE\" DisplayName=\"Form State\" Description=\"Form State\" Group=\"Medline Web Portal\" SourceID=\"{f24ebe2f-c0d9-4b7d-85e5-22157a4ff0a1}\" StaticName=\"mwp_FormState\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar5\" RowOrdinal=\"0\"><Default>Draft</Default></Field>","mwp_OrganizationName":"<Field Type=\"Text\" DisplayName=\"Organization Name\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be501}\" Name=\"mwp_OrganizationName\" StaticName=\"mwp_OrganizationName\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar11\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventTitle":"<Field Type=\"Text\" DisplayName=\"Event Title\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be504}\" Name=\"mwp_EventTitle\" StaticName=\"mwp_EventTitle\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar8\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventVenue":"<Field Type=\"Text\" DisplayName=\"Event Venue\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be508}\" Name=\"mwp_EventVenue\" StaticName=\"mwp_EventVenue\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar7\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventCity":"<Field Type=\"Text\" DisplayName=\"Event City\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be510}\" Name=\"mwp_EventCity\" StaticName=\"mwp_EventCity\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar22\" RowOrdinal=\"0\" Version=\"1\" />","mwp_ExpectedNumberofAttendees":"<Field Type=\"Number\" DisplayName=\"Expected number of attendees\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50e}\" Name=\"mwp_ExpectedNumberofAttendees\" StaticName=\"mwp_ExpectedNumberofAttendees\" Percentage=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"float1\" RowOrdinal=\"0\" Version=\"1\" />","mwp_ExpectedTypeofAttendees":"<Field Type=\"Text\" DisplayName=\"Expected type of attendees\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be509}\" Name=\"mwp_ExpectedTypeofAttendees\" StaticName=\"mwp_ExpectedTypeofAttendees\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar19\" RowOrdinal=\"0\" Version=\"1\" />","mwp_VendorBoothFee":"<Field Type=\"Currency\" DisplayName=\"Vendor Booth Fee\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be512}\" Name=\"mwp_VendorBoothFee\" StaticName=\"mwp_VendorBoothFee\" LCID=\"127\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"float2\" RowOrdinal=\"0\" Version=\"3\" />","mwp_SponsorshipAmount":"<Field Type=\"Currency\" DisplayName=\"Sponsorship Amount\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be51d}\" Name=\"mwp_SponsorshipAmount\" StaticName=\"mwp_SponsorshipAmount\" LCID=\"127\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"float3\" RowOrdinal=\"0\" Version=\"3\" />","mwp_AdvertisingCost":"<Field Type=\"Currency\" DisplayName=\"Advertising Cost\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be51f}\" Name=\"mwp_AdvertisingCost\" StaticName=\"mwp_AdvertisingCost\" LCID=\"127\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"float4\" RowOrdinal=\"0\" Version=\"3\" />","mwp_PayeeTaxId":"<Field Type=\"Text\" DisplayName=\"Payee Tax Id\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50a}\" Name=\"mwp_PayeeTaxId\" StaticName=\"mwp_PayeeTaxId\" MaxLength=\"255\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar6\" RowOrdinal=\"0\" Version=\"1\" />","mwp_Topic":"<Field Type=\"Text\" DisplayName=\"Topic\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50b}\" Name=\"mwp_Topic\" StaticName=\"mwp_Topic\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar10\" RowOrdinal=\"0\" Version=\"1\" />","mwp_SpeakerName":"<Field Type=\"Text\" DisplayName=\"Speaker Name\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be50d}\" Name=\"mwp_SpeakerName\" StaticName=\"mwp_SpeakerName\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar9\" RowOrdinal=\"0\" Version=\"1\" />","mwp_DescribeOther":"<Field Type=\"Text\" DisplayName=\"Describe Other\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be507}\" Name=\"mwp_DescribeOther\" StaticName=\"mwp_DescribeOther\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar12\" RowOrdinal=\"0\" Version=\"1\" />","mwp_RegistrationFee":"<Field Type=\"Currency\" DisplayName=\"Registration Fee\" Group=\"Medline Web Portal\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{da9a9fce-193d-409f-82b1-bc29375b222a}\" Name=\"mwp_RegistrationFee\" StaticName=\"mwp_RegistrationFee\" LCID=\"1033\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"float5\" RowOrdinal=\"0\" Version=\"1\" />","mwp_OtherFacts":"<Field Type=\"Text\" DisplayName=\"Other Facts\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be50f}\" Name=\"mwp_OtherFacts\" StaticName=\"mwp_OtherFacts\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar15\" RowOrdinal=\"0\" Version=\"1\" />","mwp_DescriptionAndPurposeOfEvent":"<Field Type=\"Note\" DisplayName=\"Description and purpose of event\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be511}\" Name=\"mwp_DescriptionAndPurposeOfEvent\" StaticName=\"mwp_DescriptionAndPurposeOfEvent\" RichText=\"FALSE\" RichTextMode=\"Compatible\" IsolateStyles=\"FALSE\" AppendOnly=\"FALSE\" UnlimitedLengthInDocumentLibrary=\"FALSE\" NumLines=\"6\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"ntext3\" RowOrdinal=\"0\" Version=\"1\" />","Title":"<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Title\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" ColName=\"nvarchar1\" />","mwp_OneDayEvent":"<Field Type=\"Text\" DisplayName=\"One Day Event\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50c}\" Name=\"mwp_OneDayEvent\" StaticName=\"mwp_OneDayEvent\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar14\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventStartDate":"<Field Type=\"DateTime\" DisplayName=\"Event Start Date\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be502}\" Name=\"mwp_EventStartDate\" StaticName=\"mwp_EventStartDate\" Format=\"DateTime\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"datetime1\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventEndDate":"<Field Type=\"DateTime\" DisplayName=\"Event End Date\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be503}\" Name=\"mwp_EventEndDate\" StaticName=\"mwp_EventEndDate\" Format=\"DateTime\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"datetime2\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventState":"<Field Type=\"Choice\" DisplayName=\"Event State\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be517}\" Name=\"mwp_EventState\" StaticName=\"mwp_EventState\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar17\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Alabama</CHOICE><CHOICE>Alaska</CHOICE><CHOICE>Arizona</CHOICE><CHOICE>Arkansas</CHOICE><CHOICE>California</CHOICE><CHOICE>Colorado</CHOICE><CHOICE>Connecticut</CHOICE><CHOICE>Delaware</CHOICE><CHOICE>Florida</CHOICE><CHOICE>Georgia</CHOICE><CHOICE>Hawaii</CHOICE><CHOICE>Idaho</CHOICE><CHOICE>Illinois</CHOICE><CHOICE>Indiana</CHOICE><CHOICE>Iowa</CHOICE><CHOICE>Kansas</CHOICE><CHOICE>Kentucky</CHOICE><CHOICE>Louisiana</CHOICE><CHOICE>Maine</CHOICE><CHOICE>Maryland</CHOICE><CHOICE>Massachusetts</CHOICE><CHOICE>Michigan</CHOICE><CHOICE>Minnesota</CHOICE><CHOICE>Mississippi</CHOICE><CHOICE>Missouri</CHOICE><CHOICE>Montana</CHOICE><CHOICE>Nebraska</CHOICE><CHOICE>Nevada</CHOICE><CHOICE>New Hampshire</CHOICE><CHOICE>New Jersey</CHOICE><CHOICE>New Mexico</CHOICE><CHOICE>New York</CHOICE><CHOICE>North Carolina</CHOICE><CHOICE>North Dakota</CHOICE><CHOICE>Ohio</CHOICE><CHOICE>Oklahoma</CHOICE><CHOICE>Oregon</CHOICE><CHOICE>Pennsylvania</CHOICE><CHOICE>Rhode Island</CHOICE><CHOICE>South Carolina</CHOICE><CHOICE>South Dakota</CHOICE><CHOICE>Tennessee</CHOICE><CHOICE>Texas</CHOICE><CHOICE>Utah</CHOICE><CHOICE>Vermont</CHOICE><CHOICE>Virginia</CHOICE><CHOICE>Washington</CHOICE><CHOICE>West Virginia</CHOICE><CHOICE>Wisconsin</CHOICE><CHOICE>Wyoming</CHOICE></CHOICES></Field>","mwp_VendorBooth":"<Field Type=\"Choice\" DisplayName=\"Vendor Booth\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be514}\" Name=\"mwp_VendorBooth\" StaticName=\"mwp_VendorBooth\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar13\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_InService":"<Field Type=\"Choice\" DisplayName=\"InService\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be519}\" Name=\"mwp_InService\" StaticName=\"mwp_InService\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar20\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_OtherParticipation":"<Field Type=\"Choice\" DisplayName=\"Other Participation\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be51a}\" Name=\"mwp_OtherParticipation\" StaticName=\"mwp_OtherParticipation\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar24\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_TermsAndConditions":"<Field Type=\"Boolean\" DisplayName=\"Terms and Conditions\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be515}\" Name=\"mwp_TermsAndConditions\" StaticName=\"mwp_TermsAndConditions\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"bit1\" RowOrdinal=\"0\" Version=\"1\"><Default>FALSE</Default></Field>","mwp_OrganizationState":"<Field Type=\"Choice\" DisplayName=\"Organization State\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be51b}\" Name=\"mwp_OrganizationState\" StaticName=\"mwp_OrganizationState\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar23\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Alabama</CHOICE><CHOICE>Alaska</CHOICE><CHOICE>Arizona</CHOICE><CHOICE>Arkansas</CHOICE><CHOICE>California</CHOICE><CHOICE>Colorado</CHOICE><CHOICE>Connecticut</CHOICE><CHOICE>Delaware</CHOICE><CHOICE>Florida</CHOICE><CHOICE>Georgia</CHOICE><CHOICE>Hawaii</CHOICE><CHOICE>Idaho</CHOICE><CHOICE>Illinois</CHOICE><CHOICE>Indiana</CHOICE><CHOICE>Iowa</CHOICE><CHOICE>Kansas</CHOICE><CHOICE>Kentucky</CHOICE><CHOICE>Louisiana</CHOICE><CHOICE>Maine</CHOICE><CHOICE>Maryland</CHOICE><CHOICE>Massachusetts</CHOICE><CHOICE>Michigan</CHOICE><CHOICE>Minnesota</CHOICE><CHOICE>Mississippi</CHOICE><CHOICE>Missouri</CHOICE><CHOICE>Montana</CHOICE><CHOICE>Nebraska</CHOICE><CHOICE>Nevada</CHOICE><CHOICE>New Hampshire</CHOICE><CHOICE>New Jersey</CHOICE><CHOICE>New Mexico</CHOICE><CHOICE>New York</CHOICE><CHOICE>North Carolina</CHOICE><CHOICE>North Dakota</CHOICE><CHOICE>Ohio</CHOICE><CHOICE>Oklahoma</CHOICE><CHOICE>Oregon</CHOICE><CHOICE>Pennsylvania</CHOICE><CHOICE>Rhode Island</CHOICE><CHOICE>South Carolina</CHOICE><CHOICE>South Dakota</CHOICE><CHOICE>Tennessee</CHOICE><CHOICE>Texas</CHOICE><CHOICE>Utah</CHOICE><CHOICE>Vermont</CHOICE><CHOICE>Virginia</CHOICE><CHOICE>Washington</CHOICE><CHOICE>West Virginia</CHOICE><CHOICE>Wisconsin</CHOICE><CHOICE>Wyoming</CHOICE></CHOICES></Field>","mwp_PotentialCustomers":"<Field Type=\"Choice\" DisplayName=\"Potential Customers\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be516}\" Name=\"mwp_PotentialCustomers\" StaticName=\"mwp_PotentialCustomers\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar18\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_Sponsorship":"<Field Type=\"Choice\" DisplayName=\"Sponsorship\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be51c}\" Name=\"mwp_Sponsorship\" StaticName=\"mwp_Sponsorship\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar16\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_Advertising":"<Field Type=\"Choice\" DisplayName=\"Advertising\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be51e}\" Name=\"mwp_Advertising\" StaticName=\"mwp_Advertising\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar26\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_Speaker":"<Field Type=\"Choice\" DisplayName=\"Speaker\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{a1f50401-6156-4aa5-bc14-8fa6136be520}\" Name=\"mwp_Speaker\" StaticName=\"mwp_Speaker\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar25\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_ExtraRegistrations":"<Field Type=\"Choice\" DisplayName=\"Extra Registrations\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{90dab355-43b9-485e-83ab-698e027e5a16}\" Name=\"mwp_ExtraRegistrations\" StaticName=\"mwp_ExtraRegistrations\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"nvarchar30\" RowOrdinal=\"0\" Version=\"1\"><CHOICES><CHOICE>Yes</CHOICE><CHOICE>No</CHOICE></CHOICES></Field>","mwp_RequestDate":"<Field Type=\"DateTime\" DisplayName=\"Request Date\" Group=\"Medline Web Portal\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{6f83df4d-ecf2-41b9-bfd9-535e9dbccafe}\" Name=\"mwp_RequestDate\" StaticName=\"mwp_RequestDate\" Format=\"DateOnly\" SourceID=\"{f5368e2f-841e-46a8-8fac-6dcefe26d3d9}\" ColName=\"datetime3\" RowOrdinal=\"0\" Version=\"1\" />","mwp_ApprovalWorkflow":"<Field Type=\"Note\" DisplayName=\"mwp_ApprovalWorkflow\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" NumLines=\"6\" RichText=\"FALSE\" Sortable=\"FALSE\" ID=\"{abc771b2-7270-42a0-bc27-38b7f8e9d10a}\" SourceID=\"{c7d09fbb-bf16-4976-b426-e93e4e9cc4c6}\" StaticName=\"mwp_ApprovalWorkflow\" Name=\"mwp_ApprovalWorkflow\" ColName=\"ntext4\" RowOrdinal=\"0\" />","Reportable":"<Field Type=\"Text\" DisplayName=\"Reportable\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{ffcb9322-089a-4e43-a615-fe43a9889ced}\" SourceID=\"{c7d09fbb-bf16-4976-b426-e93e4e9cc4c6}\" StaticName=\"Reportable\" Name=\"Reportable\" ColName=\"nvarchar33\" RowOrdinal=\"0\" />","ReportabilityReasons":"<Field Type=\"Text\" DisplayName=\"Reportability Reasons\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{ae8c6d86-99c9-42da-9946-25ece145a709}\" SourceID=\"{c7d09fbb-bf16-4976-b426-e93e4e9cc4c6}\" StaticName=\"ReportabilityReasons\" Name=\"ReportabilityReasons\" ColName=\"nvarchar34\" RowOrdinal=\"0\" Version=\"1\" />"},"timestamp":"Fri Dec 16 2016 12:03:55 GMT-0600 (Central Standard Time)"});});