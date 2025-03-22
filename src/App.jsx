import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import SalmonTypes from "./components/SalmonTypes/SalmonTypes";
import SalmonLifecycle from "./components/Lifecycle/Lifecycle";
function App() {
  return (
    <>
      {/* <MainPage /> */}
      <SalmonTypes />
      <SalmonLifecycle />
    </>
  );
}

export default App;
