import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import style from "./style.module.css";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "9px",
  outLine: "none",
};

const BasicModal = ({ open, handleClose }) => {
  const [startValue, setStartValue] = useState(20);
  const [endValue, setEndValue] = useState(80);
  const sliderrangedata = [
    "0",
    "1k",
    "20k",
    "50k",
    "100k",
    "300k",
    "500k",
    "1m",
    "100m",
    "200m+",
  ];

  const handleStartInputChange = useCallback(
    (e) => {
      setStartValue(e.target.value);
      setEndValue(e.target.value > endValue ? e.target.value : endValue);
    },
    [startValue]
  );

  const handleEndInputChange = useCallback(
    (e) => {
      setEndValue(e.target.value);
      setStartValue(e.target.value < startValue ? e.target.value : startValue);
    },
    [endValue]
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <p className={style.text}>Subscriber Count</p>
          <div className={style.container}>
            <div className={style.slider}>
              <input
                id={style.start}
                value={startValue}
                type="range"
                min="0"
                max="100"
                onChange={handleStartInputChange}
              />
              <input
                id={style.end}
                value={endValue}
                type="range"
                min="0"
                max="100"
                onChange={handleEndInputChange}
              />
              {sliderrangedata.map((item, id) => (
                <span key={id} className={style.range_value}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className={style.text}>Total Views</p>
          <div className={style.container}>
            <div className={style.slider}>
              <input
                id={style.start}
                value={startValue}
                type="range"
                min="0"
                max="100"
                onChange={handleStartInputChange}
              />
              <input
                id={style.end}
                value={endValue}
                type="range"
                min="0"
                max="100"
                onChange={handleEndInputChange}
              />
              {sliderrangedata.map((item, id) => (
                <span key={id} className={style.range_value}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className={style.text}>Last Upload Date</p>
          <div className={style.date_time}>
            {" "}
            <div className={style.dateToCnt}>
              {" "}
              <span className={style.dttext}>From</span>
              <input type="date" className={style.input_date} />
            </div>
            <div className={style.datefromCnt}>
              {" "}
              <span className={style.dttext}>To</span>
              <input type="date" className={style.input_date} />
            </div>
          </div>
          <div className={style.devider}></div>
          <button className={style.clearBtn}>Clear All</button>
          <button className={style.applybtn}>Apply</button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
