import React, { useEffect } from "react";
import Masonry from "./Layout";

const defaultProps = {
  gutter: 10,
  column: 5,
  rtl: false,
  className: "masonry-layout",
};

const Layout = ({
  gutter = defaultProps.gutter,
  column = defaultProps.column,
  rtl = defaultProps.rtl,
  className = defaultProps.className,
  children,
}) => {
  const container = document.querySelector(`.${className}`);
  const itemNodeList = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return child;
    }
    return child;
  });

  useEffect(() => {
    const m = new Masonry({
      container: "react-masonry-layout",
      className: "react-masonry-layout",
      gutter: 20,
      column: 3,
      rtl: false,
      breakPoint: {
        350: 1,
        450: 2,
        645: 3,
        900: 4,
        1200: 5,
      },
    });

    // console.log("className: ", itemNodeList);

    let forEach = Array.prototype.forEach;

    let itemsGutter = [];
    let itemsPosX = [];

    forEach.call(itemNodeList, function (item) {
      let itemIndex = itemsGutter
        .slice(0)
        .sort(function (a, b) {
          return a - b;
        })
        .shift();

      console.log("Item: ", item);
      item.style.backgroundColor = "red";
    });
  }, []);

  const extend = (a, b) => {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  };

  const validate = (value, defaultValue) => {
    return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
      ? value
      : defaultValue;
  };

  const resize = () => {
    window.addEventListener("resize", () => {
      mount();
      responsive();
    });
  };

  const mount = () => {};

  const responsive = () => {};

  return (
    <div className={className}>
      {/* {children} */}
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          key: index,
          style: {},
        });
      })}
    </div>
  );
};

export default Layout;
