import React from "react";
import "./SidebarOption.css";
const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebaroption">
      {Icon && <Icon className="sidebaroption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption_channal">
          <span className="sidebaroption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
