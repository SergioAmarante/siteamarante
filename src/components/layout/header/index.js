import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import styled from 'styled-components';
import React from 'react';
import { IconContext} from "react-icons";
import { FaInstagram} from "react-icons/fa";

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}> {children} </IconContext.Provider>

const Iconeinsta = styled(MyProvider)`
        color: black;
        font-size: 25px;
`;      
    

const NavMenu = styled.div`
    display:flex;
    width 100%;
`;
const Tagh1 = styled.h1` 
    display:flex;
    width 100%;
    font-size: 50px;
    line-height:1.2em;
    margin-top:50px;
    margin-bottom:25px;
    font-family:caudex,serif;
    align-items: center;
    justify-content: center;
`;
const TopHeader = () => {
    return (
            <NavMenu>
                <Tagh1> SERGIO AMARANTE <Iconeinsta > </Iconeinsta>  </Tagh1>
            </NavMenu>       
    )
} 

export default TopHeader; 