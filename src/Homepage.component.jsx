import React from "react";
import "./homepage.styles.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">ADD TO CART</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">ADD TO CART</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS'</h1>
              <span className="subtitle">ADD TO CART</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS'</h1>
              <span className="subtitle">ADD TO CART</span>
            </div>
          </div>
        </div>

        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
