var numofgrid=6;
var color=generaterandomcolor(numofgrid);

var keeper=pickcolor();
var pickedcolor=keeper;
var square=document.querySelectorAll(".colors");
var pick=document.querySelector("#picked");
var h1=document.querySelector("h1");
var messegedisplay=document.querySelector("#messege");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


pick.textContent=keeper; 

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numofgrid=3;
	color=generaterandomcolor(numofgrid);
	keeper=pickcolor();
	pickedcolor=keeper;
	pick.textContent=keeper;
	sixnewcolor();

});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numofgrid=6;
	color=generaterandomcolor(numofgrid);
	keeper=pickcolor();
	pickedcolor=keeper;
	pick.textContent=keeper;
	sixnewcolor();


})

resetbutton.addEventListener("click",function(){
	color=generaterandomcolor(numofgrid);
	keeper=pickcolor();
	pickedcolor=keeper;
	pick.textContent=keeper;
	sixnewcolor();
	h1.style.background="steelblue";
	messegedisplay.textContent="";
	resetbutton.textContent="New Color";

});

sixnewcolor();
function sixnewcolor()
{
	for(var i=0;i<square.length;i++)
	{
		if(color[i])
		{
			square[i].style.background=color[i];
			square[i].style.display="block";
		}
		else
		{
			square[i].style.display="none";

		}
	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.background; 
		if(clickedcolor==pickedcolor)
		{
			messegedisplay.textContent="Correct";
			changecolor(clickedcolor);
			h1.style.background=clickedcolor;
			resetbutton.textContent="Play Again";
		}
		else
		{
			this.style.background="#232323";
			messegedisplay.textContent="Try Again"
		}
	});
	}
}

function changecolor(colors){
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=colors;
	}
}

function pickcolor(){
	 var random=Math.floor(Math.random()*color.length);
	 return color[random];
}

function generaterandomcolor(num)
{
	var ar=[];
	for(var i=0;i<num;i++)
	{
		var a,b,c;
		a=Math.floor(Math.random()*255);
		b=Math.floor(Math.random()*255);
		c=Math.floor(Math.random()*255);
		var str="rgb"+"("+a+", "+b+", "+c+")";
		ar.push(str);

	}

	return ar;
}