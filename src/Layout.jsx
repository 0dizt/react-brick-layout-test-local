import React, { useEffect } from "react";
import { Masonry } from "./module.layout";

const Layout = ({
  children,
  className,
  gutter,
  column,
  rtl,
  breakPoint,
  animateOnResize,
}) => {
  useEffect(() => {
    new Masonry({
      className: className,
      gutter: gutter,
      column: column,
      rtl: rtl,
      breakPoint: breakPoint,
      animateOnResize: animateOnResize,
    });
    // eslint-disable-next-line
  }, []);

  return <div className={className}>{children}</div>;
};

export default Layout;
