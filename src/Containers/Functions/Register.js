import React from "react";
import {Link} from "react-router-dom";
import { Registration } from "./Registration";
function Registr() {
    

    return(
        <div className="form-rega text-field">
            <Registration/>
            <div>
                <h5 className="d-flex justify-center clear h5rega">У вас уже есть аккаунт? <Link to="/autorization"><div className="d-flex justify-center align-center ml-5 h5regalink">Войти</div></Link></h5>
            </div>
        </div>
    );
}
export default Registr