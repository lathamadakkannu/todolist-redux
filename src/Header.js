import React from "react";

import { useSelector } from "react-redux";

function Header(){

    const {taskList}=useSelector((state)=>state.tasks)
    console.log(taskList);

    return(
        <div>
            <h1 className="head-style text-center my-4 ">Items List</h1>
           
        </div>
    )
}
export default Header;

