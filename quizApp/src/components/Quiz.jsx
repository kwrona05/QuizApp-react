import { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const quizQuestions = [
  {
    question: "What is the purpose of the key attribute in React?",
    answers: [
      "It is used to style the elements",
      "It is used to uniquely identify elements in a list",
      "It is used to bind event handlers to elements",
    ],
    correctAnswer: "It is used to uniquely identify elements in a list",
  },
  {
    question:
      "Which hook is used to manage side effects in a functional React component?",
    answers: ["useState", "useEffect", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    question:
      "What is the default behavior of the useEffect hook if no dependencies are provided?",
    answers: [
      "It runs the effect only on the first render",
      "It runs the effect on every render",
      "It does not run at all",
    ],
    correctAnswer: "It runs the effect on every render",
  },
  {
    question:
      "Which of the following methods is used to update the state in a class-based React component?",
    answers: ["setState", "updateState", "changeState"],
    correctAnswer: "setState",
  },
  {
    question:
      "Which hook would you use if you wanted to replace setState with a more complex state logic in functional components?",
    answers: ["useState", "useEffect", "useReducer"],
    correctAnswer: "useReducer",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (answer) => {
    const isCorrect = answer === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} totalQuestions={quizQuestions.length} />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          onAnswerSelected={handleAnswerSelection}
        />
      )}
    </div>
  );
};

export default Quiz;
