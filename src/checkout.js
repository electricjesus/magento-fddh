(function(b) {
	var triggerChange = function(element) {
		if ("createEvent" in document) {
		    var evt = document.createEvent("HTMLEvents");
		    evt.initEvent("change", false, true);
		    element.dispatchEvent(evt);
		}
		else
		    element.fireEvent("onchange");
	}
	
	var inputs = {
		'[name="billing[firstname]"' 				:  'John',
		'[name="billing[lastname]"' 				:  'Doe',
		'[name="billing[company]"' 					:  'ABC Company',
		'[name="billing[email]"' 					:  'john.d@test.com',
		'[name="billing[street][]"' 				:  '900 Alpha Drive Suite 410',		
		'[name="billing[city]"' 					:  'Richardson',
		'[name="billing[postcode]"' 				:  '78015',
		'[name="billing[country_id]"' 				:  'US',
		'[name="billing[region_id]"'				:  '57',
		'[name="billing[telephone]"' 				:  '123-123-1234',
		'[name="billing[fax]"' 						:  '123-123-1235',
		'[name="billing[customer_password]"' 		:  '',
		'[name="billing[confirm_password]"' 		:  '',
		'[name="billing[save_in_address_book]"'		:  '1',
		'[name="billing[use_for_shipping]"' 		:  '1',

		'[name="shipping[firstname]"' 				:  'Mary',
		'[name="shipping[lastname]"' 				:  'Watson',
		'[name="shipping[company]"' 				:  'DEF Company',
		'[name="shipping[email]"' 					:  'mary.w@test.com',
		'[name="shipping[street][]"' 				:  '900 Alpha Drive Suite 555',		
		'[name="shipping[city]"' 					:  'Richardson',
		'[name="shipping[region_id]"' 				:  '57',
		'[name="shipping[postcode]"' 				:  '78015',
		'[name="shipping[country_id]"' 				:  'US',
		'[name="shipping[telephone]"' 				:  '123-223-1234',
		'[name="shipping[fax]"' 					:  '123-223-1235',
		'[name="shipping[save_in_address_book]"'	:  '1',		

	}

	for(element in inputs) {
		var e = document.querySelector(element);
		if(e)	{
			if(e.type && ['checkbox','radio'].indexOf(e.type)) { 
				e.click();
			} else {
				e.value = inputs[element]; triggerChange(e); 
			}

		} else	{ console.log("missing", element)};
	}
})(document)