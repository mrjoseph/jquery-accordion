
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
			$(open).animate({
				height: 100
			},700,function(){
				$(this).removeClass('closed').addClass('opened');
			});
		},
		closeTab: function(){
			$('.opened').animate({
				height: 0
			},700, function(){
				$(this).removeClass('opened').addClass('closed');
			});
		},
		init: function(){
			$('.toggle-btn').click(function(){
				//close any open tabs if they have a class of open
				var open = $(this).parent().find('.accordion-container');
				var tabImage = $(this).find('.arrow-open-close');
				if(!open.hasClass('opened')){
					accordion.app.closeTab();
					accordion.app.openTab(open);
					$('.arrow-open-close').removeClass('tab-opened').addClass('tab-closed');
					$(this).find('.arrow-open-close').removeClass('tab-closed').addClass('tab-opened');
				}
			});	
		}

	};

$(document).ready(function(){
	accordion.app.init();
});