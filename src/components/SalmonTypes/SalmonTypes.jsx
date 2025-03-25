import { useState, useEffect } from "react";
import axios from "axios";
import "./SalmonTypes.scss";
import backButton from "../../assets/icons/back-button.png";
import forwardButton from "../../assets/icons/forward.png";
import exitButton from "../../assets/icons/close.png";

function SalmonTypes() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [salmonData, setSalmonData] = useState([]);
  const [selectedSalmon, setSelectedSalmon] = useState(null);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  useEffect(() => {
    async function getSalmon() {
      try {
        const response = await axios.get(`${baseURL}/salmon`);
        setSalmonData(response.data);
      } catch (error) {
        console.error("Error fetching salmon:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getSalmon();
  }, []);

  if (isLoading) {
    return <p>Loading numbers...</p>;
  }

  return (
    <div className="salmon">
      <h1 className="salmon__header">BC Wild Salmon Types</h1>
      <p className="salmon__subheader">Click each salmon below to learn more</p>
      <ul className="salmon__list">
        {salmonData.map((salmon) => {
          const details = [
            { label: "Latin Name", value: salmon.latinName },
            { label: "Other common names", value: salmon.otherNames },
            { label: "Average weight", value: salmon.averageWeight },
            { label: "Average Size", value: salmon.averageSize },
            { label: "Life cycle", value: salmon.lifeCycle },
            { label: "Did you know...", value: salmon.funFact1 },
            { label: "Did you know...", value: salmon.funFact2 },
            { label: "Did you know...", value: salmon.funFact3 },
            { label: "Did you know...", value: salmon.funFact4 },
          ];

          return (
            <li key={salmon.id} className="salmon__item">
              <div
                className="salmon__namecard"
                onClick={() => {
                  setSelectedSalmon(
                    selectedSalmon === salmon.id ? null : salmon.id
                  );
                  setCurrentDetailIndex(0);
                }}
              >
                <h1 className="salmon__title">{salmon.name}</h1>
                <img
                  src={`${baseURL}${salmon.image}`}
                  alt={salmon.name}
                  className={`salmon__image-card ${
                    selectedSalmon === salmon.id
                      ? "salmon__image-card--hide"
                      : ""
                  }`}
                />
              </div>

              {selectedSalmon === salmon.id && (
                <div className="salmon__details">
                  <img
                    src={exitButton}
                    alt="exit button"
                    className="salmon__icon salmon__icon--exit"
                    onClick={() => setSelectedSalmon(null)}
                  />
                  <img
                    src={`${baseURL}${salmon.image}`}
                    alt={salmon.name}
                    className="salmon__image"
                  />
                  <section className="salmon__info">
                    <img
                      src={backButton}
                      alt="back button"
                      className="salmon__icon"
                      onClick={() =>
                        setCurrentDetailIndex((prevIndex) =>
                          prevIndex === 0 ? details.length - 1 : prevIndex - 1
                        )
                      }
                    />
                    <ul className="salmon__details-list">
                      <li className="salmon__details-item">
                        {details[currentDetailIndex].label}
                        <h6 className="salmon__text">
                          {details[currentDetailIndex].value}
                        </h6>
                      </li>
                    </ul>
                    <img
                      src={forwardButton}
                      alt="forward button"
                      className="salmon__icon"
                      onClick={() =>
                        setCurrentDetailIndex((prevIndex) =>
                          prevIndex === details.length - 1 ? 0 : prevIndex + 1
                        )
                      }
                    />
                  </section>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SalmonTypes;
