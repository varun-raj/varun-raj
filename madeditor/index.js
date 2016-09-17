
var editor = document.getElementById("editor");
var html = document.getElementById("html");
var iframe = document.getElementById("html2");
var style = document.getElementById("style");

iframeDoc = iframe.contentDocument,
iframeBody = iframeDoc.body,
iframeHead = iframeDoc.head,

iframeStyle = document.createElement('style');

editor.oninput=function(){
	iframeBody.innerHTML = editor.value
}

style.oninput = function() {

	var newCSS = document.createTextNode(style.value);
	iframeStyle.innerHTML = "";
	iframeHead.innerHTML = "";
	
	iframeStyle.appendChild(newCSS);
  	iframeHead.appendChild(iframeStyle);
}
