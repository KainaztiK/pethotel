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

import { Layout } from "./Containers/Layout";
import "./App.scss";

function App() {
  


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainWindow/>}/>
          <Route path={"autorization"} element={<Autorization/>}/>
          <Route path={"methodregistration"} element={<MethodRegistration/>}/>
          <Route path={"megistration"} element={<Registration/>}/>
          <Route path={"hotels"} element={<Hotels/>}/>
          <Route path={"hotel/:id"} element={<Hotelid/>}/>
          <Route path={"registrationcompany"} element={<RegistrationCompany/>}/>
          <Route path={"profile"} element={<Profile/>}/>
          <Route path={"posts"} element={<Posts/>}/>
          <Route path={"posts/add-post"} element={<AddPost/>}/>
          <Route path={"posts/post"} element={<CheckPost/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;