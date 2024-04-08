import React, { useState } from "react";
import style from "./style.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Miscellaneous = () => {
  const [array, setArray] = useState(new Array(5).fill(null));

  return (
    <div>
      <span className={style.miscellaneous_box} style={{ width: "191px" }}>
        <span className={style.miscellaneous_cont}>
          {" "}
          <span style={{ color: "gray", marginRight: "6px" }}>
            Subscriber Count
          </span>{" "}
          200k - 200m{" "}
          <CloseIcon
            className={style.close}
            style={{ marginLeft: "3px", fontSize: "14px" }}
          />
        </span>
      </span>
      <span className={style.miscellaneous_box}>
        <span className={style.miscellaneous_cont}>
          {" "}
          English <CloseIcon className={style.close} />
        </span>
      </span>
      <span className={style.miscellaneous_box}>
        <span className={style.miscellaneous_cont}>
          {" "}
          English <CloseIcon className={style.close} />
        </span>
      </span>
      <span className={style.miscellaneous_box}>
        <span className={style.miscellaneous_cont}>
          {" "}
          English <CloseIcon className={style.close} />
        </span>
      </span>
      <span className={style.miscellaneous_box}>
        <span className={style.miscellaneous_cont}>
          {" "}
          English <CloseIcon className={style.close} />
        </span>
      </span>
      <span className={style.miscellaneous_box}>
        <span className={style.miscellaneous_cont}>
          {" "}
          English <CloseIcon className={style.close} />
        </span>
      </span>
    </div>
  );
};

export default Miscellaneous;
