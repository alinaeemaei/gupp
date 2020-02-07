import * as React from "react";
import { Component } from "react";
import "./NewsBox.css";
import Img from "./../../image/2.jpg";
export interface NewsBoxProps {
  title: string;
}

export interface NewsBoxState {}

class NewsBox extends React.Component<NewsBoxProps, NewsBoxState> {
  render() {
    return (
      <div className="newsBox">
        <p style={{ fontSize: 20 }}>{this.props.title}</p>
        <a target="_blank" href="">
          {/* <img src={Img} alt="Forest" className="image" /> */}
        </a>
      </div>
    );
  }
}

export default NewsBox;
