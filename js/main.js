var accordion = accordion || {};
accordion.vars = accordion.vars || {};
accordion.app = accordion.app || {};

accordion.vars = {
	container: '.accordion-container',
	arrow: '.arrow-open-close',
	busy:false,
	speed:400,
	toggleMinHeight: 0,
	toggleMaxHeight: 100,
	swapImage: function(a,that){
		$(a).removeClass('tab-opened').addClass('tab-closed');
		that.find(a).removeClass('tab-closed').addClass('tab-opened');
		
	}
};

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
			var
			a		= accordion.vars.arrow,
			b		= accordion.vars.container,
			_close	= accordion.app.closeTab,
			_open	= accordion.app.openTab,
			busy	= accordion.vars.busy;

			$('dt').click(function(){
				//close any open tabs if they have a class of open
				var
				open		= $(this).next(b),
				tabImage	= $(this).find(a);
				if(!busy){
					if(!open.hasClass('opened')){
						_close();
						_open(open);
						accordion.vars.swapImage(a,$(this));
						this.busy = true;
					}
				}
			});
		}
	};
$(document).ready(function(){
	accordion.app.init();
});