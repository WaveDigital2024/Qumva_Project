import { Outlet } from "react-router-dom";

import "../CustomCss/custom-scrollbar.css"
const Root = () => {
    return (
        <div >
            <Outlet></Outlet>
        </div>
    );
};

export default Root;