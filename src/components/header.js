import React from 'react';
import {Navbar,NavItem,Button} from 'react-materialize';
import logo from '../image/mint_logo.svg';

const Header = () => {
    const logo_image = <img src={logo} style={{width: '85px',padding:'2px 1px 1px 6px'}} alt="logo"/>
    return(
        <header>
            <Navbar brand={logo_image} right>
                <NavItem>Workshop</NavItem>
                <NavItem>Blogs</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>Login/Signup</NavItem>
            </Navbar>
            <Button floating large className='red chat-btn' waves='light' icon='chat' />
        </header>

    );  
}

export default Header;