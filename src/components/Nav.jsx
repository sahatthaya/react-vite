 import React, { useState } from 'react'
import { NavBar, NavLogo, NavMenu, NavList, NavLink, Bars } from '../styles/styledElements'


function Nav() {

  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <NavBar show={show} style={{
        position: 'fixed',
        top: '0',
        zIndex:'50',
        width:'70%'
      }} >
        <Bars onClick={() => setShow(!show)} />

        <NavLogo to='/' show={show}>
          Sahathaya React Vite
        </NavLogo>
        <NavMenu show={show}>
          <NavList>
            <NavLink to='/'>
              Shop
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to='/postIt'>
              Post it!
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to='/Blog'>
              Blog
            </NavLink>
          </NavList>
        </NavMenu>
      </NavBar>
    </>
  )
}

export default Nav