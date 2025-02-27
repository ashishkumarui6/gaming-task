import React from "react";
import styles from "./index.module.css";
import Boxes from "../../components/Boxes Boxes";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const Home = () => {
  const box = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
  ];

  const handleManualPage = () => {
    alert("Manuwal");
  };
  const handleAutoPage = () => {
    alert("Auto");
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.top_left}>
          <div className={styles.left_btn}>
            <button onClick={handleManualPage}>Manual</button>
            <button onClick={handleAutoPage}>Auto</button>
          </div>
          <div className={styles.content}>
            <div className={styles.amount_col}>
              <div>Amount</div>
              <div className={styles.amount_mid}>
                <div className={styles.mid_left}>icons</div>
                <div className={styles.mid_to_mid}>
                  <input type="text" />
                </div>
                <div className={styles.mid_right}>
                  <span>1/2</span>
                  <span>2x</span>
                  <span>btn</span>
                </div>
              </div>
              <div>
                <span>100</span>
                <span>100</span>
                <span>1.0K</span>
                <span>10.0K</span>
              </div>
            </div>
            <div className={styles.min_col}>
              <div>Mins</div>
              <span>1</span>
              <input type="range" />
              <span>24</span>
            </div>
            <div className={styles.btn_col}>
              <button>Bet</button>
              <span>
                <a href="">
                  <AiOutlineQuestionCircle />
                </a>{" "}
                Betting with $0 will enter demo mode.
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.top_right}>
          <div className={styles.head}>
            <div className={styles.heading}>
              <p>Game result will be displayed</p>
            </div>
          </div>
          <div className={styles.section_box}>
            <div className={styles.box}>
              {box.map((it, ind) => {
                return <Boxes />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <span></span>
        </div>
        <div>mid</div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Home;
