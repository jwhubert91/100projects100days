// element grabbers
const mainElement = document.querySelector("main");
const textareaElement = document.querySelector("textarea");
const outputElement = document.querySelector("output-container");
const navButtonDivElement = document.querySelector(".nav-button-container");
const navButtonsNodelist = document.querySelectorAll(".nav-button");
let textOutputSelected = true;

// global functions
const mainElementHeight = function() {
	mainElement.style.height = window.innerHeight - 50;
}

const renderOutput = function() {
	let outputText = document.createElement("p");
	outputText.textContent = textareaElement.value;
	outputElement.append(outputText);
}

// document setup
mainElementHeight();

// event listeners
window.addEventListener('resize', () => {
	mainElementHeight();
});

navButtonDivElement.addEventListener('click', (e) => {
	if (e.target.classList.contains("nav-button")) {
		if (!e.target.classList.contains("nav-button-active")) {
			// first, remove active from all buttons
			navButtonsNodelist.forEach(button => {
				button.classList.remove("nav-button-active");
			})
			// then add it to the clicked target
			e.target.classList.add("nav-button-active");
			// then switch the selected output bool
			textOutputSelected = !textOutputSelected;
			console.log(textOutputSelected);
		}
	}
})

textareaElement.addEventListener('change',() => {
	renderOutput();
})

textareaElement.addEventListener('keydown', () => {
	renderOutput();
})

textareaElement.addEventListener('paste', () => {
	renderOutput();
})