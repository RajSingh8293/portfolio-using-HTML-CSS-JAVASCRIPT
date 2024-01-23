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
	,
	{
		img :"../Images/learnphp.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	}
	,
	{
		img :"../Images/learnphp.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	}
	,
	{
		img :"../Images/Bootstrap.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	}
	,
	{
		img :"../Images/learnjavascript.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	}
	,
	{
		img :"../Images/learnjavascript.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	}
	,
	{
		img :"../Images/learnjavascript.png",
		heading : "Web Developer",
		para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio commodi nam velitliberomodi? Odio numquam, illo asperiores fugit eligendi voluptates optio voluptatem, fugiat eapraesentium quam repellendus amet, autem nobis.",
		btn : "Read More"

	}

]



// concat method 
// var newArray = data.concat(data2);

// spred method 
// var newArray = [...data, ...data2];


var clutter2 = "";
data.forEach((val)=>{
	clutter2 += `<div class="services-container">
	<div class="services-box">
		<img src="${val.img}" class="bx" alt="">
		<h3>${val.heading}</h3>
		<p>${val.para}</p>
		<a href="/All_Files/services.html" class="btn">${val.btn}</a>
	</div>
</div>`;

})


// console.log(clutter2);


document.getElementById('main-container2').innerHTML = clutter2;
