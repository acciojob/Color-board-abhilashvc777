//your JS code here. If required.
let body = document.querySelector("body")
let div = document.createElement("div")
div.className = "container"
for(let i=1; i<=20; i++){
	let div1 = document.createElement("div")
	div1.className = "row"
	for(let j=1; j<=40; j++){
		let div2 = document.createElement("div")
		div2.className = "square"
		div2.style.height = "15px";
		div2.style.width = "15px"
		div2.style.border = "1px solid"
		div2.style.backgroundColor = "rgb(29, 29, 29)"
		div1.appendChild(div2)
	}
	div.appendChild(div1)
}
body.appendChild(div)
function colorPicker(e){
    let x = Math.round(Math.random()*255)
	let y = Math.round(Math.random()*255)
	let z = Math.round(Math.random()*255)
 e.target.style.backgroundColor = `rgb(${x},${y},${z})`
setTimeout(()=>{
	e.target.style.backgroundColor = "rgb(29, 29, 29)"
},1000)
}
div.addEventListener("mouseover",colorPicker)