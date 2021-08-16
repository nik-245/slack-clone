import React from 'react'
import "./SidebarOption.css";
const SidebarOption = ({Icon , title }) => {
    return (
        <div className="sidebaroption">
            {Icon && <Icon  className="sidebaroption_icon"/>}
        </div>
    )
}

export default SidebarOption;
