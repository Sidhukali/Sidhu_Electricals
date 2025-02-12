	// TYPESCRIPT EFFECT
const type=document.getElementById ("type")

phraseIndex = 0;
letterIndex = 0;
list= ["software Engineering","Web Development","Data Analysis","System Administration", "Networking and network analysis","Security Auditing"]









function print(phrase){
	if(letterIndex == phrase.length){
		clearLetters();
	}
	else if(letterIndex < phrase.length){
		type.textContent += phrase.charAt(letterIndex)
		letterIndex +=1;
		setTimeout(function(){
			print(phrase)
		},100)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	




function clearLetters(){
	if(letterIndex == -1){
		phraseIndex = (phraseIndex+1) % list.length
		letterIndex =0;
		
		print(intro+list[phraseIndex])
		
	}
	else if(letterIndex > -1){
		let updatedPhrase ="";
		for(let index = 0 ; index < letterIndex; index++){
		updatedPhrase += list[phraseIndex].charAt(index)
		}
		
		
	
	type.textContent = updatedPhrase;
	letterIndex -=1;
	setTimeout(clearLetters,55)
	
	//type.textContent -= phrase.charAt(letterIndex)
	}
	}
}

print(intro+list[phraseIndex])

