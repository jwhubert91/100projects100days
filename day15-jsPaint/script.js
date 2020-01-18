/* element selectors */
const colorSelectElement = document.querySelector("input[type=color]");
let colorTextOutput = document.querySelector("#color-rgb-output");
const bodyElement = document.querySelector("body");
const toolSelectorDivElement = document.querySelector(".selector-div");
const toolSelectorNodelist = document.querySelectorAll(".tool-button");
const mainElement = document.querySelector("main");
let mouseHeldBool = false;
let chosenToolSize = 1;
let eraser = false;

/* define global functions */
const setColorText = () => {
	let chosenRGB = colorSelectElement.value;
	colorTextOutput.textContent = chosenRGB;
}
const setPaintAreaHeight = () => {
	mainElement.style.height = (window.innerHeight - 80)
}
const paint = (e) => {
	let mouseXPos = e.pageX;
	let mouseYPos = e.pageY;
	paintDiv = document.createElement("div");
	if (eraser === false) {
		paintDiv.style.backgroundColor = colorSelectElement.value;
	} else {
		paintDiv.style.backgroundColor = "white";
	}
	paintDiv.style.borderRadius = "50%";
	paintDiv.style.height = chosenToolSize;
	paintDiv.style.width = chosenToolSize;
	paintDiv.style.position = "absolute";
	paintDiv.style.left = mouseXPos;
	paintDiv.style.top = mouseYPos;
	mainElement.appendChild(paintDiv);
}

/* functions to be run on page load */
setColorText();
setPaintAreaHeight();

/* event listeners and callbacks */
// color picker change
colorSelectElement.addEventListener("change", () => {
	setColorText();
	bodyElement.style.setProperty("--chosen-color", colorSelectElement.value);
})

// tool button click
toolSelectorDivElement.addEventListener("click",(e) => {
	// check if they pressed a tool button
	if (e.target.classList.contains("tool-button")) {
		toolSelectorNodelist.forEach(toolSelector => {
			toolSelector.classList.remove("active");
		})
		e.target.classList.add("active");
		eraser = false;
		switch(e.target.id) {
			case 'tool-0':
				chosenToolSize = 15;
				eraser = true;
				break;
			case 'tool-1':
				chosenToolSize = 1;
				break;
			case 'tool-2':
				chosenToolSize = 3;
				break;
			case 'tool-3':
				chosenToolSize = 10;			
		}
	}
})

// resize paint area when window is resized
window.addEventListener('resize', setPaintAreaHeight);

// if mouse is held down, paint
mainElement.addEventListener("mousedown",(e) => {
	mouseHeldBool = true;
})
mainElement.addEventListener("mouseup", (e) => {
	mouseHeldBool = false;
})
mainElement.addEventListener("mousemove", (e) => {
	if (mouseHeldBool === true) {
		paint(e);
	}
})

