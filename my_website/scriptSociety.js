let para = document.createElement("p")
para.textContent = "this paragraph has been added automatically by the browser"
document.body.appendChild(para)
let para2 = document.createElement("p")
para2.textContent = "this is the second paragraph created programatcally using dom "
document.body.appendChild(para2)

// 		TYPEWRITTER EFFECT
	// get element id from the main page
const dynamicContent=document.getElementById("dynamicText")

	//log the result 
console.log(dynamicContent)

//console.log(dynamicContent.length)

	// make a constant variable that will be reiterated every time
const phrases = [" ... we are all but what we are because of you ...", " thank you for reaching out to us ...", " we are so much  so very   much entrigged by your way of doing things and you we are thrilled to have you around  ..." , "cybersecurity analyst ..." , "engineer..." , "software developer"]

// variable to keep track of numbers we have used so far begin from 0

let phraseIndex = 0;
let letterIndex = 0; 
const typingSpeed = 150;
const erasingSpeed = 75;
	// a function that when called logs a char one by one // the phrase will be the value entered but because we are storing the iterable in a variable phrases we will give a place holder phrase or any name of choice to allow input of iterable statement.
	
function printLetters(phrase) {
/*	for(let index = 0 ; index < phrase.length; index++){
	console.log(phrase.charAt(index));
	}// when we log this it prints a single character based on the char index
	
	// we then pass the phrase to the main page now not logging it .
	dynamicContent.textContent= phrase; 
	--->>> all the above we manually updated but we want it to be automated 
*/ 	
	// we then give  a timeout for the output so as it comes out not instantly but gradually.
	// the synatax is  --- setTimeout(function reference , delay value in miliseconds ) 1000ms = 1sec

	if(letterIndex == phrase.length){
		//clear letter which has been typed
		clearLetters();
	}
	else if(letterIndex < phrase.length){
		dynamicContent.textContent += phrase.charAt(letterIndex);
		console.log(letterIndex)
		console.log(phrase)
		letterIndex +=1;
		// create an anonymous function
		setTimeout(function(){
			printLetters(phrase)
		},typingSpeed)
	
	}
	
}

// we then call the printLetters function and we pass the value phrases to it.

function clearLetters(){
	if (letterIndex == -1 ){
		phraseIndex = (phraseIndex+1) % phrases.length; //modulasrs to check wheteher its divisible by length of phrases.
		letterIndex =0; // reset letter index to zero in order to start again.
		printLetters(phrases[phraseIndex])
	}
	else if(letterIndex > -1){
		let updatedPhrase = "";
		for(let index = 0; index < letterIndex; index ++){
			updatedPhrase +=   phrases[phraseIndex].charAt(index);
	}
	console.log(updatedPhrase) // visually see whats happenning in the code
	dynamicContent.textContent = updatedPhrase; // append to the dynamic content the new values
	letterIndex -=1; // reduce the value by 1
	setTimeout(clearLetters, erasingSpeed) // delay o 100 miliseconds
	}
}


printLetters(phrases[phraseIndex]) 
