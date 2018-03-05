function showPic(whichpic){
	var source=whichpic.getAttribute("href");
	var pic=document.getElementById("pic");
	pic.setAttribute("src",source);
	var text=whichpic.getAttribute("title");
	var ptx=document.getElementById("tx");
	ptx.firstChild.nodeValue=text;
}
