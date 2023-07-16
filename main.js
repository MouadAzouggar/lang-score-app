const f = document.getElementById("form");
const r = document.getElementById("reading");
const w = document.getElementById("writing");
const s = document.getElementById("speaking");
const l = document.getElementById("listening");
const btn = document.querySelector("button");
const z = document.getElementById("result-summary");

//show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = formControl.querySelector("small");
	small.innerText = message;
}

//show success color
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

//check required fields
function checkRequiredFields(inputArr) {
	let isValid = true;
	inputArr.forEach(function (input) {
		if (input.value.trim() === "") {
			showError(
				input,
				`${getFieldName(input)} score must be filled in [0-100]`
			);
			isValid = false;
		} else {
			showSuccess(input);
		}
	});
	return isValid;
}

// get fieldName
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listener
btn.addEventListener("click", function (e) {
	e.preventDefault();
	if (checkRequiredFields([r, w, s, l])) {
		showScore();
	}
});

// show score
function showScore() {
	console.log("showScore called");
	calculateScore();
	showHide();
}

// calculate score
function calculateScore() {
	console.log("calculateScore called");
	let reading = parseFloat(r.value);
	let writing = parseFloat(w.value);
	let speaking = parseFloat(s.value);
	let listening = parseFloat(l.value);

	let totalScore = (reading + writing + speaking + listening) / 4;

	if (totalScore >= 80) {
		document.querySelector(".result-rank").innerHTML = "Great Work";
		document.querySelector(".description").innerHTML =
			"Amazing! Your hard work has paid off.";
	} else if (totalScore >= 70) {
		document.querySelector(".result-rank").innerHTML = "Keep it up";
		document.querySelector(".description").innerHTML =
			"Good Job! you're doing great.";
	} else if (totalScore >= 50) {
		document.querySelector(".result-rank").innerHTML = "Not Bad";
		document.querySelector(".description").innerHTML =
			"Well, it's not bad, but you can do better.";
	} else {
		document.querySelector(".result-rank").innerHTML = "Not good";
		document.querySelector(".description").innerHTML =
			"Your score is not good at all, you need to work harder.";
	}

	document.querySelector(".total_score").innerHTML = totalScore.toFixed(2);
	document.querySelector(".reading_score").innerHTML = reading.toFixed(2);
	document.querySelector(".writing_score").innerHTML = writing.toFixed(2);
	document.querySelector(".speaking_score").innerHTML = speaking.toFixed(2);
	document.querySelector(".listening_score").innerHTML = listening.toFixed(2);

	console.log("Calculation is done");
	console.log(totalScore);
	console.log(reading);
	console.log(writing);
	console.log(speaking);
	console.log(listening);
}

// Toggle show or Hide class on calculator & result summary card
function showHide() {
	console.log("showHide called");
	f.classList.toggle("show");
	f.classList.toggle("hide");
	z.classList.toggle("show");
	z.classList.toggle("hide");
}
