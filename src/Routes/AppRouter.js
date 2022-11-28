import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./route";
import {AuthContext} from "./context";
import Loader from "../Containers/Components/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}

            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}

            </Routes>
    );
};

export default AppRouter;
