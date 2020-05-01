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

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="log">
          <Icon1 />
        </div>
        <div className="link">
          <Link to="/country/in">India</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon2 />
        </div>
        <div className="link">
          <Link to="/country/au">Australia</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Medium />
        </div>
        <div className="link">
          <Link to="/country/ca">canada</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Dribble />
        </div>
        <div className="link">
          <Link to="/country/us">USA</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/country/de">Germany</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Verge />
        </div>
        <div className="link">
          <Link to="/country/cn">China</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Producthunt />
        </div>
        <div className="link">
          <Link to="/country/it">Italy</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Behance />
        </div>
        <div className="link">
          <Link to="/country/hk">Hong Kong</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Github />
        </div>
        <div className="link">
          <Link to="/country/my">Malaysia</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Singapore />
        </div>
        <div className="link">
          <Link to="/country/sg">Singapore</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Sidebarlogo />
        </div>
        <div className="link">
          <Link to="/country/gb">United Kingdom</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Reddit />
        </div>
        <div className="link">
          <Link to="/country/ar">Argentina</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Mexico />
        </div>
        <div className="link">
          <Link to="/country/mx">Mexico</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
