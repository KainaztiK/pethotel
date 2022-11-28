// import {useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";
// import {AuthContext} from "./Routes/context";
import React from "react";
// import Loader from "./Containers/Components/Loader/Loader";
import MainWindow from "./Containers/MainWin/MainWindow";
import Autorization from "./Containers/Authorization/Authorization";
import MethodRegistration from "./Containers/MethodRegistration/MethodRegistration";
import Registration from "./Containers/Registration/Registration";
import Hotels from "./Containers/Hotels/Hotels";
import Hotelid from "./Containers/Hotelid/Hotelid";
// import AppRouter from "./Routes/AppRouter";

function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // const [isLoading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setIsAuth(true)
  //   }
  //   setLoading(false);
  // }, [])
  //
  //
  //   if (isLoading) {
  //       return <Loader/>
  //   }

  return (
    // <>
    //   <AuthContext.Provider value={{
    //     isAuth,
    //     setIsAuth,
    //     isLoading
    //   }}>
    //       {/*<AppRouter/>*/}
    //       {isAuth
    //       ?
    //       <Routes>
    //           <Route exact path={"/Hotels"} element={<Hotels/>}/>
    //           <Route exact path={`/Hotelid/:id`} element={<Hotelid/>}/>
    //       </Routes>
    //       :
    //       <Routes>
    //           <Route path={"/"} element={<MainWindow/>}/>
    //           <Route path={"/Autorization"} element={<Autorization/>}/>
    //           <Route path={"/MethodRegistration"} element={<MethodRegistration/>}/>
    //           <Route path={"/Registration"} element={<Registration/>}/>
    //       </Routes>
    //       }
    //   </AuthContext.Provider>
    // </>


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