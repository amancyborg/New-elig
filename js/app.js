$(document).ready(function() {


	var options = {
		allow_empty: true,

		filters: [
			{
				id: 'POLICY',
				label: 'BEF0030T.POLICY',
				type: 'string',
				// optgroup: 'core',
				default_value: '767000123456',
				size: 12,
				unique: true
			},
			{
				id: 'CLASS',
				label: 'BEF0030T.CLASS',
				type: 'string',
				// optgroup: 'core',
				default_value: 'A03',
				size: 3,
				unique: true
			},
			{
				id: 'EFFECTIVE-DATE',
				label: 'BEF0030T.EFFECTIVE-DATE',
				type: 'date',
				// optgroup: 'core',
				default_value: '2022-01-01',
				size: 10,
				unique: true
			}
		]
	};


	$('#builder').queryBuilder(options);

	
	$('.parse-json').on('click', function() {
		var res = $('#builder').queryBuilder('getSQL', $(this).data('stmt'), false);
		 console.log(
			res.sql + (res.params ? '\n Parameters \n' + JSON.stringify(res.params, undefined, 2) : '')
		  );
	  });


});
