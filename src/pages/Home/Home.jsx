import React, { useState } from "react";
import style from "./style.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import Dropdowns from "../../components/Dropdowns/Dropdowns";
import Miscellaneous from "../../components/Miscellaneous/Miscellaneous";
import InfluencerCard from "../../components/InfluencerCard/InfluencerCard";

function Home() {
  return (
    <div className={style.home_container}>
      <div className={style.home_content}>
        <Sidebar />
        <div className={style.box}>
          {" "}
          <div className={style.hederandsearch}>
            <p>
              Campaign/<span>Influencer</span>
            </p>
            <div style={{ position: "relative" }}>
              {" "}
              <input type="text" placeholder="Search for anything..." />
              <SearchIcon className={style.search_icon} />
            </div>
          </div>
          <div className={style.header}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              <h1>Influencer</h1>
              <div>
                <label class={style.switch}>
                  <input type="checkbox" />
                  <div class={`${style.slider} ${style.round}`}>
                    <span id={style.no}>Instagram</span>
                    <span id={style.yes}>Youtube</span>
                  </div>
                </label>
              </div>
            </div>
            <p className={style.header_para}>
              Search for popular bloggers & streamers to find a perfect match
              for your campaigns
            </p>
          </div>
          <Dropdowns />
          <Miscellaneous />
          <p
            style={{
              marginTop: "34px",
              fontSize: "15px",
              fontWeight: "500",
              color: "gray",
            }}
          >
            765 influencers found
          </p>
          <InfluencerCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
