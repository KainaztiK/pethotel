import {Routes, Route} from "react-router-dom";
import MainWindow from "./Containers/MainWin/MainWindow";
import Autorization from "./Containers/Authorization/Authorization";
import MethodRegistration from "./Containers/MethodRegistration/MethodRegistration"
import Registration from "./Containers/Registration/Registration";
import Hotels from "./Containers/Hotels/Hotels";
import Hotelid from "./Containers/Hotelid/Hotelid";

import RegistrationCompany from "./Containers/RegistrationCompany/Registration";
import Profile from "./Containers/Profile/Profile";
import Posts from "./Containers/Posts/Posts";
import AddPost from "./Containers/Posts/AddPost/AddPost";
import CheckPost from "./Containers/CheckPost/Checkpost"


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
        <Route path='/RegistrationCompany' element={<RegistrationCompany/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/posts'} element={<Posts/>}/>
        <Route path={'/posts/addPost'} element={<AddPost/>}/>
        <Route path={'/posts/post'} element={<CheckPost/>}/>
      </Routes>
    </>
  );
}

export default App;