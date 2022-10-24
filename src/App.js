import {Routes, Route} from "react-router-dom";
import MainWindow from "./Containers/MainWin/MainWindow";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainWindow/>}/>
      </Routes>
    </>
  );
}

export default App;