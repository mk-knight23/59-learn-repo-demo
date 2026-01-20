/* global $, alert, console*/

(function($) {

	"use strict";

	jQuery(document).ready(function(){

		/* Light Map Customizations */
		(function(){
			var map;
			map = new GMaps({
				el: '#map',
				lat: 30.609788,			// Change to your location's latitude
				lng: 32.268555,			// Change to your location's longitude
				scrollwheel:false,
				zoom: 17,
				zoomControl : true,
				panControl : false,
				streetViewControl : false,
				mapTypeControl: false,
				overviewMapControl: false,
				clickable: false
			});

			var image = '';
			map.addMarker({
				lat: 30.609788,			// Change to your location's latitude
				lng: 32.268555,			// Change to your location's longitude
				icon: image,
				animation: google.maps.Animation.DROP,
				verticalAlign: 'bottom',
				horizontalAlign: 'center',
				backgroundColor: '#d3cfcf',
			});

			var styles = [{"featureType": "administrative","elementType": "labels.text.fill","stylers":[{"color": "#444444"}]},{"featureType": "landscape","elementType": "all","stylers":[{"color": "#f2f2f2"}]},{"featureType": "poi","elementType": "all","stylers":[{"visibility": "on"}]},{"featureType": "poi","elementType": "geometry.fill","stylers":[{"visibility": "on"}]},{"featureType": "poi","elementType": "geometry.stroke","stylers":[{"visibility": "off"}]},{"featureType": "poi","elementType": "labels.text","stylers":[{"visibility": "on"}]},{"featureType": "poi","elementType": "labels.text.stroke","stylers":[{"visibility": "off"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"visibility": "on"}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers":[{"visibility": "on"}]},{"featureType": "poi.park","elementType": "geometry.stroke","stylers":[{"visibility": "off"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers":[{"visibility": "on"},{"color": "#323232"}]},{"featureType": "road","elementType": "all","stylers":[{"saturation": -100},{"lightness": 45},{"visibility": "on"},{"color": "#b0b0b0"}]},{"featureType": "road","elementType": "geometry.fill","stylers":[{"visibility": "on"},{"color": "#d5d5d5"}]},{"featureType": "road","elementType": "geometry.stroke","stylers":[{"visibility": "off"}]},{"featureType": "road","elementType": "labels.text","stylers":[{"color": "#262626"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers":[{"visibility": "off"}]},{"featureType": "road.highway","elementType": "labels.text.stroke","stylers":[{"visibility": "off"}]},{"featureType": "road.arterial","elementType": "labels.icon","stylers":[{"visibility": "off"}]},{"featureType": "transit","elementType": "all","stylers":[{"visibility": "off"}]},{"featureType": "transit.station.bus","elementType": "labels.icon","stylers":[{"visibility": "on"}]},{"featureType": "water","elementType": "all","stylers":[{"color": "#68afcd"},{"visibility": "on"}]}]

			map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
			});

			map.setStyle("map_style");
		}());

	});
})(jQuery);