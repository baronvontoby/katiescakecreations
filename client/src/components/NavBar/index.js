import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import logo from '../../images/KCCLogo.png';

class NavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#9e9e9e'}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand>
                  <NavLink href="/"><img src={logo} alt="home" height="80px" width="80px"/></NavLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <NavLink href="/pricing">Pricing</NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink href="/create">Create A Cake</NavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavBar;