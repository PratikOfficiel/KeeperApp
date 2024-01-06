import React from "react";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Login from "./Login";

function Header(){
    return(
        <header className="mainheading">
            <div className="lowerheading">
                <div className="applogo">
                    <h1><StickyNote2Icon/> Daily Planner</h1>
                </div>
                <div className="userAuth">
                    <button>New User / Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;