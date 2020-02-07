import * as React from "react";
import HeaderTag from "../HeaderTag/HeaderTag";
import "./HeaderStyle.css";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";

const Header: (props: any) => JSX.Element = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        top: 0,
        width: "100%",
        position: "fixed",
        background: "#0001",
        zIndex: 10
      }}
    >
      <ul className="ul">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
      <div
        style={{
          padding: 0,
          marginRight: 20,
          justifyContent: "center",
          alignContent: "center",
          flex: 1,
          textAlign: "right"
        }}
      >
        <p>GUPP</p>
      </div>
    </div>
  );
};

export default Header;
