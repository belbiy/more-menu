$(function() { 

	$('.top-bar').moreMenu();

});



;(function ( $, window, undefined ) {
	
	$.fn.moreMenu = function( options ) {

		var settings = $.extend( {
	//		'location'         : 'top',
	//		'background-color' : 'blue'
		}, options);

		var $this = $(this);
		var $menu = $this.find('.menu');
		
		var $menu_items = $menu.find('> li');
		var $more_menu = $this.find('.more-menu');
		var $more_dropdown = $more_menu.find('> li > .dropdown');
		var menu_width = $more_menu.width() + 20;

		var calculateMenu = function() {
			var container_width = $this.width() - menu_width;
			var elements_width = 0;

			$menu_items.each( function () {
				
				$current_element = $(this);
				elements_width += $current_element.width();

				if (elements_width >= container_width) {
					$more_menu.stop();
					$more_menu.fadeIn('fast');
					$more_menu.removeClass('hidden');
					
					$current_element.appendTo($more_dropdown);
				} 
				else {
					$current_element.appendTo($menu);
				}

			});

			if ( $more_dropdown.find('li').length == 1 ) {
				$more_menu.stop();
				$more_menu.fadeOut('fast');
				$more_menu.addClass('hidden');
			}

		}

		$(window).resize( calculateMenu );
		calculateMenu();

	};

}(jQuery, window));