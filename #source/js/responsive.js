//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header-menu');
		var headerColumn=$('.header__column_s');
		var headerRowMenu=$('.header__menu');
	if(w<767){
		if(!headerColumn.hasClass('done')){
			headerColumn.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerColumn.hasClass('done')){
			headerColumn.removeClass('done').appendTo(headerRowMenu);
		}
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();