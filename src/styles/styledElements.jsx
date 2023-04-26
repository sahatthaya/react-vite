import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from 'react-icons/fa';

export const NavBar = styled.nav`
    // background: #34a0ff;
    background: rgba( 255, 255, 255, 0.5 );
    backdrop-filter: blur( 13px );
    -webkit-backdrop-filter: blur( 13px );
    border-bottom: 0.5px solid #E0DEE4;
    // height: 50px;
    height: ${props => props.show ? 'auto' : '50px'};
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
`

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #3738a5;
    padding:2px;
    @media screen and (max-width: 768px) {
        display: ${props => props.show ? 'none' : 'block'};
    }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  height: auto;
  @media screen and (max-width: 768px) {
    // display: none;
    display: ${props => props.show ? 'block' : 'none'};
  }
`;

export const NavList = styled.li`
    @media screen and (max-width: 768px) {
        padding: 1rem 0;
  }
`

export const NavLink = styled(Link)`
    color: #3738a5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #000;
    }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #3738a5;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.2rem;
    cursor: pointer;
  }
`