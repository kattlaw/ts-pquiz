import { useState } from 'react';
import { questions } from './questionList.js';
import "./questions.css";

function Question() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const renderResult = () => {

    };

    const renderQuestion = () => {
        if ( currentQuestion === questions.length) {
            return renderResult();
        }
        else {
            const question = questions[currentQuestion];

            return (
                <div className="question text-3xl">
                    <h2 className="pb-5">{question.text}</h2>
                   
                    <button className="choice text-xl space-y-5 p-5 ">
                       
                        {question.choices.map((answer, index) => (
                            <button key = {index}
                            onClick={() => handleAnswer(answer)}
                            className="flex flex-col rounded outline outline-2 outline-offset-4 outline-[#d8d4ce] hover:bg-[#7796cb]"
                            >
                                {answer}
                            </button>
                        ))}
                       
                    </button>
                 
                </div>
            )
        }
    }

    return (
        <div>{renderQuestion()}</div>
    )
}


export default Question;
