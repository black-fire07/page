import React from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import Button from "@mui/material/Button";

export default function Tokenomics() {
  return (
    <div id="TOKENOMICS">
      <h1>TOKENOMICS</h1>
      <div className="info">
        <p>
          Transaction taxes are very low for this token 10% for buys 10% for
          sells.
        </p>
        <p>
          Low tax to keep Liquidity Pool at an excellent ratio with Market cap.
        </p>
        <p>
          Only 4% to Marketing Wallet and 1% to Dev Wallet. 1% Reflections in
          our token as reward for loyal holders and 4% that go back to our
          Liquidity Pool
        </p>
        <p>
          Just HODL $BAPE and you will be rewarded with a free ticket to the
          moon and beyond.
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
