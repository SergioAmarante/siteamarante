import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

export const Menu = (props) => {
  
    const NavMenu = styled(Navbar.Collapse)`
      justify-content: right;
      text-align: right;
      flex-grow: 0; 
    `;
    const ItensMenu = styled(Nav.Link)`
      font-size: 19px;
      font-family:caudex,serif;
      font-weight: bold;
      padding: 0px;
      color: black !important;
      &:hover{
        color: #808080 !important;
      }
    `;
    const MenuNav = styled(Nav)`
    @media(max-with:800px){
      justify-content: center !important;
    }
  `;
  const Toggle = styled(Navbar.Toggle)`
  
   
  `;
  const history = useHistory();
  const menuItens = [
    {
      label: "Queer-Arte",
      path: "queerarte"
    },
    {
      label: "Sergio Amarante",
      path: ""
    },
    {
      label: "FullStack",
      path: "fullstack"
    },
    {
      label: "Contato",
      path: "contato"
    },
  ];
    return(

      <Navbar className="justify-content-center" collapseOnSelect expand="lg">
        <Toggle aria-controls="responsive-navbar-nav"></Toggle>
          <NavMenu>
            <MenuNav className="menu m-auto" className="justify-content-center">
              {menuItens.map((iten) => (
                <Nav.Item>
                  <ItensMenu className="item" onClick={() => history.push(`/${iten.path}`)}>
                    {iten.label}
                  </ItensMenu>
                </Nav.Item>
              ))}
            </MenuNav>
            </NavMenu>
            </Navbar>
  
    )
};
export default Menu;
