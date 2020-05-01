import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Icon1,
  Icon,
  Icon2,
  Medium,
  Dribble,
  Verge,
  Producthunt,
  Behance,
  Github,
  Sidebarlogo,
  Reddit,
  Singapore,
  Mexico,
} from "../components";
// const Sidebar = ({ match }) => <p>{match.params.id}</p>;
// //const { url } = this.props.match
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="log">
          <Icon1 />
        </div>
        <div className="link">
          <Link to="/country/india">India</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon2 />
        </div>
        <div className="link">
          <Link to="/australia">Australia</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Medium />
        </div>
        <div className="link">
          <Link to="/canada">canada</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Dribble />
        </div>
        <div className="link">
          <Link to="/usa">USA</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/germany">Germany</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Verge />
        </div>
        <div className="link">
          <Link to="/china">China</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Producthunt />
        </div>
        <div className="link">
          <Link to="/italy">Italy</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Behance />
        </div>
        <div className="link">
          <Link to="/hongkong">Hong Kong</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Github />
        </div>
        <div className="link">
          <Link to="/malaysia">Malaysia</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Singapore />
        </div>
        <div className="link">
          <Link to="/singapore">Singapore</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Sidebarlogo />
        </div>
        <div className="link">
          <Link to="/uk">United Kingdom</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Reddit />
        </div>
        <div className="link">
          <Link to="/argentina">Argentina</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Mexico />
        </div>
        <div className="link">
          <Link to="/mexico">Mexico</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
