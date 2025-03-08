import "./SalmonDashboard.scss";
import coho from "../../assets/images/coho.png";

function SalmonDashboard() {
  return (
    <div className="salmon">
      <ul className="salmon__list">
        <li className="salmon__item">
          Coho <img src={coho} alt="coho salmon" className="salmon__image" />
          <ul className="salmon__details-list">
            <li className="salmon__details-item">Latin Name</li>
            <li className="salmon__details-item">Other common names</li>
            <li className="salmon__details-item">Average weight</li>
            <li className="salmon__details-item">Average Size</li>
            <li className="salmon__details-item">Life cycle</li>
          </ul>
        </li>
        <li className="salmon__item">Chinook</li>
        <li className="salmon__item">Pink</li>
        <li className="salmon__item">Sockeye</li>
        <li className="salmon__item">Chum</li>
      </ul>
    </div>
  );
}

export default SalmonDashboard;
