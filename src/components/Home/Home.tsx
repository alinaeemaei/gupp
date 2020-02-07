import React, { useState } from "react";
import "./Home.css";
import background from "./../../image/b1.jpg";
import { Switch, Route, Redirect } from "react-router-dom";
import NewsBox from "../NewsBox/NewsBox";
import ProductLineCompnent from "../ProductLine/ProductLineComponent";
import AboutHome from "../About/AboutHome";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    console.log(window.innerHeight, "hite");
    return (
      <div className="base">
        <div className="image-dive">
          <img src={background} alt="background" className="b1" />
        </div>

        <div className="detail" style={{ height: 50 }}>
          <NewsBox title="Videos" />
          <NewsBox title="Products" />
          <NewsBox title="Learning" />
        </div>
        <div className="productLine">
          <p style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}>
            Product design line
          </p>
          <div
            className="productLine-div"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly"
            }}
          >
            <ProductLineCompnent
              title="design"
              imageUrl={require("./../../image/1.png")}
            />
            <ProductLineCompnent
              title="3d model"
              imageUrl={require("./../../image/1.png")}
            />
            <ProductLineCompnent
              title="prototype"
              imageUrl={require("./../../image/1.png")}
            />
            <ProductLineCompnent
              title="molding"
              imageUrl={require("./../../image/1.png")}
            />
            <ProductLineCompnent
              title="product"
              imageUrl={require("./../../image/1.png")}
            />
          </div>
        </div>
        <p
          style={{
            fontSize: 25,
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          About Home
        </p>
        <AboutHome />
        <div className="detail" style={{ height: 300 }}></div>
      </div>
    );
  }
}

export default Home;
