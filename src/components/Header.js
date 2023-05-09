import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FindMyTrailLogo from '../app/assets/img/logo_transparent.png';

const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <Navbar light sticky='top' expand='lg'>
            <NavbarBrand className='ms-5 d-flex align-items-center' href='/'>
                <img src={FindMyTrailLogo} alt='Find My Trail logo' className='float-start' />
                <h1>Find My Trail</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                            <i className='fa fa-list fa-lg' /> Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                            <i className='fa fa-info fa-lg' /> About   
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header