window.promises = [
	  new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), getRandomTimeout())),
	  new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), getRandomTimeout())),
	  new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), getRandomTimeout())),
	  new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), getRandomTimeout())),
	  new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved"), getRandomTimeout()))
];

// Do not change the code above this
// add your promises to the array `promises`

function htmlelement(elementId,text){
	const element = document.getElementById("output");
	if(element){
		element.innerText = text;
	}
}

function getRandomTimeout(){
	return Math.floor(Math.random() * 5000) + 1000;
}

Promise.any(promises).then((result) => {
	htmlelement("output",result);
})

