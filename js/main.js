
var accordion = accordion || {};
accordion.vars = accordion.vars || {};
accordion.app = accordion.app || {};

accordion.vars = {
	test : 'hello world',
}

	accordion.app = {
		init: function(){
			var message = accordion.vars.message;
			var message2 = accordion.vars.message2;
			console.log(test);
		},

	};

$(document).ready(function(){
	accordion.app.init();
});