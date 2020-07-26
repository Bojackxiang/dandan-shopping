import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";


const MenuItem = ({ title, imageUrl, key, size,  history, linkUrl, ...props }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={() => history.push(`${linkUrl}`)}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

/**
 * 最后的这个 withRouter(MenuItem) 可以让当前的 component 获得 router 里面的所有父类属性，尽管我这个里面没有router
 * 所以我们在上面就可以导入history
 * 
 * push 就会在url的最后添加上我们写的东西 (在最后接着写)
 * 
 */
