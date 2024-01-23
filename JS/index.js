
const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const phoneError = document.getElementById("phoneError")
const subjectError = document.getElementById("subjectError")
const errorMsg = document.getElementById("errorMsg")


// name 
function validateName(){
	const regName = /^[A-Za-z]+ [A-Za-z]+$/;
	const name = document.getElementById("name").value;
	if (name == '') {	
		nameError.innerHTML="Name required!";
		return false;
	}
	if (name.length < 3 || name.length > 25) {	
		nameError.innerHTML="Name length should be 3 to 25 charactors ";
		return false;
	}
	else if (!name.match(regName)) {	
		nameError.innerHTML="Full name reqiured";
		return false;
	}
	nameError.innerHTML= "Valid"
	return true;

}


// Phone 
function validatePhone(){
		const regPhone = /^[0-9]{10}$/;
	const phone = document.getElementById("phone").value;
	if (phone == '') {	
		phoneError.innerHTML="Phone required!";
		return false;
	}
	if (phone.length != 10) {	
		phoneError.innerHTML="10 Digits required";
		return false;
	}
	else if (!phone.match(regPhone)) {	
		phoneError.innerHTML="Invalid phone number and only digits required";
		return false;
	}
	phoneError.innerHTML= "valid"
	return true;
}

// Email 
function validateEmail(){
	const regEmail =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
	const email = document.getElementById("email").value;
	 if (!email.match(regEmail)) {	
		emailError.innerHTML="The email address is not valid";
		return false;
	}
	emailError.innerHTML= "valid"
	return true;
}

// Subject 
function validateSubject(){
	const regSubject = /^[A-Za-z]+$/; 
	const subject = document.getElementById("subject").value;
	if (subject.length < 5) {	
		subjectError.innerHTML="At least 5 char required";
		return false;
	}
	if (!subject.match(regSubject)) {	
		subjectError.innerHTML="Only charactors required";
		return false;
	}
	subjectError.innerHTML= "valid";
	return true;

}


const submitError = document.getElementById('submitError');

function submitForm(){
	if (!validateName() || !validatePhone() || !validateEmail() || !validateSubject() ) {
		errorMsg.innerHTML="Please fill the required field!"
		submitError.style.display="block"
		submitError.style.padding="10px"
		setTimeout( ()=>{
			submitError.style.display="none"
			submitError.style.padding="0px"

		},3000)

		return false;
		
	}
}









// Validate form 

// function vaidateMsg(){
// 	// Name validate 
// 	const regName = /^[A-Za-z]+ [A-Za-z]+$/;
// 	const name = document.getElementById("name").value;
// 	if (name.length < 3 || name.length > 25) {	
// 		nameError.innerHTML="Name length should be 3 to 25 charactors ";
// 		return false;
// 	}
// 	else if (!name.match(regName)) {	
// 		nameError.innerHTML="Full name reqiured";
// 		return false;
// 	}
// 	else{
// 	nameError.innerHTML= "Valid"
// 	// return true;
// 	}



// 	// Phone validate 
// 	const regPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
// 	const phone = document.getElementById("phone").value;
// 	if (phone.length != 10) {	
// 		phoneError.innerHTML="10 Digits required";
// 		return false;
// 	}
// 	else if (!phone.match(regPhone)) {	
// 		phoneError.innerHTML="Invalid phone number and only digits required";
// 		return false;
// 	}
// 	else{
// 	phoneError.innerHTML= ""
// 	}


// 	// Email Validate

// 	const regEmail =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
// 	const email = document.getElementById("email").value;
// 	 if (!email.match(regEmail)) {	
// 		emailError.innerHTML="The email address is not valid";
// 		return false;
// 	}
// 	else{
// 	emailError.innerHTML= ""
// 	}
	

// 	// Subject validate
// 	const regSubject = /^[A-Za-z]+$/; 
// 	const subject = document.getElementById("subject").value;
// 	if (subject.length < 5) {	
// 		subjectError.innerHTML="At least 5 char required";
// 		return false;
// 	}
// 	else if (!subject.match(regSubject)) {	
// 		subjectError.innerHTML="Only charactors required";
// 		return false;
// 	}
// 	else{
// 	subjectError.innerHTML= ""
// 	}
	
// 	// Subject validate
// 	const message = document.getElementById("message").value;
// 	if (message.length < 20 || message.length > 50 ) {	
// 		messageError.innerHTML="At least 20  to 50char required";
// 		return false;
// 	}
	
// 	else{
// 	messageError.innerHTML= ""
// 	}


// 	return true;
// }







	










