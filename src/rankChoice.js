import { questions } from './questionList.js';

function rankChoice() {
    let values = ["A", "B", "C", "D"];
   

let resultList = [
    [0, 1, 0, 1], // A is connected to B and D
    [1, 0, 1, 0], // B is connected to A and C
    [0, 1, 0, 0], // C is connected to B
    [1, 0, 0, 0], // D is connected to A
];
    let scores = Array(values.length).fill(0)

    questions.forEach(question => {
        let index = values.indexOf(question.value);
        if(index !== -1) {
            for (let j = 0; j < values.length; j++) {
                if (resultList[index][j] === 1) {
                    scores[j]++;
                }
            }
        }
    });

    let maxScore = Math.max(...scores);
    let bestChoiceIndex = scores.indexOf(maxScore);

    return values[bestChoiceIndex];
}

export default rankChoice;