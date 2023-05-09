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
        <Navbar dark sticky='top' expand='lg'>
            <NavbarBrand className='ms-5 d-flex align-items-center' href='/'>
                <img src={FindMyTrailLogo} alt='Find My Trail logo' className='float-start' />
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
                            <i className='fa fa-list fa-lg' /> Trails
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='#'>
                            <i className='fa fa-shield fa-lg' /> Safety
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