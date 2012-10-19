
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
	busy:false,
	speed:400,
	toggleMinHeight: 0,
	toggleMaxHeight: 200
}

	accordion.app = {
		openTab: function(open){
			$(open).animate({
				height: accordion.vars.toggleMaxHeight
			}, accordion.vars.speed,function(){
				$(this).removeClass('closed').addClass('opened');
				accordion.vars.busy = false;
			});
		},
		closeTab: function(){
			$('.opened').animate({
				height: accordion.vars.toggleMinHeight
			}, accordion.vars.speed, function(){
				$(this).removeClass('opened').addClass('closed');
			});
		},
		init: function(){
			$('.toggle-btn').click(function(){
				//close any open tabs if they have a class of open
				var open = $(this).next('.accordion-container');
				var tabImage = $(this).find('.arrow-open-close');
				if(!accordion.vars.busy){
					if(!open.hasClass('opened')){
						accordion.app.closeTab();		
						accordion.app.openTab(open);
						$('.arrow-open-close').removeClass('tab-opened').addClass('tab-closed');
						$(this).find('.arrow-open-close').removeClass('tab-closed').addClass('tab-opened');
						accordion.vars.busy = true;
					}					
				}
			});	
		}
	};

$(document).ready(function(){
	accordion.app.init();
});