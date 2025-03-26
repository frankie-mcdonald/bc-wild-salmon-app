import "./QuestionCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function QuestionCard() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    async function getQuiz() {
      try {
        const response = await axios.get(`${baseURL}/quiz`);
        setQuizData(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getQuiz();
  }, []);

  if (isLoading) {
    return <p>Loading question...</p>;
  }

  if (quizData.length === 0) {
    return <p>No quiz data available.</p>;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion.answer);
  };

  return (
    <section className="question">
      <h2 className="question__text">{currentQuestion.question}</h2>
      <h3 className="question__text">
        {selectedAnswer !== null
          ? isCorrect
            ? "Correct! 🎉"
            : "Incorrect ❌"
          : ""}
      </h3>
      {selectedAnswer !== null && (
        <p className="question__text">{currentQuestion.fact}</p>
      )}
      <ul className="question__list">
        {["a", "b", "c", "d"].map((key, index) => (
          <li
            key={index}
            className="question__item"
            onClick={() => handleAnswerClick(currentQuestion[key])}
          >
            {currentQuestion[key]}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionCard;
