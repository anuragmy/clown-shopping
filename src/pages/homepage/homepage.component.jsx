import React from "react";
import "./homepage.style.scss";
import Menuitem from "../../component/menu-items/menu-items.component";
import Directory from "../../component/directory/diresctory.component";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Directory />

        {/* <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS'</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS'</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Homepage;
