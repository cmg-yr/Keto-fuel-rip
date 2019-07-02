function initializeCountryState(country_id, state_id, state_container_id, zipcode, additional_classes) {
	var countries = {
		"US": [
			['AL', 'Alabama'],
			['AK', 'Alaska'],
			['AZ', 'Arizona'],
			['AR', 'Arkansas'],
			['CA', 'California'],
			['CO', 'Colorado'],
			['CT', 'Connecticut'],
			['DE', 'Delaware'],
			['DC', 'District of Columbia'],
			['FL', 'Florida'],
			['GA', 'Georgia'],
			['HI', 'Hawaii'],
			['ID', 'Idaho'],
			['IL', 'Illinois'],
			['IN', 'Indiana'],
			['IA', 'Iowa'],
			['KS', 'Kansas'],
			['KY', 'Kentucky'],
			['LA', 'Louisiana'],
			['ME', 'Maine'],
			['MD', 'Maryland'],
			['MA', 'Massachusetts'],
			['MI', 'Michigan'],
			['MN', 'Minnesota'],
			['MS', 'Mississippi'],
			['MO', 'Missouri'],
			['MT', 'Montana'],
			['NE', 'Nebraska'],
			['NV', 'Nevada'],
			['NH', 'New Hampshire'],
			['NJ', 'New Jersey'],
			['NM', 'New Mexico'],
			['NY', 'New York'],
			['NC', 'North Carolina'],
			['ND', 'North Dakota'],
			['OH', 'Ohio'],
			['OK', 'Oklahoma'],
			['OR', 'Oregon'],
			['PA', 'Pennsylvania'],
			['RI', 'Rhode Island'],
			['SC', 'South Carolina'],
			['SD', 'South Dakota'],
			['TN', 'Tennessee'],
			['TX', 'Texas'],
			['UT', 'Utah'],
			['VT', 'Vermont'],
			['VA', 'Virginia'],
			['WA', 'Washington'],
			['WV', 'West Virginia'],
			['WI', 'Wisconsin'],
			['WY', 'Wyoming'],
			['AS', 'American Samoa'],
			['FM', 'Federated States of Micronesia'],
			['GU', 'Guam'],
			['MP', 'Northern Mariana Islands'],
			['PR', 'Puerto Rico'],
			['MH', 'Republic of Marshall Islands'],
			['VI', 'Virgin Islands of the U.S.'],
			['AA', 'Armed Forces Americas'],
			['AP', 'Armed Forces Pacific']
		],
		"CA": [
			['AB', 'Alberta'],
			['BC', 'British Columbia'],
			['MB', 'Manitoba'],
			['NB', 'New Brunswick'],
			['NL', 'Newfoundland and Labrador'],
			['NT', 'Northwest Territories'],
			['NS', 'Nova Scotia'],
			['NU', 'Nunavut'],
			['ON', 'Ontario'],
			['PE', 'Prince Edward Island'],
			['QC', 'Quebec'],
			['SK', 'Saskatchewan'],
			['YT', 'Yukon']
		]
	};

	var country_element = $('#' + country_id);
	var zipcode_input = $('#' + zipcode);
	var state_container_element = $('#' + state_container_id);
	var element_classes = '';
	if (additional_classes) {
		element_classes = ' class="' + additional_classes + '"';
	}

	country_element.change(function (event) {
		state_container_element.empty();
		if (country_element.val() == 'US') {
			zipcode_input.attr('type', 'tel');
		} else {
			zipcode_input.attr('type', 'text');
		}
		if (countries.hasOwnProperty(country_element.val())) {
			var state_input = $('<select id="' + state_id + '"' + element_classes + ' name="state" autocomplete="address-level1" required></select>');
			// var initial_option = $('<option value="" selected disabled>Select State</option>');
			// state_input.append(initial_option);

			$.each(countries[country_element.val()], function (index, val) {
				var option = $('<option value="' + val[0] + '">' + val[1] + '</option>');
				state_input.append(option);
			});
		} else {
			var state_input = $('<input id="' + state_id + '"' + element_classes + ' type="text" name="state" placeholder="State" autocomplete="address-level1" required>');
		}

		state_container_element.append(state_input);
	});

	country_element.change();
}