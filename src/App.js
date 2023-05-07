import {Routes, Route} from "react-router-dom";
import MainWindow from "./Containers/MainWin/MainWindow";
import Autorization from "./Containers/Authorization/Authorization";
import MethodRegistration from "./Containers/MethodRegistration/MethodRegistration"
import Registration from "./Containers/Registration/Registration";
import Hotels from "./Containers/Hotels/Hotels";
import Hotelid from "./Containers/Hotelid/Hotelid";

function App() {
  


  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainWindow/>}/>
        <Route path={"/Autorization"} element={<Autorization/>}/>
        <Route path={"/MethodRegistration"} element={<MethodRegistration/>}/>
        <Route path={"/Registration"} element={<Registration/>}/>
        <Route exact path={"/Hotels"} element={<Hotels/>}/>
        <Route exact path={`/Hotelid/:id`} element={<Hotelid/>}/>

      </Routes>
    </>
  );
}

export default App;