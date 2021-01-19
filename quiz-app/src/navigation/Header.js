import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu/';
import Dropdown from 'antd/lib/dropdown';
import Icon from 'antd/lib/icon';

import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import './Header.css';

const HeaderComp = Layout.Header;

class Header extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let menuItems;

        menuItems = [
          <Menu.Item key="/login">
            <Link to="/login">Login</Link>
          </Menu.Item>,
          <Menu.Item key="/signup">
            <Link to="/signup">Signup</Link>
          </Menu.Item>                  
        ];


        // return(
        //   <Navbar bg="light" expand="lg">
        //   <Navbar.Brand href="#home"></Navbar.Brand>
        //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //   <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="mr-auto">
        //       <Nav.Link href="/login">Login</Nav.Link>
        //       <Nav.Link href="/signup">Signup</Nav.Link>
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
        // );


        return (
        
          <HeaderComp className="app-header">
          <div className="container">
            <div className="app-title" >
              <Link to="/">Polling App</Link>
            </div>
            <Menu
              className="app-menu"
              mode="horizontal"
              selectedKeys={[this.props.location.pathname]}
              style={{ lineHeight: '64px' }} >
                {menuItems}
            </Menu>
          </div>
        </HeaderComp>
      );

    }

}

function ProfileDropdownMenu(props) {
    const dropdownMenu = (
      <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
        <Menu.Item key="user-info" className="dropdown-item" disabled>
          <div className="user-full-name-info">
            {props.currentUser.name}
          </div>
          <div className="username-info">
            @{props.currentUser.username}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="profile" className="dropdown-item">
          <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
        </Menu.Item>
        <Menu.Item key="logout" className="dropdown-item">
          Logout
        </Menu.Item>
      </Menu>
    );
  
    return (
      <Dropdown 
        overlay={dropdownMenu} 
        trigger={['click']}
        getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
        <a className="ant-dropdown-link">
           <Icon type="user" className="nav-icon" style={{marginRight: 0}} /> <Icon type="down" />
        </a>
      </Dropdown>
    );
  }

export default withRouter(Header);