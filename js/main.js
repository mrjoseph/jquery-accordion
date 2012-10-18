
/* 
	1) 	Close all the content containers apart from the default open container.
	2) 	On click of the toggle button close any containers that are open and at 
		the same time open the content container. 
	3)	Change the sprite arrow to uillustrate that the container is open.
	4)	
*/

var accordion = accordion || {};
accordion.vars = accordion.vars || {};
accordion.app = accordion.app || {};

accordion.vars = {

}

	accordion.app = {

		openTab: function(open){
			console.log('open')
			$(open).animate({
				height: 100
			},500);
		},
		closeTab: function(){
			console.log('Close all tabs')
			$('.accordion-container').animate({
				height: 0
			},500);
		},
		init: function(){
			$('.toggle-btn').click(function(){
				//close any open tabs if they have a class of open
				var open = $(this).parent().find('.accordion-container');
				accordion.app.closeTab();
				accordion.app.openTab(open);
			});	
		},

	};

$(document).ready(function(){
	accordion.app.init();
});