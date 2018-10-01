/**
 * Young Amar Animate plugin for jQuery
 *
 * v1.0.0
 *
 * Copyright (c) 2017 Mama Amar
 *
 * 
 * 
 */
;(function($){
	$.fn.youngAmarAnimate = function(params){
		//les parametres par defaut
	    var defaults = {
			width : 200,
			height : 100,
			rapidy: 'fast',
			bg : 'white',
			callBack : null
		}
		//recuperation de l'objet window , on a aura besoin pour ajuster notre boite de dialogue
		var $window = $(window);
		
		//fusion des parametres par defaut et ceux donnes par l'utilisateur
		finalParams = jQuery.extend(defaults,params);
		//fonction animate qui animera la largeur et la hauteur de la boite de dialogue une fois affichee avec les parametres donnes
		//par l'utilisateur sinon les parametres par defauts
		function animate(elmnt)
		{
			elmnt.animate({
				height: finalParams.height+'px',
				width : finalParams.width+'px',
				left: ($window.width() - finalParams.width)/2+"px", // la marge gauche de la boite de dialogue deviendra : la largeur de la fenetre moins la largeur de la boite de dialogue divisee par 2 , l'autre moitie sera donc a la marge droite
				top : ($window.height() - finalParams.height)/2+"px" //la marge top(haut) de la boite de dialogue deviendra : la hauteur de la fenetre moins la hauteur de la boite de dialogue divisee par 2 , l'autre moitie sera donc a la marge bottom(bas)
		    },finalParams.rapidy, function(){
		//si une fonction de callBack existe, elle est tout simplement appelee
					if(finalParams.callBack)
					{
						finalParams.callBack();
					}						
			});
		}
		// pour assurer le chainage des elements utilisant ce plugin
		return this.each(function(){
		//applications des valeurs par defaut sur la boite de dialogue
			$(this).css({
				width : '200px',
				height: '100px',
				display : 'none',
				position : 'absolute',
				left : ($window.width() - 200)/2+"px",
				top: ($window.height() - 100)/2+"px",
				background : finalParams.bg
			});
			//animation: la boite de dialogue s'affiche avec l'effet fadeIn une seconde et la fonction animate avec l'effet "natif" animate est appelee pour agir sur l'objet courant en animant la largeur et la hauteur de la boite de dialogue
			$(this).fadeIn(1000, function(){
			    animate($(this));			   
			});
		});
	}
})(jQuery);