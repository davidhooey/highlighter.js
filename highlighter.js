(function( $ ) {
	$.fn.highlighter = function(options) {
		// this is a jQuery object. No need to do $(this)
		
		// Options
		// 
		// $('div').highlighter({
		//  'class' : 'highlighter',
		//  'terms' : searchTerms
		// });
		var settings = $.extend( {
	    	'class' : 'highlight',
	    	'terms' : []
	    }, options);
	    
		// Returns the jQuery object for chainablity
		return this.each(function() {
			if (settings.terms.length > 0) {
				var cjk_range1 = "[\u4E00-\u9FFF]";
				var cjk_range2 = "[\u3400-\u4DBF]";
				var data = $(this).html();
				var boundary_chars = " \n\r\t.,“”<>\–\"\+!&;:?-";
								
				$.each(settings.terms, function(term) {
					// Required RegEx for Russian and likely all non-ASCII characters.
					// (^\|[ \n\r\t.,<>'\"\+!?-]+)(faith[^ \n\r\t.,<>'\"\+!?-]*)([ \n\r\t.,<>'\"\+!?-]+\|$)
					if (settings.terms[term].search(/^\*(.+)\*$/) != -1) {
						data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)([^" + boundary_chars + "]*" + settings.terms[term].replace(/\*/g,'') + "[^" + boundary_chars + "]*)([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
					}
					else if (settings.terms[term].search(/^\*(.+)$/) != -1) {
						data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)([^" + boundary_chars + "]*" + settings.terms[term].replace(/\*/g,'') + ")([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
					}			
					else if (settings.terms[term].search(/^(.+)\*$/) != -1) {
						data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)(" + settings.terms[term].replace(/\*/g,'') + "[^" + boundary_chars + "]*)([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
					}
					else if (settings.terms[term].search(/^(.+)$/) != -1) {
						if (RegExp("(" + cjk_range1 + ")|(" + cjk_range2 + ")").test(settings.terms[term])) {
							data = data.replace(settings.terms[term], "<span class='" + settings.class + "'>" + settings.terms[term] + "</span>", 'gi');
						}
						else {
							data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)(" + settings.terms[term] + ")([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
						}
					}
				});
				$(this).html(data);
			}
	    });
	};
})( jQuery );
