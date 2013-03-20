$(document).ready(function() {

	//
	// Single term and wildcard tests.
	//

	test("highlight single word", function() {
		$('#highlight_a').html('Tell me a story and then tell me again');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['tell']});
        equal($('#highlight_a').html(), "<span class=\"highlight_theme_a\">Tell</span> me a story and then <span class=\"highlight_theme_a\">tell</span> me again");
    });

	test("highlight multiple words", function() {
		$('#highlight_a').html('Tell me a story and then tell me again');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['tell', 'me']});
        equal($('#highlight_a').html(), "<span class=\"highlight_theme_a\">Tell</span> <span class=\"highlight_theme_a\">me</span> a story and then <span class=\"highlight_theme_a\">tell</span> <span class=\"highlight_theme_a\">me</span> again");
    });

	test("highlight whole word only", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['favour']});
        equal($('#highlight_a').html(), "It was quite a <span class=\"highlight_theme_a\">favour</span> that we got favourable weather is such an unfavourable situation");
    });

	test("highlight right hand wildcard", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['favour*']});
        equal($('#highlight_a').html(), "It was quite a <span class=\"highlight_theme_a\">favour</span> that we got <span class=\"highlight_theme_a\">favourable</span> weather is such an unfavourable situation");
    });

	test("highlight left hand wildcard", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*able']});
        equal($('#highlight_a').html(), "It was quite a favour that we got <span class=\"highlight_theme_a\">favourable</span> weather is such an <span class=\"highlight_theme_a\">unfavourable</span> situation");
    });

	test("highlight right and left hand wildcard", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*favour*']});
        equal($('#highlight_a').html(), "It was quite a <span class=\"highlight_theme_a\">favour</span> that we got <span class=\"highlight_theme_a\">favourable</span> weather is such an <span class=\"highlight_theme_a\">unfavourable</span> situation");
    });

	test("highlight italics", function() {
		$('#highlight_a').html('<i>It was quite a favour that we got favourable weather is such an unfavourable situation</i>');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['favour']});
        equal($('#highlight_a').html(), "<i>It was quite a <span class=\"highlight_theme_a\">favour</span> that we got favourable weather is such an unfavourable situation</i>");

		$('#highlight_a').html('<i>It was quite a favour that we got favourable weather is such an unfavourable situation</i>');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['favour*']});
        equal($('#highlight_a').html(), "<i>It was quite a <span class=\"highlight_theme_a\">favour</span> that we got <span class=\"highlight_theme_a\">favourable</span> weather is such an unfavourable situation</i>");

		$('#highlight_a').html('<i>It was quite a favour that we got favourable weather is such an unfavourable situation</i>');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*able']});
        equal($('#highlight_a').html(), "<i>It was quite a favour that we got <span class=\"highlight_theme_a\">favourable</span> weather is such an <span class=\"highlight_theme_a\">unfavourable</span> situation</i>");

		$('#highlight_a').html('<i>It was quite a favour that we got favourable weather is such an unfavourable situation</i>');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*favour*']});
        equal($('#highlight_a').html(), "<i>It was quite a <span class=\"highlight_theme_a\">favour</span> that we got <span class=\"highlight_theme_a\">favourable</span> weather is such an <span class=\"highlight_theme_a\">unfavourable</span> situation</i>");

		$('#highlight_a').html('<i>I am what I am.</i>');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['i']});
        equal($('#highlight_a').html(), "<i><span class=\"highlight_theme_a\">I</span> am what <span class=\"highlight_theme_a\">I</span> am.</i>");
    });

	//
	// Word boundary tests. .,“”<>\–\"\+!;:?-
	//

	test("highlight word ending in with .", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['situation']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable weather is such an unfavourable <span class=\"highlight_theme_a\">situation</span>.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['situation*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable weather is such an unfavourable <span class=\"highlight_theme_a\">situation</span>.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*situation']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable weather is such an unfavourable <span class=\"highlight_theme_a\">situation</span>.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*situation*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable weather is such an unfavourable <span class=\"highlight_theme_a\">situation</span>.");
    });

	test("highlight word ending with ,", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather, is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>, is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather, is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>, is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather, is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>, is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather, is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>, is such an unfavourable situation.");
    });

	test("highlight word starting and ending with “”", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable “weather” is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable “<span class=\"highlight_theme_a\">weather</span>” is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable “weather” is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable “<span class=\"highlight_theme_a\">weather</span>” is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable “weather” is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable “<span class=\"highlight_theme_a\">weather</span>” is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable “weather” is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable “<span class=\"highlight_theme_a\">weather</span>” is such an unfavourable situation.");
    });

	test("highlight word surrounded by <>", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable <weather> is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable &lt;<span class=\"highlight_theme_a\">weather</span>&gt; is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable <weather> is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable &lt;<span class=\"highlight_theme_a\">weather</span>&gt; is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable <weather> is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable &lt;<span class=\"highlight_theme_a\">weather</span>&gt; is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable <weather> is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable &lt;<span class=\"highlight_theme_a\">weather</span>&gt; is such an unfavourable situation.");
    });

	test("highlight word ending with -", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather- is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>- is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather- is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>- is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather- is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>- is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather- is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>- is such an unfavourable situation.");
    });

	test("highlight word starting and ending with \"", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable \"weather\" is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable \"<span class=\"highlight_theme_a\">weather</span>\" is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable \"weather\" is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable \"<span class=\"highlight_theme_a\">weather</span>\" is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable \"weather\" is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable \"<span class=\"highlight_theme_a\">weather</span>\" is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable \"weather\" is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable \"<span class=\"highlight_theme_a\">weather</span>\" is such an unfavourable situation.");
    });

	test("highlight word ending with +", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather+ is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>+ is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather+ is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>+ is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather+ is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>+ is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather+ is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>+ is such an unfavourable situation.");
    });

	test("highlight word ending with !", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather! is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>! is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather! is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>! is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather! is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>! is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather! is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>! is such an unfavourable situation.");
    });

	test("highlight word ending with ;", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather; is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>; is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather; is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>; is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather; is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>; is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather; is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>; is such an unfavourable situation.");
    });

	test("highlight word ending with :", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather: is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>: is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather: is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>: is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather: is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>: is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather: is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>: is such an unfavourable situation.");
    });

	test("highlight word ending with ?", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather? is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>? is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather? is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>? is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather? is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>? is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather? is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>? is such an unfavourable situation.");
    });

	test("highlight word ending with –", function() {
		$('#highlight_a').html('It was quite a favour that we got favourable weather– is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>– is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather– is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>– is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather– is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>– is such an unfavourable situation.");

		$('#highlight_a').html('It was quite a favour that we got favourable weather– is such an unfavourable situation.');
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['*weather*']});
        equal($('#highlight_a').html(), "It was quite a favour that we got favourable <span class=\"highlight_theme_a\">weather</span>– is such an unfavourable situation.");
    });

	test("highlight possessive words", function() {
		$('#highlight_a').html("Who ate the dog's breakfast?");
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['dog*']});
        equal($('#highlight_a').html(), "Who ate the <span class=\"highlight_theme_a\">dog's</span> breakfast?");
    });

	//
	// Language Tests
	//

	test("highlight russian", function() {
		$('#highlight_a').html("Ангелов песнь повтори мне");
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':['повтори']});
        equal($('#highlight_a').html(), "Ангелов песнь <span class=\"highlight_theme_a\">повтори</span> мне");
    });

	// Test is not working. Eventually will want to figure out CJK tests.
	test("highlight simplified chinese", function() {
		$('#highlight_a').html("述说天使怎样合唱");
		$('#highlight_a').highlighter({'class':'highlight_theme_a', 'terms':["天"]});
        equal($('#highlight_a').html(), "述说<span class=\"highlight_theme_a\">天</span>使怎样合唱");
    });

});
