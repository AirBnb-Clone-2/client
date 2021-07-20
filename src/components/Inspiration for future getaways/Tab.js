import React from "react";

const Tab = (props) => {
    const {name, chooseOne, i, index} = props
    return (
        <div onClick={()=>chooseOne(i)} className={index===i? "tab choosenOne":"tab"}>
            <a onClick={e=>e.preventDefault()} href="">{name}</a>
        </div>
    )
}

export default Tab;