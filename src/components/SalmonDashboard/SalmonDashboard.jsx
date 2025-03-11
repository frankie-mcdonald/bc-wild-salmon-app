import { useState, useEffect } from "react";
import axios from "axios";
import "./SalmonDashboard.scss";

function SalmonDashboard() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [salmonData, setSalmonData] = useState([]);

  useEffect(() => {
    async function getSalmon() {
      try {
        const response = await axios.get(`${baseURL}/salmon`);
        setSalmonData(response.data);
        console.log(response.data);
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
      <ul className="salmon__list">
        {salmonData.map((salmon) => (
          <li key={salmon.id} className="salmon__item">
            {salmon.name}{" "}
            <img
              src={`${baseURL}${salmon.image}`}
              alt="coho salmon"
              className="salmon__image"
            />
            <ul className="salmon__details-list">
              <li className="salmon__details-item">
                Latin Name
                <h6 className="salmon__text">{salmon.latinName}</h6>
              </li>
              <li className="salmon__details-item">
                Other common names
                <h6 className="salmon__text">{salmon.otherNames}</h6>
              </li>
              <li className="salmon__details-item">
                Average weight
                <h6 className="salmon__text">{salmon.averageWeight}</h6>
              </li>
              <li className="salmon__details-item">
                Average Size
                <h6 className="salmon__text">{salmon.averageSize}</h6>
              </li>
              <li className="salmon__details-item">
                Life cycle
                <h6 className="salmon__text">{salmon.lifeCycle}</h6>
              </li>
              <li className="salmon__details-item">
                Did you know...
                <h6 className="salmon__text">{salmon.funFact1}</h6>
              </li>
              <li className="salmon__details-item">
                Did you know...
                <h6 className="salmon__text">{salmon.funFact2}</h6>
              </li>
              <li className="salmon__details-item">
                Did you know...
                <h6 className="salmon__text">{salmon.funFact3}</h6>
              </li>
              <li className="salmon__details-item">
                Did you know...
                <h6 className="salmon__text">{salmon.funFact4}</h6>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalmonDashboard;
