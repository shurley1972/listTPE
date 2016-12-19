define([ 'text!master.css','text!./viewmodel.html'], function( css,htmlString) {
//define([], function() {
	function viewModel(params) {
		//if( params.get) params.get( this, params.columns);
		 //this._formReadOnly() - computed observable
		// +++ EDIT MODEL BELOW TO DESIGN YOUR CUSTOM SPA FORM
		var self = this;
		self.attachmentRequired = ko.observable(false);
		
		this.mwp_DescriptionAndPurposeOfEvent = ko.observable("").extend({ listItem: "mwp_DescriptionAndPurposeOfEvent" });
		this.Title = ko.observable("").extend({ listItem: "Title" });
		this.mwp_OneDayEvent = ko.observable("").extend({ listItem: "mwp_OneDayEvent" });
		this.mwp_EventStartDate = ko.observable("").extend({ listItem: "mwp_EventStartDate" });
		this.mwp_EventEndDate = ko.observable("").extend({ listItem: "mwp_EventEndDate" });
		this.mwp_EventState = ko.observable("").extend({ listItem: "mwp_EventState" });
		this.mwp_VendorBooth = ko.observable("").extend({ listItem: "mwp_VendorBooth" });
		this.mwp_InService = ko.observable("").extend({ listItem: "mwp_InService" });
		this.mwp_OtherParticipation = ko.observable("").extend({ listItem: "mwp_OtherParticipation" });	
		this.mwp_TermsAndConditions = ko.observable("").extend({ listItem: "mwp_TermsAndConditions" });	
		this.mwp_OrganizationState = ko.observable("").extend({ listItem: "mwp_OrganizationState" });	
		this.mwp_PotentialCustomers = ko.observable("").extend({ listItem: "mwp_PotentialCustomers" });	
		this.mwp_Sponsorship = ko.observable("").extend({ listItem: "mwp_Sponsorship" });	
		this.mwp_Advertising = ko.observable("").extend({ listItem: "mwp_Advertising" });	
		this.mwp_Speaker = ko.observable("").extend({ listItem: "mwp_Speaker" });	
		this.mwp_ExtraRegistrations = ko.observable("").extend({ listItem: "mwp_ExtraRegistrations" });	
		this.mwp_RequestDate = ko.observable("").extend({ listItem: "mwp_RequestDate" });	
		this.mwp_FormState = ko.observable("").extend({ listItem: "mwp_FormState" });	
		this.mwp_EventCity = ko.observable("").extend({ listItem: "mwp_EventCity" });	
		this.mwp_EventTitle = ko.observable("").extend({ listItem: "mwp_EventTitle" });	
		//this.mwp_VendorBoothFee = ko.observable("").extend({ listItem: "mwp_VendorBoothFee" });	
		this.mwp_AdvertisingCost = ko.observable("").extend({ listItem: "mwp_AdvertisingCost" });	
		this.mwp_SponsorshipAmount = ko.observable("").extend({ listItem: "mwp_SponsorshipAmount" });	
		this.mwp_RegistrationFee = ko.observable("").extend({ listItem: "mwp_RegistrationFee" });			
		
		//self.Title = ko.observable(); // commented out because of params.get
		// Bug in code.  Have to set for variables
		self.SetOneDayEventDefault = ko.computed(function(){if(self.mwp_OneDayEvent() == ""){self.mwp_OneDayEvent('Yes')}}, self);
		self.SetVendorBoothFeeDefault = ko.computed(function(){if(self.mwp_VendorBoothFee() == ""){self.mwp_VendorBoothFee(null)}}, self);
		self.SetVendorBoothFeeDefault = ko.computed(function(){if(!self.mwp_VendorBoothFee()){self.mwp_VendorBoothFee(0);}})		
		self.SetAdvertisingCostsDefault = ko.computed(function(){if(self.mwp_AdvertisingCost() == ""){self.mwp_AdvertisingCost(null)}}, self);
		self.SetSponsorshipAmountDefault = ko.computed(function(){if(self.mwp_SponsorshipAmount() == ""){self.mwp_SponsorshipAmount(null)}}, self);		
		self.SetRegistrationFeeDefault = ko.computed(function(){if(self.mwp_RegistrationFee() == ""){self.mwp_RegistrationFee(null)}}, self);		
		self.mwp_VendorBoothShow = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"){return "block"}else{return "none"}}, self);;		
		self.mwp_InServiceShow = ko.computed(function(){if(self.mwp_InService() == "Yes"){return "block"}else{return "none"}}, self); 
		self.mwp_SponsorshipShow = ko.computed(function(){if(self.mwp_Sponsorship() == "Yes"){return "block"}else{return "none"}}, self); 
		self.mwp_AdvertisingShow = ko.computed(function(){if(self.mwp_Advertising() == "Yes"){return "block"}else{return "none"}}, self); 
		self.mwp_SpeakerShow = ko.computed(function(){if(self.mwp_Speaker() == "Yes"){return "block"}else{return "none"}}, self); 
		self.mwp_ExtraRegistrationsShow = ko.computed(function(){if(self.mwp_ExtraRegistrations() == "Yes"){return "block"}else{return "none"}}, self); 		
		self.mwp_OtherParticipationShow = ko.computed(function(){if(self.mwp_OtherParticipation() == "Yes"){return "block"}else{return "none"}}, self); 
		self.mwp_OneDayEventShow = ko.computed(function(){if(self.mwp_OneDayEvent() == "Yes"){return "none"}else{return "table-Cell"}}, self);
		/////////Below line will break if selecting multiple day event.
		self.SetEventEndDate = ko.computed(function(){if(self.mwp_OneDayEvent() == "Yes"){self.mwp_EventEndDate(self.mwp_EventStartDate());}else if(self.mwp_EventStartDate()==self.mwp_EventEndDate()){self.mwp_EventEndDate("");}});
		self.SetTitleEvent = ko.computed(function(){if(self.mwp_EventTitle()!= null){self.Title(self.mwp_EventTitle() + ' in ' + self.mwp_EventCity() + ', ' + self.mwp_EventState());}})
		self.SetTitleCity = ko.computed(function(){if(self.mwp_EventCity()!= null){self.Title(self.mwp_EventTitle() + ' in ' + self.mwp_EventCity() + ', ' + self.mwp_EventState());}})
		self.SetTitleState = ko.computed(function(){if(self.mwp_EventState()!=undefined && self.mwp_EventState()!= ""){self.Title(self.mwp_EventTitle() + ' in ' + self.mwp_EventCity() + ', ' + self.mwp_EventState());}})		
		self.SetRequestDate = ko.computed(function(){if(self.mwp_FormState() != "Submitted"&&self.mwp_FormState() != "Completed"&&self.mwp_FormState() != "Cancelled"&&self.mwp_FormState() != "Processing"){var currentDate = new Date();self.mwp_RequestDate(currentDate);}});
		self.SetEventStartDateFormat = ko.computed(function(){if(self.mwp_EventStartDate() != undefined && self.mwp_EventStartDate().indexOf("T") > -1){var dt=self.mwp_EventStartDate().substring(0,10);dt=dt.substring(5,7)+"/"+dt.substring(8,10)+"/"+dt.substring(0,4) ;self.mwp_EventStartDate(dt);}})
		self.SetEventEndDateFormat = ko.computed(function(){if(self.mwp_EventEndDate() != undefined && self.mwp_EventEndDate().indexOf("T") > -1){var dt=self.mwp_EventEndDate().substring(0,10);dt=dt.substring(5,7)+"/"+dt.substring(8,10)+"/"+dt.substring(0,4) ;self.mwp_EventEndDate(dt);}})		
		self.SetAttachmentRequiredCert = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"||self.mwp_Sponsorship() == "Yes"||self.mwp_Advertising() == "Yes"){return true}else{return false}}, self);
		self.mwp_PayeeTaxIdCertShow = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"||self.mwp_Sponsorship() == "Yes"||self.mwp_Advertising() == "Yes"){return "block"}else{return "none"}}, self);	   
		//Dynamic Required Fields	   
		self.mwp_EventStartDateText = ko.computed(function(){if(self.mwp_OneDayEvent() == "Yes"){return "Event Date"}else{return "Event Start Date"}}, self); 
		self.mwp_TopicRequired = ko.computed(function(){if(self.mwp_InService() == "Yes"){return true}else{return false}}, self);	
		self.mwp_SponsorshipAmountRequired = ko.computed(function(){if(self.mwp_Sponsorship() == "Yes"){return true}else{return false}}, self);	   
		self.mwp_AdvertisingCostRequired = ko.computed(function(){if(self.mwp_Advertising() == "Yes"){return true}else{return false}}, self);	   
		self.mwp_SpeakerNameRequired = ko.computed(function(){if(self.mwp_Speaker() == "Yes"){return true}else{return false}}, self);	
		self.mwp_ExtraRegistrationsRequired = ko.computed(function(){if(self.mwp_ExtraRegistrations() == "Yes"){return true}else{return false}}, self);			
		self.mwp_DescribeOtherRequired = ko.computed(function(){if(self.mwp_OtherParticipation() == "Yes"){return true}else{return false}}, self);	   
		self.mwp_PayeeTaxIdRequired = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"||self.mwp_Sponsorship() == "Yes"||self.mwp_Advertising() == "Yes"){return true}else{return false}}, self);	 
		self.mwp_VendorBoothFeeRequired = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"){return true}else{return false}}, self);
		self.TotalCost = ko.computed(function(){return Number(self.mwp_RegistrationFee()) + Number(self.mwp_AdvertisingCost()) + Number(self.mwp_SponsorshipAmount()) + Number(self.mwp_VendorBoothFee())});
		self.enableValue = ko.pureComputed( function() { return (self.$readonly()) ? false : true; }, self);

		self.nullbug = ko.computed(function(){
		if(self.mwp_PayeeTaxId()== null){self.mwp_PayeeTaxId('');}
		if(self.mwp_AdvertisingCost()== null){self.mwp_AdvertisingCost(0);}	
		if(self.mwp_RegistrationFee()== null){self.mwp_RegistrationFee(0);}	
		if(self.mwp_SponsorshipAmount()== null){self.mwp_SponsorshipAmount(0);}	
		if(self.mwp_VendorBoothFee()== null){self.mwp_VendorBoothFee(0);}			
		if(self.mwp_Topic()== null){self.mwp_Topic('');}
		if(self.mwp_SponsorshipAmount()== null){self.mwp_SponsorshipAmount('');}	
		if(self.mwp_AdvertisingCost()== null){self.mwp_AdvertisingCost('');}	
		if(self.mwp_RegistrationFee()== null){self.mwp_RegistrationFee('');}		
		if(self.mwp_SpeakerName()== null){self.mwp_SpeakerName('');}	
		if(self.mwp_DescribeOther()== null){self.mwp_DescribeOther('');}
		if(self.mwp_OtherFacts()== null){self.mwp_OtherFacts('');}			
		})	
		self.runtime = ko.observable().extend({form: "runtime"});
		self.readonly = ko.observable().extend({form: "readonly"});
		self.designmode = ko.observable().extend({form: "designmode"});

		self.design = ko.computed(function(){if(self.designmode() == true){return true;}else{return false}})
		
		//Gets current logged in user.  
		/*
		self._GetUserInfo = function()	{
			var url = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties?$Select=AccountName";
			$.ajax(
				{
					url: url,  
					method: "GET",
					headers: 
					{
						"ACCEPT": "application/json;odata=verbose",
						"content-type": "application/json;odata=verbose"                         
					},
					success: function (data) 
					{
						self._GetUserManager(data.d.AccountName);
						//self._GetUserManager('MEDLINE-NT\\kpandya');					
					},
					error: function (data) {
						alert("Error occured." + data);
					}
				});                            
		}
		
		//Gets current logged in user's manager account id needed for approval workflow.
		self._GetUserManager = function(UserAccountName)	{
			var url = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/getpropertiesfor(@v)?@v='" + UserAccountName + "'&$select=UserProfileProperties";
			$.ajax(
				{
					url: url,  
					method: "GET",
					headers: 
					{
						"ACCEPT": "application/json;odata=verbose",
						"content-type": "application/json;odata=verbose"                         
					},
					success: function (data) {
						var properties = data.d.UserProfileProperties.results;
						debugger;
						properties.forEach(function (property) {
							if (property.Key == "Manager") {
								var managerValue = property.Value;
								managerValue = managerValue.replace('MEDLINE-NT\\', '');
								self.mwp_ManagerId(managerValue);
								if (property.Value != undefined && property.Value != "")
								{ 
									self._GetUserManagerName(property.Value);
								}
							}
						});
					},
					error: function (data) {
						alert(JSON.stringify(data));
					}
				});                            
		}
		//Gets current logged in user's manager name needed for approval workflow.
		self._GetUserManagerName = function(UserManagerAccountName)	{
			var url = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/getpropertiesfor(@v)?@v='" + UserManagerAccountName + "'&$select=UserProfileProperties";
			$.ajax(
				{
					url: url,  
					method: "GET",
					headers: 
					{
						"ACCEPT": "application/json;odata=verbose",
						"content-type": "application/json;odata=verbose"                         
					},
					success: function (data) {
						var properties = data.d.UserProfileProperties.results;
						var fN, lN, MgrEmail;
						properties.forEach(function (property) {
							if (property.Key == "FirstName") {
								fN = property.Value;
							}
							if (property.Key == "LastName") {
								lN = property.Value;
							}
						});
						self.mwp_Manager(fN + " " + lN);
						//alert(fN + " " + lN);
					},
					error: function (data) {
						alert(JSON.stringify(data));
					}
				});                            
		}		
		self._GetUserInfo()	*/			
		requirejs(["jqueryui"], function() 
			{ 		
				$('#ui-datepicker-div').remove();
				$("#event-Start,#event-End").removeClass("hasDatepicker");
				$(function() {$(".datepicker").datepicker();}); 
				$('#s4-workspace').scroll(function(){$(".datepicker").datepicker('hide');$('#event-Start').blur();$('#event-End').blur()});			
				$('#event-Start').datepicker( 'option' , 'onClose', function() {$('#event-Start').change(self.mwp_EventStartDate($('#event-Start').val()))} );
				$('#event-Start').datepicker( 'option' , 'onClose', function() {} );

				$('#event-End').datepicker( 'option' , 'onClose', function() {$('#event-End').change(self.mwp_EventEndDate($('#event-End').val()))} );			
				$('#event-End').datepicker( 'option' , 'onClose', function() {} );				
			});		
	
	}
    // Use prototype to declare any public methods
    //viewModel.prototype.doSomething = function() { ... };
	//viewModel.prototype.MyButtonClick = function () {
	//	var model = this;
	//	debugger;
	//};

 
    // Return model definition
    //return viewModel;
	return { viewModel: viewModel, template: css + htmlString };
});
