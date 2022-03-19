import React from "react";

export default function Roadmap() {
  return (
    <div id="ROADMAP">
      <h1>ROADMAP</h1>
      <div className="phases">
        <div className="phase one">
          <div>
            <img
              src="https://babyapecoinbsc.com/wp-content/uploads/2022/03/Delivery-phase-1-icon@2x-1.png"
              loading="lazy"
            />
          </div>
          <p className="p">PHASE 1</p>
          <div style={{ flexDirection: "column" }}>
            <p>Token Creation</p>
            <p>Audit</p>
            <p>Pinksale</p>
            <p>Uniswap Launch</p>
          </div>
        </div>
        <div className="phase">
          <div>
            <img
              src="https://babyapecoinbsc.com/wp-content/uploads/2022/03/Delivery-phase-2-icon-copy@2x.png"
              loading="lazy"
            />
          </div>
          <p className="p">PHASE 2</p>
          <div style={{ flexDirection: "column" }}>
            <p>Coingecko, CMC listing</p>
            <p>NFT Collection Launch</p>
            <p>Metaverse Development</p>
            <p>Multiple Partnerships</p>
            <p>Top tier CEX listing</p>
            <p>To the Moon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
