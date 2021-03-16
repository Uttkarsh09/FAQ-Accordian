const questions = document.querySelectorAll(".question-box");
questions.forEach((q) => {
	q.addEventListener("click", () => {
		q.classList.toggle("show");
	});
});
