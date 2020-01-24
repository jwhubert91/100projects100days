const clock = document.querySelector(".clock");

const tick = () => {

	const now = new Date();
	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();

	const timeHtml = `
		<span>${h}</span>
		<span>${m}</span>
		<span>${s}</span>
	`

	clock.innerHTML = timeHtml;

}

setInterval(tick, 1000);