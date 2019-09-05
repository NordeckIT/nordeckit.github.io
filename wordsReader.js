/**
 * Created by hatonordeck on 03.07.16.
 */

var generateCert = function () {
    //alert("hallo");
 	//title
 	var titles = textComponents[0].title.split(";");
 	var title = randWord(titles);
	document.getElementById('certTitle').innerHTML=title;
	//names
	var names = textComponents[0].name.split(";");
	document.getElementById('name').innerHTML=randWord(names);
	//words
	var verbs = textComponents[0].verb.split(";");
	var whats = textComponents[0].what.split(";");
	var hows = textComponents[0].how.split(";");
	var whatagains = textComponents[0].whatagain.split(";");
	var whatfors = textComponents[0].whatfor.split(";");
	document.getElementById('words').innerHTML=randWord(verbs)+" "+randWord(whats)+" "+randWord(hows)+" "+randWord(whatagains)+" "+randWord(whatfors);
   
}

var randWord = function(wordsArray) {
	var randomNumberOfArr = rand(0,wordsArray.length-1);
	//alert("randomNumberOfArr = "+ randomNumberOfArr);
	var word = wordsArray[randomNumberOfArr];
	//alert("word= "+word);
	return word;
}

var rand = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}