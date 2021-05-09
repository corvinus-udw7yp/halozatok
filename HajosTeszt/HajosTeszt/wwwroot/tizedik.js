var hotList = [];               //Az éppen gyakoroltatott kérdések listája
var questionsInHotList = 3;     //Ez majd 7 lesz, teszteléshez jobb a 3.
var displayedQuestion;          //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;          //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;           //A következő kérdés száma a teljes listában

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers : 0

        }

        hotList[i] = q;
    }

    //Kezdőkérdéslista letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }

}

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)   
    .then()
}