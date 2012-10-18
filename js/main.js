
var accordion = accordion || {};
accordion.vars = accordion.vars || {};
accordion.app = accordion.app || {};

accordion.vars = {
	message : 'hello world',
	message2 : 'how are you doing',
}

	accordion.app = {
		init: function(){
			var message = accordion.vars.message;
			var message2 = accordion.vars.message2;
			console.log(message +' '+message2);
		},

	};

$(document).ready(function(){
	accordion.app.init();
});