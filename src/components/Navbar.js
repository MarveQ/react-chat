import React from 'react';

import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";
import Signin from "./Signin";

const style = {
    nav: `bg-gray-700 h-20 flex justify-between item-center p-4`,
    heading: `text-gray-100 text-3xl`,
}

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className={style.nav}>
            <h1 className={style.heading}>
                Chat
            </h1>
            {/*{user ? <LogOut/> : <Signin/>}*/}

        </div>
    );
};

export default Navbar;