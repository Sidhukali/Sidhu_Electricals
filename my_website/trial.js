document.addEventListener("MouseOver",function (){
	console.log("hovering over the page")

})

let head=document.getElementsByClassName("head")

head.textContent = ("DOCUMENT OBJECT MODULE by Sidhu John")

document.getElementById("start").addEventListener("click",function(){
	alert("keylogging started successfully")
	
// 	LOGIN
	let special = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","]","{","}","|","/","?",".",">"]
	
	document.getElementById("userName").addEventListener("click",function(){
		
		alert("focus mode")
	})

	document.addEventListener("mouseover",function(){
		console.log(Event)
	})
	document.getElementById("userInput").addEventListener("click",alert("all prohibited special characters are as below  "+ special[0]))
	document.getElementById("userInput").addEventListener("keydown",function(){
		/* 
		if (value.key == special[0||1||2||3||4||5||6||7||8||9||10||11||12||13||14||15||16||17||18||19||20]){
		console.log("the value is"+ value)
			value.preventDefault();
			alert("prevented by default : " + value)
		}
		*/
		
		if (event.key == "2"){
			event.preventDefault;
			//alert("prevented entry of " + event.key)
		}
		else {
			//console.log("key down event : "+ event.key)
			console.log(event.key);
		}
	})
	 
	 
	document.getElementById("userInput").addEventListener("keypress", function special(){
	 	if(event.key == "2" ){
	 		event.preventDefault;
//			console.log("special character not allowed") 	
	 	}
	 	else {
	 		console.log("not special character");
	 	}
	 }
	)		




	document.getElementById("userInput").addEventListener("keyup",function(){
		console.log("key up event : "+ event.key)})
		

	password = document.getElementById("password")

	
	document.getElementById("submit").addEventListener("click", function(){
		if (password.length <= 8 ){
			alert("the password must be  8 characters and above")
		}
		else {
			alert("confirmed")
		}
	})

	
	window.addEventListener("load",function(){console.log("everything has been loaded");
	alert("welcome to sidhu IT solutions we are thrilled to serve you");
	})
	document.addEventListener("unload",function(){ alert("this is document arbort ")})
	document.addEventListener("reload", function(){confirm ("the page refreshed successfully")})
	//document.add


	//	alert("you have clicked the start button");
	//	console.log("start button clicked")
	})
/*

document.getElementById("stop").addEventListener("click",function(){
	alert("keyllogging stoped")

// 	LOGIN
	document.getElementById("userName").removeEventListener("click",function(){
		
		alert("focus mode removed")
	})

	document.removeEventListener("mouseover",function(){
		console.log(Event)
	})
	document.getElementById("userInput").removeEventListener("keydown",function(){
		console.log("key down event : "+ event.key)
	
	})

	 
	 
	document.getElementById("userInput").removeEventListener("keypress", function special(){
	 	if(event.key == 2 ){
	 		
			console.log("special character not allowed") 	
	 	}
	 	else {
	 		console.log("not special character");
	 	}
	 })		




	document.getElementById("userInput").removeEventListener("keyup",function(){
		console.log("key up event : "+ event.key)})
		

	password = document.getElementById("password")

	/*
	document.getElementById("submit").addEventListener("click", function(){
		if (password.length <= 8 ){
			alert("the password must be  8 characters and above")
		}
		else {
			alert("confirmed")
		}
	})

//	
	window.addEventListener("load",function(){console.log("everything has been loaded");
	alert("welcome to sidhu IT solutions we are thrilled to serve you");
	})
	document.addEventListener("unload",function(){ alert("this is document arbort ")})
	document.addEventListener("reload", function(){confirm ("the page refreshed successfully")})
	//document.add


	//	alert("you have clicked the start button");
	//	console.log("start button clicked")
	})
	//alert("you have clicked the stop button");
	//console.log("stop button clicked")

*/
document.getElementById("stop").addEventListener("click",function(){
	alert("stopped key logger")
	document.getElementById("userInput").removeEventListener("keypress",function(){
		removeEventListener("keypress");
	})
	
	
})
let para = document.createElement("p")
para.textContent="hello and welcome to sidhu IT Solutions we offer ..."
document.body.appendChild(para)
let intro = "hello and welcome to sidhu IT Solutions we offer ..."

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


// how the events get executed
/*

document.querySelector(".parent").addEventListener("click", function(){
	console.log("parent clicked")
})

document.querySelector(".child").addEventListener("click", function(){
	console.log("child clicked")
})

/*
document.getElementsByClassName("subchild").addEventListener("click",function(){
	console.log("subchild clicked");
})


document.getElementById("subchild").addEventListener("click",function(){
	console.log("subchild clicked")
})
*/

//			 OR

/*
document.querySelector(".parent").addEventListener("click",function(){
	console.log("parent clicked");
	
})

document.querySelector(".child").addEventListener("click",function(){
	console.log("child clicked")
})

document.getElementById("subchild").addEventListener("click",function(event){
	console.log("propagation acquired on subchild")
	event.
})*/



// bullet
characters = ["A..a","B..b","C..c","D..d","E..e","F..f", "G..g","H..h","I..i","J..j", "K..k","L..l","M..m","N..n", "O..o","P..p","Q..q","R..r","S..s","T..t","U..u","V..v", "W..w","X..x","Y..y","Z..z"]
charIndex = 0;
letIndex =0;







function toggle(phrase){
	if (letIndex == phrase.length){
		clear();
	}
	
	else if(letIndex < phrase.length){

		bullet.textContent += phrase.charAt(letIndex);
		
		letIndex +=1;
		setTimeout(function(){
			toggle(phrase)
		}, 100)
		
	

	}
	
}





// clear text 

function clear(){
	if (letIndex == -1){
		charIndex =(charIndex+1) % characters.length;
		letIndex = 0;
		toggle(characters[charIndex]);
		
	}
	
	// concatenate letters
	
	else if(letIndex > -1){
		let upPhrase ="";
		for(let index=0; index < letIndex; index++ ){
		upPhrase += characters[charIndex].charAt(index)
		}
	bullet.textContent = upPhrase;
	letIndex -=1;
	setTimeout(clear, 100)
	
	}
}

toggle(characters[charIndex])

let input = document.getElementById("logger")
//input.textContent = "hello we are here"
//document.getElementById("userInput").addEventListener("focus",function(){
//	input.textContent = ("[ USER NAME ENTRY  ]...$_ ");
//})
 //document.getElementById("userInput").addEventListener("keydown", function(event){
//	console.log("the input is " + event.key)
//	input.textContent += event.key 
	
	//})

//document.getElementById("password").addEventListener("focus",function(pass){
//	input.textContent = "PASSWORD ENTRY ....$_ "
//})

//document.getElementById("password").addEventListener("keydown",function(pass){
	
//	input.textContent += pass.key
//})


	


		//	LOGIN
document.addEventListener("DOMContentLoaded",function(){
	document.querySelector("form").addEventListener("submit",function(event){
		
		event.preventDefault();
		console.log(event.target);
		const form = event.target
		password = form.password.value;
		confpass = form.confpassword.value;
		username = form.username.value;
		email = form.email.value;
		dob = form.dateofbirth.value;
		console.log("the username is: "+username)
		console.log("the email is : "+ email)
		console.log("the dob is : "+ dob)				
		console.log("the password is : "+password)
		console.log("the confirm password is : "+ confpass)
	
	
		alert("were are before the email DOM")
	
		if(confpass != password){
			event.preventDefault();
			alert("the password does not match")
		}
		else {
			
		let respond = confirm("confirm "+"  USER NAME : "+ username + "  EMAIL : "+ email + "  date of birth : " + dob)
		if(respond == true ){
			window.location.assign("/media/kali/DATA DRIVE/new.html")
			document.write("we have landed here now ")
				
		}
		
		else{
			alert("please confirm details to proceed ")
		}
		
		}
		
		})
	
})


document.getElementById("email").addEventListener("input",function(event){
	email = event.target;
	console.log(email.value);
	if(email.validity.typeMismatch){
		email.setCustomValidity("Enter email in the form abc@def.com")
		email.reportValidity
	}else{
	
		email.setCustomValidity("")
	}
	
	
})
//alert("were are after the email DOM")
