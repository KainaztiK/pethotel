import MainWindow from "../../Containers/MainWin/MainWindow";
import Authorization from "../../Containers/Authorization/Authorization";
import MethodRegistration from "../../Containers/MethodRegistration/MethodRegistration";
import Registration from "../../Containers/Registration/Registration";
import Hotels from "../../Containers/Hotels/Hotels";
import Hotelid from "../../Containers/Hotelid/Hotelid";


export const privateRoutes = [
    {path: '/Hotels', component: Hotels, exact: true},
    {path: '/Hotelid/:id', component: Hotelid, exact: true},
]

export const publicRoutes = [
    {path: '/', component: MainWindow, exact: true},
    {path: '/Authorization', component: Authorization, exact: true},
    {path: '/MethodRegistration', component: MethodRegistration, exact: true},
    {path: '/Registration', component: Registration, exact: true},
]
