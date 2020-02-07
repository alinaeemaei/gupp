import * as React from "react";
import { Component } from "react";
import "./AboutHome.css";
export interface AboutHomeProps {}

export interface AboutHomeState {}

class AboutHome extends React.Component<AboutHomeProps, AboutHomeState> {
  state = {};
  render() {
    return (
      <div className="aboutHome">
        <img src={require("./../../image/1.png")} width={100} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          mollitia esse sunt, culpa velit nemo at tempore eos itaque eius?
          Officia nisi dolor earum. Eveniet et reiciendis modi unde repellat!
        </p>
      </div>
    );
  }
}

export default AboutHome;
