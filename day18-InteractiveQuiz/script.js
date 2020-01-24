const correctAnswers = ["B","B","A","A"];
const formElement = document.querySelector("form.quiz-form");
const resultSpanElement = document.querySelector("#result-span");
const resultContainerElement = document.querySelector("#result-container");

// form submit event listener and callback
formElement.addEventListener("submit",e => {
	e.preventDefault();

	let score = 0;
	const userAnswers = [formElement.q1.value,formElement.q2.value,formElement.q3.value,formElement.q4.value];

	// check answers
	userAnswers.forEach((answer,index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	})

	// reveal result container
	resultContainerElement.classList.remove("d-none");
	// scroll to top
	scrollTo(0,0);

	// animate score increase
	let output = 0;
	const timer = setInterval(() => {
		resultSpanElement.textContent = `${output}%`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	},10);
});