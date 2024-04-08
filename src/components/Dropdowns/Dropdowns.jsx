import React, { useState } from "react";
import style from "./style.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BasicModal from "../Modal/Modal";
const Dropdowns = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dropdowns = [
    { dropdown: "Target Audience" },
    { dropdown: "Views & Subscribers" },
    { dropdown: "Tags & Theme" },
    { dropdown: "Language & Contacts" },
  ];

  return (
    <div className={style.drowdownContainer}>
      {dropdowns?.map((item, index) => (
        <div className={style.dropdown} key={index} onClick={handleOpen}>
          {item.dropdown}
          <ArrowDropDownIcon />
        </div>
      ))}
      <BasicModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Dropdowns;
