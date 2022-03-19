import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import icon from "./logo7.jpg";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={icon}
          alt="logo"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      </div>
      <ul className="app__navbar-links">
        {["HOME", "TOKENOMICS", "ROADMAP", "AUDIT"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div />
          <a href="#">PINKSALE</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#">UNISWAP</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["HOME", "TOKENOMICS", "ROADMAP", "AUDIT"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" onClick={() => setToggle(false)}>
                  PINKSALE
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setToggle(false)}>
                  UNISWAP
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
