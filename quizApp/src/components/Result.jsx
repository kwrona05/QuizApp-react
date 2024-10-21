const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2>Quiz finished</h2>
      <p>
        Your score {score} out of {totalQuestions}
      </p>
    </div>
  );
};
export default Result;
