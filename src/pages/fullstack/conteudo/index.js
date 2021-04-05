import styled from 'styled-components';
import Fullstack  from '../conteudo/';

import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import {FaNodeJs } from "react-icons/fa";
import {FaReact } from "react-icons/fa";
import {FaPython } from "react-icons/fa";
import {FaBootstrap } from "react-icons/fa";



const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 15px 0px 0px 0px;
    overflow: hidden;
`;

const Foto = styled.img`
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;
const Texto = styled.h4`
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 50px;
    margin-right: 50px;
    text-align: justify;
    text-indent: 1.5em;
    font-family: times new roman;
    font-style: italic;
    font-size: 25px;
    color: black;
`;
const Linha = styled(Row)`
    margin: 0;
`;
const Linha2 = styled(Row)`
    flex-direction: column;
    margin-top: 8px;
`;
const Coluna = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

const FullStack = (props) => {
    return(
      <Section1>
                <Linha>
        <Coluna xl={3}>
            <Card style={{ width: '45rem' }}>
                    <Card.Body>
                            <Card.Title>Formação</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">FullStack Developer</Card.Subtitle>
                                    <Card.Text>
                                    Programa Recode Pro 540 horas de aulas teóricas e praticas, além de fazer inúmeros projetos, aprendi os fundamentos das principais linguagens necessárias para um desenvolvedor full stack.
                                    </Card.Text>
                                <Card.Link onClick={() => window.open(props.Cv)}>Curriculo</Card.Link>
                                <Card.Link onClick={() => window.open(props.Git)}>{props.Github}</Card.Link>
                    </Card.Body>
                </Card>
            </Coluna>
            <Coluna xl={6}>
                <Linha2> 
                    <Texto>Linguagens</Texto> 
                    <Linha2>
                        <Texto>{props.texto} </Texto>
                    </Linha2>
                    <Texto> <FaHtml5/> <FaCss3Alt/> <FaJsSquare/> <FaNodeJs/> <FaReact/> <FaPython/> <FaBootstrap/> </Texto>
                </Linha2> 
            </Coluna>
            <Coluna xl={3}>
            <Card style={{ width: '45rem' }}>
                    <Card.Body>
                            <Card.Title>Portifólio</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Site Assegura LGBTQIA+</Card.Subtitle>
                                    <Card.Text>
                                    Projeto construido na formação Recode-Pro em parceria com 5 Devs,  em ReactJs, com banco de dados em relacional MySQL e o back-end em NodeJs.
                                    </Card.Text>
                                <Card.Link onClick={() => window.open(props.Giasse)}>{props.Sitegit}</Card.Link>
                                <Card.Link onClick={() => window.open(props.Assegu)}>{props.Siteasse}</Card.Link>
                    </Card.Body>
                </Card>
            </Coluna>
        </Linha>
        
      </Section1>
    );
}
export default FullStack;

