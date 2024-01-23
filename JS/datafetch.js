var data = [
	{
		img :"../Images/learnhtml5.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	},

	{
		img :"../Images/learncss3.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	},
	{
		img :"../Images/learnjavascript.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"
	}

]


// var newData = data.splice(0,data.length);



// This data is going home page in services 


var clutter = " ";
data.forEach((val)=>{
	clutter += `<div class="services-container">
	<div class="services-box">
		<img src="${val.img}" class="bx" alt="">
		<h3>${val.heading}</h3>
		<p>${val.para}</p>
		<a href="#" class="btn">${val.btn}</a>
	</div>
</div>`


})
document.getElementById('main-container').innerHTML= clutter;





