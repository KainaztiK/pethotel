import {Routes, Route} from "react-router-dom";
import MainWindow from "./Containers/MainWin/MainWindow";
import Autorization from "./Containers/Authorization/Authorization";
import Registration from "./Containers/Registration/Registration";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainWindow/>}/>
        <Route path={"/Autorization"} element={<Autorization/>}/>
        <Route path={"/Registration"} element={<Registration/>}/>
      </Routes>
    </>
  );
}

export default App;