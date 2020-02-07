import * as React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductLineComponent.css";

export interface ProductLineCompnentProps {
  imageUrl: string;
  title: string;
}

export interface ProductLineCompnentState {}

class ProductLineCompnent extends React.Component<
  ProductLineCompnentProps,
  ProductLineCompnentState
> {
  render() {
    return (
      <a className="ProductLineComponent">
        <p>{this.props.title ? this.props.title : ""}</p>
        <img src={this.props.imageUrl} />
      </a>
    );
  }
}

export default ProductLineCompnent;
