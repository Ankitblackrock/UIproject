import React from "react";
import style from "./style.module.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InfluencerCard = () => {
  return (
    <div className={style.InfluencerCard_box}>
      {" "}
      <div className={style.InfluencerCard}>
        <div className={style.header}>
          {" "}
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
          <p style={{ fontSize: "12px" }}>
            Random Streamer{" "}
            <VerifiedIcon style={{ fontSize: "12px", marginBottom: "-3px" }} />
            <p
              style={{
                fontSize: "10px",
                marginTop: "0px",
                marginBottom: "3px",
              }}
            >
              amarount@offical - Personal Account
            </p>
            <div className={style.infctg}>
              <span className={style.green_box}>Games</span>
              <span className={style.green_box} style={{ width: "101px" }}>
                Design & Graphis
              </span>
              <span className={style.white_box} style={{ width: "76px" }}>
                Bath & Pools
              </span>
              <span className={style.white_box}>ASHMR</span>
            </div>
          </p>
          <div>
            <ChatIcon className={style.chatIcon} />
          </div>
        </div>
        <span
          style={{ fontSize: "9px", display: "inline-block", color: "gray" }}
        >
          &#127775;Lorem ipsum dolor sit amet consectetur &#127775;adipisicing
          elit. Qui placeat&#127775; temporibus tempora soluta laboriosam odio
          fuga velit repellendus &#127775;dolores, molestiae ex nemo.
        </span>
        <div className={style.detail_cnt}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <PeopleAltIcon
                style={{
                  fontSize: "11px",
                  color: "gold",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Subscribers
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <VideoLibraryIcon
                style={{
                  fontSize: "11px",
                  color: "#0b82e7",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Views & Videos
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "12px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <MonetizationOnIcon
                style={{
                  fontSize: "11px",
                  color: "#e70b1c",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Pricing
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={style.userratings}>
            <span style={{ color: "black", fontWeight: "700" }}>19%</span> E.R -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>71%</span> TA -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>35%</span> 18 -
            35 Y.O -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>67%</span>{" "}
            FEMALE
          </p>
          <div
            style={{ fontSize: "11px", marginTop: "3px", fontWeight: "600" }}
          >
            <VisibilityOffIcon
              style={{ fontSize: "11px", marginBottom: "-2px" }}
            />{" "}
            DON'T SHOW
          </div>
        </div>
      </div>
      <div className={style.InfluencerCard}>
        <div className={style.header}>
          {" "}
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
          <p style={{ fontSize: "12px" }}>
            Random Streamer{" "}
            <VerifiedIcon style={{ fontSize: "12px", marginBottom: "-3px" }} />
            <p
              style={{
                fontSize: "10px",
                marginTop: "0px",
                marginBottom: "3px",
              }}
            >
              amarount@offical - Personal Account
            </p>
            <div className={style.infctg}>
              <span className={style.green_box}>Games</span>
              <span className={style.green_box} style={{ width: "101px" }}>
                Design & Graphis
              </span>
              <span className={style.white_box} style={{ width: "76px" }}>
                Bath & Pools
              </span>
              <span className={style.white_box}>ASHMR</span>
            </div>
          </p>
          <div>
            <ChatIcon className={style.chatIcon} />
          </div>
        </div>
        <span
          style={{ fontSize: "9px", display: "inline-block", color: "gray" }}
        >
          &#127775;Lorem ipsum dolor sit amet consectetur &#127775;adipisicing
          elit. Qui placeat&#127775; temporibus tempora soluta laboriosam odio
          fuga velit repellendus &#127775;dolores, molestiae ex nemo.
        </span>
        <div className={style.detail_cnt}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <PeopleAltIcon
                style={{
                  fontSize: "11px",
                  color: "gold",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Subscribers
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <VideoLibraryIcon
                style={{
                  fontSize: "11px",
                  color: "#0b82e7",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Views & Videos
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "12px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <MonetizationOnIcon
                style={{
                  fontSize: "11px",
                  color: "#e70b1c",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Pricing
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={style.userratings}>
            <span style={{ color: "black", fontWeight: "700" }}>19%</span> E.R -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>71%</span> TA -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>35%</span> 18 -
            35 Y.O -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>67%</span>{" "}
            FEMALE
          </p>
          <div
            style={{ fontSize: "11px", marginTop: "3px", fontWeight: "600" }}
          >
            <VisibilityOffIcon
              style={{ fontSize: "11px", marginBottom: "-2px" }}
            />{" "}
            DON'T SHOW
          </div>
        </div>
      </div>
      <div className={style.InfluencerCard}>
        <div className={style.header}>
          {" "}
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
          <p style={{ fontSize: "12px" }}>
            Random Streamer{" "}
            <VerifiedIcon style={{ fontSize: "12px", marginBottom: "-3px" }} />
            <p
              style={{
                fontSize: "10px",
                marginTop: "0px",
                marginBottom: "3px",
              }}
            >
              amarount@offical - Personal Account
            </p>
            <div className={style.infctg}>
              <span className={style.green_box}>Games</span>
              <span className={style.green_box} style={{ width: "101px" }}>
                Design & Graphis
              </span>
              <span className={style.white_box} style={{ width: "76px" }}>
                Bath & Pools
              </span>
              <span className={style.white_box}>ASHMR</span>
            </div>
          </p>
          <div>
            <ChatIcon className={style.chatIcon} />
          </div>
        </div>
        <span
          style={{ fontSize: "9px", display: "inline-block", color: "gray" }}
        >
          &#127775;Lorem ipsum dolor sit amet consectetur &#127775;adipisicing
          elit. Qui placeat&#127775; temporibus tempora soluta laboriosam odio
          fuga velit repellendus &#127775;dolores, molestiae ex nemo.
        </span>
        <div className={style.detail_cnt}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <PeopleAltIcon
                style={{
                  fontSize: "11px",
                  color: "gold",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Subscribers
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <VideoLibraryIcon
                style={{
                  fontSize: "11px",
                  color: "#0b82e7",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Views & Videos
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "12px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <MonetizationOnIcon
                style={{
                  fontSize: "11px",
                  color: "#e70b1c",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Pricing
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={style.userratings}>
            <span style={{ color: "black", fontWeight: "700" }}>19%</span> E.R -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>71%</span> TA -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>35%</span> 18 -
            35 Y.O -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>67%</span>{" "}
            FEMALE
          </p>
          <div
            style={{ fontSize: "11px", marginTop: "3px", fontWeight: "600" }}
          >
            <VisibilityOffIcon
              style={{ fontSize: "11px", marginBottom: "-2px" }}
            />{" "}
            DON'T SHOW
          </div>
        </div>
      </div>
      <div className={style.InfluencerCard}>
        <div className={style.header}>
          {" "}
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
          <p style={{ fontSize: "12px" }}>
            Random Streamer{" "}
            <VerifiedIcon style={{ fontSize: "12px", marginBottom: "-3px" }} />
            <p
              style={{
                fontSize: "10px",
                marginTop: "0px",
                marginBottom: "3px",
              }}
            >
              amarount@offical - Personal Account
            </p>
            <div className={style.infctg}>
              <span className={style.green_box}>Games</span>
              <span className={style.green_box} style={{ width: "101px" }}>
                Design & Graphis
              </span>
              <span className={style.white_box} style={{ width: "76px" }}>
                Bath & Pools
              </span>
              <span className={style.white_box}>ASHMR</span>
            </div>
          </p>
          <div>
            <ChatIcon className={style.chatIcon} />
          </div>
        </div>
        <span
          style={{ fontSize: "9px", display: "inline-block", color: "gray" }}
        >
          &#127775;Lorem ipsum dolor sit amet consectetur &#127775;adipisicing
          elit. Qui placeat&#127775; temporibus tempora soluta laboriosam odio
          fuga velit repellendus &#127775;dolores, molestiae ex nemo.
        </span>
        <div className={style.detail_cnt}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <PeopleAltIcon
                style={{
                  fontSize: "11px",
                  color: "gold",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Subscribers
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <VideoLibraryIcon
                style={{
                  fontSize: "11px",
                  color: "#0b82e7",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Views & Videos
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "12px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <MonetizationOnIcon
                style={{
                  fontSize: "11px",
                  color: "#e70b1c",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Pricing
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={style.userratings}>
            <span style={{ color: "black", fontWeight: "700" }}>19%</span> E.R -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>71%</span> TA -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>35%</span> 18 -
            35 Y.O -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>67%</span>{" "}
            FEMALE
          </p>
          <div
            style={{ fontSize: "11px", marginTop: "3px", fontWeight: "600" }}
          >
            <VisibilityOffIcon
              style={{ fontSize: "11px", marginBottom: "-2px" }}
            />{" "}
            DON'T SHOW
          </div>
        </div>
      </div>
      <div className={style.InfluencerCard}>
        <div className={style.header}>
          {" "}
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
          <p style={{ fontSize: "12px" }}>
            Random Streamer{" "}
            <VerifiedIcon style={{ fontSize: "12px", marginBottom: "-3px" }} />
            <p
              style={{
                fontSize: "10px",
                marginTop: "0px",
                marginBottom: "3px",
              }}
            >
              amarount@offical - Personal Account
            </p>
            <div className={style.infctg}>
              <span className={style.green_box}>Games</span>
              <span className={style.green_box} style={{ width: "101px" }}>
                Design & Graphis
              </span>
              <span className={style.white_box} style={{ width: "76px" }}>
                Bath & Pools
              </span>
              <span className={style.white_box}>ASHMR</span>
            </div>
          </p>
          <div>
            <ChatIcon className={style.chatIcon} />
          </div>
        </div>
        <span
          style={{ fontSize: "9px", display: "inline-block", color: "gray" }}
        >
          &#127775;Lorem ipsum dolor sit amet consectetur &#127775;adipisicing
          elit. Qui placeat&#127775; temporibus tempora soluta laboriosam odio
          fuga velit repellendus &#127775;dolores, molestiae ex nemo.
        </span>
        <div className={style.detail_cnt}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <PeopleAltIcon
                style={{
                  fontSize: "11px",
                  color: "gold",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Subscribers
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <VideoLibraryIcon
                style={{
                  fontSize: "11px",
                  color: "#0b82e7",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Views & Videos
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "12px" }}
          >
            <span style={{ fontSize: "10px", color: "gray" }}>
              <MonetizationOnIcon
                style={{
                  fontSize: "11px",
                  color: "#e70b1c",
                  marginBottom: "-1px",
                  marginRight: "2px",
                }}
              />
              Pricing
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginLeft: "13px",
              }}
            >
              1975494
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={style.userratings}>
            <span style={{ color: "black", fontWeight: "700" }}>19%</span> E.R -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>71%</span> TA -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>35%</span> 18 -
            35 Y.O -{" "}
            <span style={{ color: "black", fontWeight: "700" }}>67%</span>{" "}
            FEMALE
          </p>
          <div
            style={{ fontSize: "11px", marginTop: "3px", fontWeight: "600" }}
          >
            <VisibilityOffIcon
              style={{ fontSize: "11px", marginBottom: "-2px" }}
            />{" "}
            DON'T SHOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;
