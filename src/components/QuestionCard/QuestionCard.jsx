import "./QuestionCard.scss";

function QuestionCard() {
  return (
    <section className="question">
      <h2 className="question__text">
        How many species of salmon are there in British Columbia?
      </h2>
      <h3 className="question__text">
        Correct/Incorrect There are 5 species of salmon in British Columbia.
        Coho, Sockeye, Pink, Chinook, and Chum!
      </h3>
      <ul className="question__list">
        <li className="question__item">A. 3</li>
        <li className="question__item">B. 4</li>
        <li className="question__item">C. 5</li>
        <li className="question__item">D. 6</li>
      </ul>
    </section>
  );
}

export default QuestionCard;
