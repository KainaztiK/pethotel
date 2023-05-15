import React, { useState } from 'react';
import MapBlock from '../Components/Maps/Maps';

const Profile = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <div>
            <button>Открыть окно</button>
            <MapBlock active={modalActive} setActive={setModalActive}/>
        </div>
    );
    
}

export default Profile;