const Question = (questionData, onAnswerSelected) => {
  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div>
        {questionData.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswerSelected(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Question;
