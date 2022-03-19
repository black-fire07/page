import React from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import Button from "@mui/material/Button";

export default function Tokenomics() {
  return (
    <div id="TOKENOMICS">
      <div className="newstyle">
        <div className="info">
          <h1>TOKENOMICS</h1>
          <p>
            ● Simple yet powerful tokenomics. Buy and Sell taxes are are just
            12%.
          </p>
          <p> ● 6% contributes towards Rewarding holders with APECOIN.</p>
          <p>
            ● 6% goes to marketing wallet, which will be used to do heavy
            market.
          </p>
          <p>
            ● Will be used to add more liquidity over time, Surprise Giveaways
            to loyal holders.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "bolder" }}>
            <strong>JUST HODL $BAPE and EARN APECOIN FREE LIFETIME.</strong>
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <EmojiEventsTwoToneIcon className="icon" />
            <p>6% rewards</p>
          </div>
          <div className="box">
            <ShowChartIcon className="icon" />

            <p>6% marketing</p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <a href="#" style={{ textDecoration: "none" }}>
          <Button variant="outlined">DEXTOOLS</Button>
        </a>
        <a href="#" style={{ textDecoration: "none" }}>
          <Button variant="outlined">UNISWAP</Button>
        </a>
      </div>
    </div>
  );
}
