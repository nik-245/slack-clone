import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create"
const Sidebar = () => {
  return ( 
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar_info">
          <h2>channale name</h2>
          <h3>
            <FiberManualRecordIcon className="MuiSvgIcon-root" />
            nikunj ladva
          </h3>
        </div>
        <CreateIcon className="MuiSvgIcon-root" />
        
       <SidebarOption Icon={} title="" />
      </div>
    </div>
  );
};

export default Sidebar;
