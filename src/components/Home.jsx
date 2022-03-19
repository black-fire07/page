import React from "react";
import Button from "@mui/material/Button";
import video from "./babyape.gif";

export default function Home() {
  return (
    <div id="HOME">
      <div className="left">
        <h1>BABYAPE</h1>
        <p>
          BabyApeCoin (BAPE) is a project, built around the idea that keeping it
          simple is the quickest way to get your BAPE rocket to the moon.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-around",
            marginTop: "40px",
          }}
          className="b"
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <button class="c">PINKSALE</button>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <button class="c">UNISWAP</button>
          </a>
        </div>
      </div>
      <div className="right">
        <img src={video} alt="gif" />
      </div>
    </div>
  );
}
