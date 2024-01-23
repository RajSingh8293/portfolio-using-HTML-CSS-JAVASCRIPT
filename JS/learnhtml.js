
// sidebar 

	var navLinks = document.getElementsByClassName('nav-links');
	var mainSection = document.getElementsByClassName('learn-section');
	function changeContent(idname) {
		for ( const btn of navLinks) {
				btn.classList.remove("active-link");
			}

		for (const mainSec of mainSection) {
			mainSec.classList.remove('active-section')	
		}

		event.currentTarget.classList.add("active-link");
		document.getElementById(idname).classList.add('active-section');	
	}





// show the output 

// function showOutput(){
// 	const btn = document.getElementById('see-output');
// const outputContainer = document.getElementById('code-box');

// btn.onclick = function (){
// 	console.log("Hello")
// }
// }
// showOutput();
