import React, { useState } from 'react';
import logo from '../assests/png/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import telephone from "../assests/png/telephone.png"
import {

  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import menu from "../assests/png/hamburger.png"
import InboxIcon from '@mui/icons-material/Inbox';

const NavbarWithSidebar = () => {

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Item 1" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </div>
  );

  return (
    <div>
      <div className='d-flex align-items-center ' >
     

      </div>
      
      <div className=' d-flex justify-content-between gap-2  align-items-center '>
         <div className='d-md-none d-block'>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <img width="30px" height="30px" src={menu}/>
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <img src={logo} width="200" height="45" alt='logo' />
        <div style={{ width: "52%" }} className='d-flex justify-content-center align-items-center' >
          <div className="input-group d-flex justify-content-center" >
            <select className='main_header_select'  >
              <option>
                Companies
              </option>
              <option>
                Product
              </option>

            </select>
            <input className='main_header_search' type='search' placeholder='Search in...' />
            <button className='search-button d-flex align-items-center justify-content-center'>
              <SearchIcon style={{ marginRight: '5px' }} />

            </button>
          </div>
        </div>

        <div className='d-flex align-items-center flex-row gap-3'>
          <img src={telephone} width="30px" />
          <div className='d-lg-block d-none'>
            <div className='d-flex flex-column gap-0'>
              <p className='m-0 p-0 queries'>
                For Queries
              </p>
              <span className='m-0 p-0 phone'>
              +1 (786) 544-6956
              </span>

            </div>
          </div>

        </div>
      </div>
      

      {/* Other content */}
    </div>
  );
};

export default NavbarWithSidebar;
