import React from "react";
import style from "./style.module.css";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmailIcon from "@mui/icons-material/Email";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.header}>
        <span className={style.header_name}>MB</span>
        <ExitToAppRoundedIcon style={{ color: "white", marginRight: "8px" }} />
      </div>

      <div className={style.menuContainer}>
        <h3 className={style.menu}>Main Menu</h3>
        <ul className={style.list_container}>
          <li className={style.menuItem}>
            <DashboardRoundedIcon
              style={{ fontSize: "14px", color: "#BABFB5" }}
            />
            <span>Dashboard</span>
          </li>
          <li className={style.menuItem}>
            <ListAltIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span style={{ marginRight: "22px" }}>Platforms</span>
          </li>
          <li className={style.menuItem}>
            <PersonSearchIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span>Influencers</span>
          </li>
          <li className={style.menuItem}>
            <CampaignIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span>Campaigns</span>
          </li>
          <li className={style.menuItem}>
            <EmailIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span style={{ marginRight: "22px" }}>Messages</span>
          </li>
        </ul>
      </div>
      <div className={style.menuContainer}>
        <h3 className={style.menu}>Support</h3>
        <ul className={style.list_container} style={{ marginTop: "0px" }}>
          <li className={style.menuItem}>
            <SecurityIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span style={{ marginRight: "30px" }}>Security</span>
          </li>
          <li className={style.menuItem}>
            <SettingsIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span style={{ marginRight: "30px" }}>Settings</span>
          </li>
          <li className={style.menuItem}>
            <SupportAgentIcon style={{ fontSize: "14px", color: "#BABFB5" }} />
            <span style={{ marginRight: "-20px" }}>Help & Supports</span>
          </li>
        </ul>
      </div>
      <div className={style.profile_container}>
        <span className={style.campaign}>Free Active Campaigns</span>
        <div
          style={{
            display: "flex",
            width: "153px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "6px",
          }}
          className={style.text_container}
        >
          {" "}
          <span className={style.campaignDetails}>1 Campaigns</span>
          <span className={style.campaign_count}>1/3</span>
        </div>
        <span></span>
        <span className={style.upgrade_plan}>Upgrade To Premium</span>
      </div>
      <div className={style.footer_sec}>
        <Avatar
          sx={{
            bgcolor: "purple",
            fontSize: "10px",
            width: "30px",
            height: "30px",
            marginLeft: "5px",
          }}
        >
          OP
        </Avatar>
        <div className={style.name_container}>
          {" "}
          <p className={style.footer_sec_name}>Entique Padamanse</p>
          <span>Youtuber</span>
        </div>
        <ArrowDropDownIcon style={{ marginBottom: "12px", color: "#979896" }} />
      </div>
    </div>
  );
}

export default Sidebar;
