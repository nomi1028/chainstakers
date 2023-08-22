import { Grid } from "@mui/material";
import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
const Navbar = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MDBNavbar expand="md" light bgColor="light" style={{marginBottom:'1px solid #eee'}} className="main-navbar"> 
          <MDBContainer >
            <MDBNavbarNav>
              <MDBNavbarItem className="navbar-list-menu">
                <span>
                PRODUCT CATEGORIES
                </span>
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBNavbarItem>Submenu item 1</MDBNavbarItem>
                  <MDBNavbarItem>Submenu item 2</MDBNavbarItem>
                  <MDBNavbarItem>
                    Submenu item 3 &raquo;
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBNavbarItem>Multi level 1</MDBNavbarItem>
                      <MDBNavbarItem>Multi level 2</MDBNavbarItem>
                    </ul>
                  </MDBNavbarItem>
                  <MDBNavbarItem>Submenu item 4</MDBNavbarItem>
                  <MDBNavbarItem>Submenu item 5</MDBNavbarItem>
                </ul>
              </MDBNavbarItem>
              <MDBNavbarItem className="navbar-list-menu">
                <span>
               TRADE IN SERVICES
                </span>
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBNavbarItem>Submenu item 1</MDBNavbarItem>
                  <MDBNavbarItem>Submenu item 2</MDBNavbarItem>
                  <MDBNavbarItem>
                    Submenu item 3 &raquo;
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBNavbarItem>Multi level 1</MDBNavbarItem>
                      <MDBNavbarItem>Multi level 2</MDBNavbarItem>
                    </ul>
                  </MDBNavbarItem>
                  <MDBNavbarItem>Submenu item 4</MDBNavbarItem>
                  <MDBNavbarItem>Submenu item 5</MDBNavbarItem>
                </ul>
              </MDBNavbarItem>
              <MDBNavbarItem className="navbar-list"><span>Home</span></MDBNavbarItem>
              <MDBNavbarItem className="navbar-list"><span>About us</span></MDBNavbarItem>
              <MDBNavbarItem className="navbar-list"><span>Contact us</span></MDBNavbarItem>
              <MDBNavbarItem className="navbar-list"><span>Socail Media</span></MDBNavbarItem>
              <MDBNavbarItem className="navbar-list"><span>About Pakistan</span></MDBNavbarItem>

              {/* <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link' > 
                Dropdown Link
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
               Action
                </MDBDropdownItem>
                <MDBDropdownItem>
               Another action
                </MDBDropdownItem>
                <MDBDropdownItem>
               Submenu &raquo;
                  <ul className="dropdown-menu dropdown-submenu">
                    <MDBDropdownItem>
                   Submenu item 1
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                   Submenu item 2
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                   Submenu item 3 &raquo;
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                       Multi level 1
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                       Multi level 2
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                   Submenu item 4
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                   Submenu item 5
                    </MDBDropdownItem>
                  </ul>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </Grid>
    </Grid>
  );
};

export default Navbar;
