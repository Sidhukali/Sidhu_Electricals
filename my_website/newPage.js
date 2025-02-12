const name = (prompt("enter your name"))

//let add = document.getElementById("clickHere")

let para = document.createElement("p")

para.textContent = ("hello "  + name  +"  welcome to this page ")
document.body.appendChild(para)

/*function handleClick(event){
	alert("have clicked the button")
	
}

document.getElementById("start").addEventListener("click", function(){
	alert("you have clicked the start  button")
})


document.getElementById("stop").addEventListener("click", function handleClick(){
	alert("you have clicked the stop button")
})
//let stop = document.getElementById("stop")
//document.addEventListener("onClick",handleClick(start), alert("you clicked start button"));
//document.removeEventListener("onClick",handleClick(stop),console.log("you clicked the stop button"));
//console.log(handleClick)
*/
/*let start = document.getElementById("start")
start.addEventListener("click", function(){
	alert("hello " + name + " you have clicked the start button" )
})
*/
// TYPESCRIPT EFFECT

let effect = document.getElementsByClassName("effect")
console.log(effect)

const iter = document.getElementById("iter")
console.log(iter)
const dynamicContent= ["sofware engineering ... ","computer programing ... ","web development ... ","ethical hacking ... ","networking ... ","data analysis ... ","computer engineering ... "]

phraseIndex = 0;
letterIndex =0;
function print(phrase){
	dynamicText = phrase[phraseIndex];
	
	function clearLetters(){
		//iter.textContent="";
		iter.textContent -= phrase.charAt(letterIndex)
		letterIndex -=1;
		setTimeout(function(){
			print(phrase)
		},100)
	}
	if (letterIndex == phrase.length){
		clearLetters()
		//iter.textContent = "";
		
	}
	else if (letterIndex < phrase.length){
		iter.textContent += phrase.charAt(letterIndex);
		letterIndex +=1;
//		console.log(phrase[phraseIndex])
		//iter.textContent += phrase[phraseIndex]
	}
	// 	Set timeout syntax
	
	// setTimeout(anonymous function() {
	//	target(value)},timeout)
	setTimeout(function (){
		print(phrase)
	},100);
	
	/*for(index=0; phraseIndex < phrase.length; index++)
		console.log()
		letterIndex +=1;
		iter.textContent += phrase.charAt(letterIndex)
}
	else if(phraseIndex == phrase.length){
		iter.textconent ="";
		
	}*/
/*iter.textContent = phrase.charAt(letterIndex) 
		letterIndex =0;
		phraseIndex +=1;
		print(dynamicContent[phraseIndex])
}
*/
}
print(dynamicContent[phraseIndex]);
