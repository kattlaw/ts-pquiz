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
                <div className="question text-xl">
                    <h2 className="pb-5">{question.text}</h2>
                   
                    <button className="choice text-lg space-y-5 p-5 ">
                       
                        {question.choices.map((answer, index) => (
                            <button key = {index}
                            onClick={() => handleAnswer(answer)}
                            className="grid grid-cols hover:bg-[#7796cb]"
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
