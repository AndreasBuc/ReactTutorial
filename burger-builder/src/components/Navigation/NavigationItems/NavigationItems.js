import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem
      active
      link = "/"
      > Burger Builder
    </NavigationItem>
    <NavigationItem
      active = {false}
      link = "/"
      > Check Out
    </NavigationItem>
  </ul>
);
export default navigationItems;
