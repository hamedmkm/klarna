import React from "react";
import { slide as Menu } from "react-burger-menu";
import Balance from './Balance'


export default props => {
  return (
    
    <Menu {...props}>
      <a className="menu-item" href='Balance'>
        balance
      </a>

      <a className="menu-item" href="Deposit">
        deposit
      </a>

      <a className="menu-item" href="Withdraw">
        withdraw
      </a>

      <a className="menu-item" href="Affiliate">
        affiliate
      </a>
    </Menu>
  );
};

