(function () {
    var questions = [
        "Little interest or pleasure in doing things",
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself or that you are a failure or have let yourself or your family down ",
        "Trouble concentrating on things, such as studying or watching movies",
        "Moving or speaking so slowly or behaving restlessly than usual",
        "Thoughts that you would be better off dead,or of hurting yourself"
    ]
    var ch = 0;
    var depressionCount = 0;

    displayQuestions();

    function displayQuestions() {
        if (ch < 9) {
            document.getElementById('q').innerHTML = questions[ch];
            ch++;
        } else {
            displayResult(depressionCount);
        }
    }


    var o1 = document.getElementById("o1");
    var o2 = document.getElementById("o2");
    var o3 = document.getElementById("o3");
    var o4 = document.getElementById("o4");


    o1.onclick = function () {
        displayQuestions();
    };
    o2.onclick = function () {
        depressionCount += 1;
        displayQuestions();
    };
    o3.onclick = function () {
        depressionCount += 2;
        displayQuestions();
    };
    o4.onclick = function () {
        depressionCount += 3;
        displayQuestions();
    };
})();

function displayResult(s) {
    document.getElementById('question').classList.add("opac");
    document.getElementById('options').classList.add("opac");
    document.getElementById('res').classList.remove('opac');
    var str;
    if (s <= 4) {
        str = "Minimal depression";
    } else if (s > 4 && s <= 9) {
        str = "Mild depression";
    } else if (s > 9 && s <= 14) {
        str = "moderate depression";
    } else if (s > 14 && s <= 19) {
        str = "Moderately severe depression";
    } else {
        str = "severe depression";
    }
    document.getElementById('r').innerHTML = "Result:\n" + str;
    console.log(s);
}