import React, {PureComponent} from 'react';
import Header from "../../Containers/Components/Header/Header";
import Footer from "../../Containers/Components/Footer/Footer";

class Profile extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                Profile
                <Footer/>
            </div>
        );
    }
}

export default Profile;
