import * as React from "react";
import "./HeaderTag.css";
import { Link } from "react-router-dom";

interface headerTagProps {
  title: string;
  path: string;
  onPress?: Function;
}
const HeaderTag: (props: headerTagProps) => JSX.Element = (
  props: headerTagProps
) => {
  return (
    <div className="headerTagButton">
      <Link to={props.path}>{props.title}</Link>
      <p></p>
    </div>
  );
};
export default HeaderTag;
