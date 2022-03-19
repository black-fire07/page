import React from "react";

import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Social() {
  return (
    <div className="social">
      <div id="SOCIAL">
        <h1>Social Media - </h1>
        <div className="socialhandles">
          <a
            href="https://t.me/baby_apecoin"
            target="_blank"
            style={{ color: "white" }}
          >
            <TelegramIcon className="icon" />
          </a>
          <a
            href="https://twitter.com/BabyApeOfficial"
            target="_blank"
            style={{ color: "white" }}
          >
            <TwitterIcon className="icon" />
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          fontSize: "25px",
          letterSpacing: "0.15rem",
        }}
      >
        © 2022 BAPE | All rights reserved
      </div>
    </div>
  );
}
