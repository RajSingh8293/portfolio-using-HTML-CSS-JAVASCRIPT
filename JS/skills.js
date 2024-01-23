document.getElementById("skillLevel").style.display="block"
document.getElementById("skillImg").style.display="none"


const changeContent=()=>{
	
		const GraphicalUI=document.getElementById("skillLevel")
		const textUI=document.getElementById("skillImg")
	
		if(GraphicalUI.style.display=="block"){
			GraphicalUI.style.display='none'
			textUI.style.display='flex'
		}
		else{
			GraphicalUI.style.display='block'
			textUI.style.display='none'
		   
		}
	  
	}
	



