let john = "john";
const Name = document.getElementById("myName");
// Name.textContent = "nn";

document.getElementById("reload").addEventListener("click",function(){});
let h1 = document.createElement("h1");
h1.textContent= "ADDITIONAL RESOURCES";
h1.style.color = "blue";
h1.style.textAlign = "center";
h1.style.backgroundColor = "#fff";
let paragraph = document.createElement("p");
paragraph.textContent = " Hello and welcome to the sidhu Additional Resources place";
paragraph.style.padding = "20px";
paragraph.style.margin = "auto";
paragraph.style.alignContent = "center";
paragraph.style.display = "flex";
document.body.appendChild(h1,paragraph);
document.body.appendChild(paragraph);
let newWords= "Hello this is an added resource to the paragraph";
//paragraph += newWords;

//document.body.paragraph.appendChild(newWords);


// Function to type out the title letter by letter in a loop
function loopTitle(text, elementId, speed = 150, delay = 2000) {
  const titleElement = document.getElementById(elementId);
  let index = 0;

  const type = () => {
    if (index < text.length) {
      titleElement.textContent += text.charAt(index); // Add one letter at a time
      index++;
      setTimeout(type, speed); // Delay between letters
    } else {
      setTimeout(() => {
        titleElement.textContent = ""; // Clear the text
        index = 0; // Reset index for looping
        type(); // Restart typing
      }, delay); // Delay before restarting
    }
  };

  type(); // Start typing
}

// Example: Call the function to loop the title
const titleText = "Sidhu Electricals - Powering Your Future";
loopTitle(titleText, "dynamic-title", 100, 3000);

let heading_1 = document.createElement(h1);
heading_1.textContent="SIDHU AT JAVA";
document.body.appendChild(heading_1);

let txt = ["HEllo and welcome to the sidhu IT solutions website","hello"];
index = 1;
let para=document.createElement(p);
para.textContent=txt.charAt(index);
document.body.appendChild('para');

myName = prompt("Enter Your Name.");
document.getElementById(name_Button).addEventListener("click",function(){
  alert("you have clicked name");
  console.log(myName);
});

// document.getElementById("light").addEventListener("click",function(){
//   window.backgroundColor("white")
// })
// document.getElementById("dark").addEventListener("click",function(){
//   window.backgroundColor(black)
// })
// let theme = document.getElementById("background_theme");theme.addEventListener("onmouseover",function(){
//   alert("change background")
// })

// let products = document.createElement("div");
// products.createElement("h1")
// products.h1.textContent="OUR PRODUCTS"

// paragraph = products.createElement("p");
// // products.appendChild(paragraph);
// paragraph.textContent =(" Hello and Welcome To Our Products Section We have lots of products that we think and believe will be so beneficial to you. Please feel free to Take a look at all this products and ensure to have the best of the best in your project.");
// // document.body.appendChild("paragraph");
// document.body.appendChild(products);

// let products = document.createElement("div");
// products.className("products");
// let heading = products.createElement("h1");
// products.appendChild(heading)
// // let heading = document.createElement("h1")
// heading.textContent = ("OUR PRODUCTS");
// document.body.appendChild(heading);
// let p = products.createElement("p");
// p.textContent = ("WE are here to serve you to the best of our knowledge and we are thrilled to always have you arround us. Thank you for making us be what we are it has always been a pleasure. Please check out our products and services below tosee and behold the beuty that we as a people are presemting to you.");
// let prd= document.getElementsByClassName("products")
// prd.append(p);
// prd.append(heading)
// document.body.appendChild(prd)

// let hed = document.createElement("h1");
// hed.textContent = "THE WHAT WE HAVE BEEEN LOOKING FOR";
// document.body.appendChild('hed');

// // Create a new div element
// let newDiv = document.createElement("div");

// // Add text content
// newDiv.textContent = "Hello, I am a new div!";

// // Add an ID and class
// newDiv.id = "myDiv";
// newDiv.className = "box";

// Append it to the body or another element
// document.body.appendChild(newDiv);

// wimdow.alert("helloworld")
function lightMode(){
//   document.getElementById("light").addEventListener("click",function(){
//   document.body.style.backgroundColor="White";
// })
  document.body.style.backgroundColor="white"
}

function darkMode(){
  document.body.style.backgroundColor="#000000"
  document.body.style.color="#000"
  
  
}
function brownMode(){
  document.body.style.backgroundColor="#e68888"
}