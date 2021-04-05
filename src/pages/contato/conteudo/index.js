import { Row, Col, Container } from "react-bootstrap";
import styled from 'styled-components';


import { FaWhatsapp} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 60px 0px 0px 0px;
    overflow: hidden;
`;
const Texto = styled.h4`
    &{
        margin-bottom: 10px;
        font-size: 25px;
        font-family: times new roman;
        font-family: times new roman;
        color: black;
        cursor:pointer;
    
    }
    @media (max-width: 600px) {
        font-size: 25px;
    }
`;
const Foto = styled.img`
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`;

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}> {children} </IconContext.Provider>

const IconLn = styled(MyProvider)`
    font-size:1.5em;
    
`;
const Linha = styled(Row)`
    align-intems: center;
`;
const Linha2 = styled(Row)`
    flex-direction: column;
    margin-top: 8px;
`;
const Coluna = styled(Col)`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    padding: 0;

`;
const Conteudo = (props) => {
    return(
      <Section1>
        <Container>
             <Linha>
                <Coluna xl={3} md={3}>
                   <Linha>
                   <Coluna xl={12}> 
                        <IconLn>
                            < FaLinkedin />
                        </IconLn>
                   </Coluna>
                   <Coluna xl={12}>
                        <Texto onClick={() => window.open(props.lik)}>{props.linkedlin}</Texto>
                   </Coluna>
                   <Coluna xl={12}>
                        <Foto onClick={() => window.open(props.lik)} src={props.foto} />
                   </Coluna>
                   </Linha>
                </Coluna>
                <Coluna xl={3} md={3}>
                   <Linha>
                   <Coluna xl={12}> 
                        <IconLn>
                            < FiGithub  />
                        </IconLn>
                   </Coluna>
                   <Coluna xl={12}>
                        <Texto onClick={() => window.open(props.git)}>{props.github}</Texto>
                   </Coluna>
                   <Coluna xl={12}>
                        <Foto onClick={() => window.open(props.git)} src={props.foto2} />
                   </Coluna>
                   </Linha>
                </Coluna>
                <Coluna xl={3} md={3}>
                   <Linha>
                   <Coluna xl={12}> 
                        <IconLn>
                            < FiMail/>
                        </IconLn>
                   </Coluna>
                   <Coluna xl={12}>
                        <Texto onClick={() => window.open(props.ema)}>{props.email}</Texto>
                   </Coluna>
                   <Coluna xl={12}>
                        <Foto onClick={() => window.open(props.ema)} src={props.foto1} />
                   </Coluna>
                   </Linha>
                </Coluna>
                <Coluna xl={3} md={3}>
                   <Linha>
                   <Coluna xl={12}> 
                        <IconLn>
                            <FaWhatsapp/>
                        </IconLn>
                   </Coluna>
                   <Coluna xl={12}>
                        <Texto onClick={() => window.open(props.what)}>{props.whatsapp}</Texto>
                   </Coluna>
                   <Coluna xl={12}>
                        <Foto onClick={() => window.open(props.git)} src={props.foto3} />
                   </Coluna>
                   </Linha>
                </Coluna>
            </Linha>
        </Container>
      </Section1>
    );
}
export default Conteudo;
