import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import SalmonTypes from "./components/SalmonTypes/SalmonTypes";
import SalmonLifecycle from "./components/Lifecycle/Lifecycle";
import QuestionCard from "./Components/QuestionCard/QuestionCard";
function App() {
  return (
    <div className="app">
      <QuestionCard />
      <SalmonTypes />
      <SalmonLifecycle />
    </div>
  );
}

export default App;
