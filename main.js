function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

	if (question1 == "5 percent") {
		correct++;
}
	if (question2 == "2triangles.") {
		correct++;
}
	if (question3 == "All.") {
		correct++;
	}

var messages = ["Great job!", "You did well, but not 100%. C'mon, really think!!","Try again. You can do it!!"];
var pictures = ["img/win.gif","img/decent_job_gif.gif", "img/fail.gif"]

var range;

	if (correct < 1) {
		range = 2;
	}
	
	if (correct > 0 && correct < 3) {
		range = 1;
	}
	
	if (correct > 2) {
		range = 0;
	}

document.getElementById("after_submit").style.visibility = "visible";



document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];
}