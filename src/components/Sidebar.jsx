import { useState } from "react";
import {
  Drawer,
  List,
  ListItem} from "@mui/material";
import { mockTransactions } from "../data/mockData";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from "@mui/material/Button";

const Sidebar = ({ }) => {
    const [open, setOpen] = useState(false);
    const text = "Dashboard";
    
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
