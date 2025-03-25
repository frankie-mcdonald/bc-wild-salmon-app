import "./Lifecycle.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import forwardArrow from "../../assets/icons/forward.png";
import backArrow from "../../assets/icons/back-button.png";

function Lifecycle() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [lifecycleData, setLifecycleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current item

  useEffect(() => {
    async function getLifecycle() {
      try {
        const response = await axios.get(`${baseURL}/lifecycle`);
        console.log("API Response:", response.data);
        setLifecycleData(response.data);
      } catch (error) {
        console.error("Error fetching lifecycle:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getLifecycle();
  }, []);

  if (isLoading) {
    return <p>Loading salmon lifecycle...</p>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lifecycleData.length);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="lifecycle">
      <h1 className="lifecycle__title">Salmon Lifecycle</h1>
      <section className="lifecycle__card">
        {lifecycleData.length > 0 && (
          <div className="lifecycle__item">
            <h2 className="lifecycle__header">
              {lifecycleData[currentIndex].header}
            </h2>
            <div className="lifecycle__image--div">
              <img
                src={backArrow}
                alt="Back arrow button"
                className="lifecycle__icon"
                onClick={handlePrev}
                style={{
                  opacity: currentIndex === 0 ? 0.1 : 1,
                  cursor: currentIndex === 0 ? "default" : "pointer",
                }}
              />
              <img
                src={`${baseURL}${lifecycleData[currentIndex].image}`}
                alt={lifecycleData[currentIndex].header}
                className="lifecycle__image"
              />
              <img
                src={forwardArrow}
                alt="Forward Arrow button"
                className="lifecycle__icon"
                onClick={handleNext}
              />
            </div>

            <p className="lifecycle__text">
              {lifecycleData[currentIndex].text}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Lifecycle;
