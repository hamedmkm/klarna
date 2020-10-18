import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
const Menus = (props) => {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (open) => () => {
    setState({ left: open });
  };
  const handleClose = () => {
    setState(false);
  };
  const list = () => (
    <div
      className='listMenu'
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        <Button onClick={handleClose}>
          <CloseOutlinedIcon />
        </Button>
        {["balance", "deposit", "withdraw", "affiliate",'Home'].map((text) => (
          <ListItem button key={text}>
            <Link to={`/${text}`}>
              <ListItemText primary={text} className='link' />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuOutlinedIcon />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default Menus;
