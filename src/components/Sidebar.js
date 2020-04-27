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
} from "../components";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="log">
          <Icon1 />
        </div>
        <div className="link">
          <Link to="/home">Hacker News</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon2 />
        </div>
        <div className="link">
          <Link to="/home">Designer News</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Medium />
        </div>
        <div className="link">
          <Link to="/home">Medium</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Dribble />
        </div>
        <div className="link">
          <Link to="/home">Dribbble</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/home">TechCrunch</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Verge />
        </div>
        <div className="link">
          <Link to="/home">The Verge</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Producthunt />
        </div>
        <div className="link">
          <Link to="/home">Product Hunt</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Behance />
        </div>
        <div className="link">
          <Link to="/home">Behance</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/home">Github</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/home">Awwwards</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/home">Sidebar</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/home">Reddit</Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="log">
          <Icon />
        </div>
        <div className="link">
          <Link to="/home">Top News</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
