var ques = [
    {
        question: "Capital of India?",
        answers: {
            a: 'Delhi',
            b: 'China',
            c: 'New Delhi',
            d: 'None of these'
        },
        correctAnswer: 'a'
    },
    {
        question: "IIIT Hyderabad or IIT Bombay?",
        answers: {
            a: 'IIIT Hyderabad',
            b: 'IIT Bombay',
            c: 'Both',
            d: 'somehow depends on student'
        },
        correctAnswer: 'd'
    },
    {
        question: "Is india really democratic?",
        answers: {
            a: 'Yes',
            b: 'Absolutely Yes',
            c: 'Hitler',
            d: 'None of these'
        },
        correctAnswer: 'b'
    }
];
var quizWindow = document.getElementById('quiz');
var resultWindow = document.getElementById('results');
var submitButton = document.getElementById('submit');
getready(ques, quizWindow, resultWindow,submitButton);
function getready(ques, quizWindow, resultWindow, submitButton)
{
    function showQues(ques, quizWindow)
    {
        var select = [];
        var ans;

        for(var i=0; i<ques.length; i++)
        {
            ans=[];
            for(letter in ques[i].answers)
            {
                ans.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + ques[i].answers[letter] 
                    + '</label>');
            }
            select.push(
                '<div class="question">' + ques[i].question + '</div>'
                + '<div class="ans">' + ans.join('') + '</div>'
            );
        }
        quizWindow.innerHTML = select.join('');
    }

    function showResults(ques, quizWindow, resultWindow)
    {
        var answerContainers = quizWindow.querySelectorAll('.ans');

        var userAnswer = '';
        var numCorrect = 0;
        for(var i=0; i<ques.length; i++)
        {

            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer==ques[i].correctAnswer)
            {
                numCorrect++;
                
                
                answerContainers[i].style.color = 'blue';
            }
            else
            {
                answerContainers[i].style.color = 'red';
            }
        }
    resultWindow.innerHTML = ' Total Score = ' + numCorrect;
    }
    showQues(ques, quizWindow);
    submitButton.onclick = function()
    {
        showResults(ques, quizWindow, resultWindow);
    }
    

}