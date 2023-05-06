import React, {useContext} from "react";
import Context from "./Context";

const Sidebar = () => {
    const {test} = useContext(Context);
    return (
        <h1>{test}</h1>
    )
}

export default Sidebar;