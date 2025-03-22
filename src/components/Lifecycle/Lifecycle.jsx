import "./Lifecycle.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Lifecycle() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [lifecycleData, setLifecycleData] = useState([]);

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

  return (
    <div className="lifecycle">
      <h1 className="lifecycle__title">Salmon Lifecycle</h1>
      <section className="lifecycle__card">
        <ul className="lifecycle__list">
          {lifecycleData.map((lifecycle) => (
            <li key={lifecycle.id} className="lifecycle__item">
              <h2 className="lifecycle__header">{lifecycle.header}</h2>
              <img
                src={`${baseURL}${lifecycle.image}`}
                alt={lifecycle.header}
              />
              <p className="lifecycle__text">{lifecycle.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Lifecycle;
