const para = document.createElement("p")
para.textContent = "this is created using Dom api"
para.textContent = " this is a new line"
//document.body.appendChild("para")
const span = document.createElement("span")
span.id = "span-id"
span.className = "blue"
para.appendChild (span)
span.textContent = "this is span element created w5th Dom module"
span.textContent = " this is span element created w5th Dom module"
span.style.backgroundColor = "yellow"
span.style.color ="royal-blue"
span.style.color ="royalblue"
const h1 = document.createElement("h1")
h1.textContent =" First Heading"
h1.style.textAlign = "center"
h1.style.backgroundColor =" black"
h1.style.color = "blue"
h1.style.padding = "20px"
h1.style.padding = "20px"
h1.style.margin = "2em"
h1.style.border = "dashed"
document.appendChild(h1)
