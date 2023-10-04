import { useState } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../questionList.js';
import "../Question.css";


const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    //const [currentIndex, setCurrentIndex] = useState(0);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        setCurrentQuestion(currentQuestion + 1);
    };

   // const handleBackClick = () => {
      //  if (currentQuestion > 0) {
     //       setCurrentQuestion(currentQuestion => currentQuestion - 1);
     //   }
  //  };

    const renderResult = () => {

    };

    const renderQuestion = () => {
        if ( currentQuestion === questions.length) {
            return renderResult();
        }
        else {
            const question = questions[currentQuestion];

            return (
                
                <div className="Question">
                    <header className="title text-5xl font-bold py-2 font-['Bodoni_Moda'] font-semibold uppercase -mt-10">
                        The Eras Tour
                    </header>
                    <h1 className="text-2xl font-bold py-2 font-['Bodoni_Moda'] font-semibold uppercase">
                        Personality Test
                    </h1>
                 
                    <div className="text-2xl md:text-[29px] font-['IM_Fell_DW_Pica'] tracking-wide mt-[5rem]">
                   
                        <h2 className="pb-5">{question.text}</h2>
                    <div className="container mx-auto max-w-md md:max-w-3xl">
                  
                            <button className="flex flex-col md:m-auto text-[14px] md:text-xl space-y-1 p-5 md:space-y-5 font-['Schibsted_Grotesk']">
                       
                            {question.choices.map((answer, index) => (
                                <button key = {index}
                                onClick={() => handleAnswer(answer)}
                                className="hover:bg-[#7796cb]"
                                >
                                    {answer}
                                </button>
                            ))}
                            </button>
                        
                    </div>
                    </div>
                        {currentQuestion > 0 && (
                            <button 
                                class="rounded outline outline-offset-2 outline-2 px-2 hover:bg-[#7796cb] font-['IM_Fell_DW_Pica'] text-2xl italic mt-5"
                                onClick={() => setCurrentQuestion(currentQuestion => currentQuestion - 1)}>
                                Back
                            </button>
                        )}
                        {currentQuestion === 0 && (
                            <button 
                                class="rounded outline outline-offset-2 outline-2 px-2 hover:bg-[#7796cb] font-['IM_Fell_DW_Pica'] text-2xl italic mt-5">
                                <Link to='/'> Home </Link>
                            </button>
                   )}

                </div>
            )
        }
    }

    return (
        <>
        <div>{renderQuestion()}</div>
     
          
        </>
            
    )

  
}


export default Question;
