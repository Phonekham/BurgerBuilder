import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul>
    <li className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </li>
  </ul>
);

export default navigationItems;
