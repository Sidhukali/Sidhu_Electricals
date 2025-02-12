

//		WHILE LOOP AND PERSISTENT USER INPUT REQUEST

/* let name = prompt(" enter name ");
	//while (name==""){
	//	name=prompt(" please enter name ")
	//	} 
	//	count= name+name
	let length = name.length
	
	while (length < 2){
//	 	name =prompt(" enter valid name length to continue")
		console.log("the name is , " + name)
	
	
	 
	 }
	 console.log ("the name is, " + name) 
	 
	 while (name<" "){
		 if (name == ""){
		 	name = prompt("you have to enter name to continue ")
//		 	console.log("the name is," + name)
		 }
		 
		 else if(name == null){
		 	name = prompt("you cancelled but you have to enter name to continue")
		 	
		 }
		 
		 else {
		 	
		 	console.log("the last else  name is ," + name)
		 }
		 
	}
	while (name==null){
		name=prompt("sorry!! it seems you cancelled enter name to continue")
		while (name<" "){
		 	name=prompt("you have to enter name to continue")
		 	console.log("the name is," + name)
		 	
		 	 if (name==""){
			 	name=prompt("you have to enter name to continue")
	//		 	console.log("the name is," + name)
		 	}
			 else if(name==null){
			 	name=prompt("you cancelled but you have to enter name to continue")
			 	
			 }
			 else if(name < name.length(4)){
			 	name =prompt(" enter valid name to continue")
	//		 	console.log("the name is , " + name)
	 		 }
			 else {
			 	console.log("the last else  name is ," + name)
			 }
			 }
		 
	}
	
	
	console.log("the name is," + name)
	
	
		
		
		// the age value
		
		
	let age = prompt(" hello " + name + " enter your age ");
	
	 while (age<" "){
		 if (age==""){
		 	age=prompt("you have to enter age to continue")
		 	console.log("the age is," + age)
		 }
		 else if(age==null){
		 	age=prompt("you cancelled but you have to enter age to continue")
		 }
		 else {
		 	console.log("the age is," +age)
		 }
		 
	}
	while (age==null){
		age=prompt("sorry!! it seems you cancelled enter age to continue")
		while (age<" "){
		 	age=prompt("you have to enter name to continue")
		 	console.log("the age is," + age)
		 }
	}
	if (age==""){
	 	age=prompt("hello " + name +"you have to enter age to continue")
	 	console.log("the age is," + age)
	 	
	 }
	 else {
	 	console.log("the age is," + age)
	 }
	
	// email input
	let email = prompt("hello " + name + " enter your email  address ");	
	while (email<" "){
		 if (email==""){
		 	email=prompt("you have to enter address to continue")
		 	console.log("the email is," + email)
		 }
		 else if(email==null){
		 	email=prompt("you cancelled but you have to enter email to continue")
		 }
		 else {
		 	console.log("the email is," + email)
		 }
		 
	}
	while (email==null){
		email=prompt("sorry!! it seems you cancelled enter Email Address to continue")
		while (email<" "){
		 	email=prompt("you have to enter name to continue")
		 	console.log("the age is," + email)
		 }
	}
	
	console.log("the age is," + email)
	


	// age input
/*	if (age==""){
	 	age=prompt("hello " + name +"you have to enter age to continue")
	 	console.log("the age is," + age)
	 	
	 }
	 else {
	 	console.log("the age is," + age)
	 }


 // use ("*,/") to comment this part	
 
 
 
	if (email==""){
	 	email=prompt("you have to enter email to continue")
	 	console.log("the email is," + email)
	 	
	 }
	 else {
	 	console.log("the email is," + email)
	 }

// Id number input

	let Id_no = prompt("hello " + name + " enter your Id Number ");
	
	
	
	// Id_no input
	if (Id_no==""){
	 	Id_no=prompt("you have to enter Id Number to continue")
	 	console.log("the Id Number is," + Id_no)
	 }
	 else {
	 	console.log("the Id Number is," + Id_no)
	 }
	 
	 // phone input
	let Phone = prompt("hello " + name + " enter your phone number ");
	if (Phone==""){
	 	Phone=prompt("you have to enter phone number to continue")
	 	console.log("the phone number is," + Phone)
	 }
	 else {
	 	console.log("the phone number is," + Phone)
	 }
	 
	 // proffesion input
	let proffession = prompt("hello " + name + " enter your proffession ");
	if (proffession==""){
	 	proffesion=prompt("you have to enter your proffesion to continue")
	 	console.log("the proffesion is," + proffesion)
	 	
	 }
	 else {
	 	console.log("the proffesion is," + proffession)
	 }
	 
	 // password input
	 
	let password= prompt("hello " + name + " enter your password ");
	
	if (password==""){
	 	password=prompt("you have to enter your password to continue")
	 	console.log("the password is," + password);
	 	
	 }
	 else {
	 	console.log("the password is," + password);
	 }
    	// bring to the console the input values
    	
    	console. log ("**************************************************************************************************************************************")
    	console.log(" the phone number is , " + Phone);
    	console.log("the age is , " + age);
    	console.log(" the proffesion is , " + proffession);
    	console.log(" the id number is , " + Id_no);
    	console.log("the email is , " + email);
    	console.log("the password is , " + password);
 
 */
 
 // functions
 
 function myName(){
 	"john otieno"
 	}
function add(A,B){
	result = A + B ;
	console.log("the answer is :  " + result);

}
//funtions inside a variable// functions without  names  //

welcome = function(){
	return console.log("welcome to the sidhu it solutions  we are thrilled to  have you  arround")
	
}

welcome() //calling  the function with its variable name

// the sysntax is : function  (arguments / parameters) { execution}

function  dec1(){
	console.log("********************************* \n new line 1")
	
}
console.log ("this is a function declared with a function name \n ")
dec1() // this is declared  function but with the function name dec1 which also has no parameters passed to it . 
// the funtioned is then  called with the fuction name dirrectly.

dec2 = function (){
	console.log(":::::::::::::::::::::::::::::::::: ]\n new line")
}
console.log("this is variable funtion \n")
dec2()   // this is defined without the funtion name but the variable name dec2 is used instead for calling the fuction
// the parameters are  not defined on this form of  funtion decleration





		// 	DOCUMENT OBJECT MODULE
		//-------------------------------
/* let heading1 =document.createElement("h1")
heading1.textContent ="DOCUMENT OBJECT MODULE (DOM)"
document.body.appendChild(heading1)
let para = document.createElement("p")
para.textContent ="What sidhu has acomplished over the years. (This paragraph has been created automatically by the dom )"
document.body.appendChild(para)

let li =document.createELement("li")
li.textContent = "he is a pentester with a bachelors in penetration testing \n he is a cisco certified network associate(CCNA)" , "he has a bachelors in cybersecurity"
document.body.appendChild(li)

list = ("codding","exploration","Exploiting","Learning","modifying","creating","Developing","Hacking")
for (value of list ){
	let li = document.createElement("li")
	document.body.appendChild(list)}

console.log("this is the test valued sentence")

// 		TYPE WRITER
const services =("sofware development","Data science","Forein exchange and Forex","computer Engineering","Web development","Cryptograhy","Ethical Hacking and cyber-security","Computer programming")

let printletter= document.getElementsByClassName("loop");

printletter.textContent = "hello"

document.body.appendChild(printletter)

console.log(printletter);

let phrase = document.createElement("p")

phrase.textContent = "hello this is john"

document.body.appendChild(phrase)



// new  script typewritter

const dynamicContent = document.getElementById("dynamictext");

console.log(dynamicContent)const phrases =["sofware Engineer","Web Development","Data machine","machine laearning ...","programmer..."]
let phrasesIndex =0;
let letterindex=0;
const typingSpeed = 150;
const erasingSpeed = 75;

function printletters(phrase){
	if (letterIndex == phrase.length) {
		// clear entered text
		clearletters();
	}
	else i (letterIndex < phrase.length){
		dynamicContent.textContent = phrase.charAt(letterIndex);
		letterIndex ==1;
		setTimeout(function () {
			printletters(phrase)
		}, typingSpeed)
	}
}

function clearLetters(){
	if (letterindex == -1){
		pharseIndex = (pharseIndex + 1) % phrases.length;
		letterIndex  = 0;
		printletters(phrases[pharseindex])
		)
	}
	}
}
}
*/

// TYPE-WRITTER EFFECT
let textArea = document.getElementsByClassName("loop")
//console.log(textArea)

const dispText = ["software development","data analysis","database management","website development","malware develpment","ethical hacking","computer networking","computer engineering"];

let phraseIndex = 0;
let letterIndex = 0;
function clearLetters(){
	if(letterIndex == -1 ){
		phraseIndex = (phraseIndex +1) % phrases.length
		letterIndex = 0;
		
		printLetters(dispText[phraseIndex])
	
	}
	else if(letterIndex > -1){
		let updatedPhrase ="";
		
		for (let index = 0; index < letterIndex ; index ++){
		
			updatedPhrase += dispText[phraseIndex].charAt(index);
			
			
		}
		console.log(updatedPhrase);
		textArea.textContent += updatedPhrase
		setTimeout(clearLetters, 75);
		
	}
}
function printLetters(phrase) {
	if(letterIndex == phrase.length){
		clearLetters()
	}

	else if(letterIndex < phrase.length ){
		textArea.textContent += phrase.charAt(letterIndex);
		console.log(textArea)
		
		//for(let index = 0; index < phrase.length; index++ )
		letterIndex +=1;
		setTimeout (function(){
			printLetters(phrase)
		},100) ;
	};
//	textArea.textContent == phrase
}
printLetters(dispText[phraseIndex])
