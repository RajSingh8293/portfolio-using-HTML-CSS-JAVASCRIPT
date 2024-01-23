// Menu bar 
const close = document.querySelector("#close");
const navbar = document.querySelector(".navbar");
const open = document.querySelector("#open")

open.onclick = function () {
	navbar.classList.add("active");	
	// console.log("hello");
}

close.onclick = function () {
	navbar.classList.remove("active");	
	navbar.style.transition= "all ease 0.3s"; 
}











