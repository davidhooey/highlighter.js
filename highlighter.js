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

				$.each(settings.terms, function(i, term) {
					// Required RegEx for Russian and likely all non-ASCII characters.
					// (^\|[ \n\r\t.,<>'\"\+!?-]+)(faith[^ \n\r\t.,<>'\"\+!?-]*)([ \n\r\t.,<>'\"\+!?-]+\|$)

					// Special handle for the word 'I' as it also matches <i> tags.
					if (term.toLowerCase() === "i") {
						var word_split = data.split(" ");
						$.each(word_split, function(w, word) {
							if (word.toLowerCase() === '<i>i') {
								word_split[w] = "<i><span class='" + settings.class + "'>I</span>";
							}
							else if (word.toLowerCase() === 'i</i>') {
								word_split[w] = "<span class='" + settings.class + "'>I</span></i>";
							}
							else {
								word_split[w] = word.replace(RegExp("(^\|[" + boundary_chars + "]+)(" + term + ")([" + boundary_chars + "]+\|$)", 'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
							}
						});
						data = word_split.join(" ");
					}
					else if (term.search(/^\*(.+)\*$/) != -1) {
						data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)([^" + boundary_chars + "]*" + term.replace(/\*/g,'') + "[^" + boundary_chars + "]*)([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
					}
					else if (term.search(/^\*(.+)$/) != -1) {
						data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)([^" + boundary_chars + "]*" + term.replace(/\*/g,'') + ")([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
					}
					else if (term.search(/^(.+)\*$/) != -1) {
						data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)(" + term.replace(/\*/g,'') + "[^" + boundary_chars + "]*)([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
					}
					else if (term.search(/^(.+)$/) != -1) {
						if (RegExp("(" + cjk_range1 + ")|(" + cjk_range2 + ")").test(term)) {
							data = data.replace(term, "<span class='" + settings.class + "'>" + term + "</span>", 'gi');
						}
						else {
							data = data.replace(RegExp("(^\|[" + boundary_chars + "]+)(" + term + ")([" + boundary_chars + "]+\|$)",'gi'), "$1<span class='" + settings.class + "'>$2</span>$3", 'gi');
						}
					}
				});
				$(this).html(data);
			}
	    });
	};
})( jQuery );
