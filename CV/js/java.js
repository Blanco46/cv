let btn = document.getElementById('btn');
btn.addEventListener("click", myFunction);

function myFunction() {
	let element = document.body;
	element.classList.toggle("dark-mode");
}

