import {Routes, Route} from "react-router-dom";
import MainWindow from "./Containers/MainWin/MainWindow";
import Autorization from "./Containers/Authorization/Authorization";
import MethodRegistration from "./Containers/MethodRegistration/MethodRegistration"
import Registration from "./Containers/Registration/Registration";
import Hotels from "./Containers/Hotels/Hotels";
// import Hotelid from "./Containers/Hotelid/Hotelid.js";
import Hotelid1 from "./Containers/Hotelid/Hotelid1.jsx";
import RegistrationCompany from "./Containers/RegistrationCompany/Registration";

import Posts from "./Containers/Posts/Posts";
import AddPost from "./Containers/Posts/AddPost/AddPost";
import Edit from "./Containers/EditProfileUser/Edit";
import EditName from "./Containers/EditUserName/Edit";
import EditEmail from "./Containers/EditUserEmail/Edit";
import Search from "./Containers/SearchHotel/Search";
import EditPost from "./Containers/Posts/EditPost/EditPost";
import EditCompany from "./Containers/EditProfileCompany/EditProfileCompany";
import {Layout} from "./Containers/Layout";


function App() {
  
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<MainWindow/>}/>
          <Route path={"autorization"} element={<Autorization/>}/>
          <Route path={"methodregistration"} element={<MethodRegistration/>}/>
          <Route path={"registration"} element={<Registration/>}/>
          <Route path={"registrationcompany"} element={<RegistrationCompany/>}/>
            
          <Route exact path={"hotels"} element={<Hotels/>}/>
          <Route exact path={"hotels/:advertisementId"} element={<Hotelid1/>}/>
          <Route exact path={"search/:advertisementId"} element={<Hotelid1/>}/>
          <Route exact path={"posts/:advertisementId"} element={<Hotelid1/>}/>
          <Route path={"edit-user"} element={<Edit/>}/>
          <Route path={"edit-name"} element={<EditName/>}/>
          <Route path={"edit-email"} element={<EditEmail/>}/>
          <Route path={"search"} element={<Search/>}/>

          <Route path={"posts"} element={<Posts/>}/>
          <Route path={"posts/add-post"} element={<AddPost/>}/>
          <Route path={"posts/edit-post/:id"} element={<EditPost/>}/>
          <Route path={"edit-company"} element={<EditCompany/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
