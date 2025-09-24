import "../src/Styles/app.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-container">
        <FunctionComponent />
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
