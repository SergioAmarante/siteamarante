import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import imagen from '../../../assets/imagens/home/fotoinic.jpeg'



const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 15px 0px 0px 0px;
    overflow: hidden;
`;
const Title = styled.h4`
    &{
        margin-bottom: 10px;
        font-size: 25px;
        font-family: times new roman;
        font-style: italic;
        color: #04C740;
        text-align: right;
        margin-right: 50px;
    }
    @media (max-width: 600px) {
        font-size: 25px;
    }
`;
const Foto = styled.img`
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 400px;
    border-radius: 10%;
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
const Conteudo = () => {
    return(
      <Section1>
        <Linha>
            <Coluna xl={5}>

                <Foto img src={imagen} alt='Foto amarante' />
              
            </Coluna>
            <Coluna xl={7}>
                <Linha2>
                    
                    <Texto>Professor, bailarino e aspirante a desenvolvedor full stack. Minha trajetória profissional sempre se orientou pela diversidade e pluralidade. Enquanto bailarino, durante os primeiros anos da minha carreira eu me dediquei totalmente as danças acadêmicas para aprender os fundamentos e a teoria. Após essa fase, fui convidado a dar aulas em diversas escolas, onde consegui explorar mais a fundo as artes do corpo, desenvolvendo uma metodologia própria para utilização tanto nas minhas aulas quanto no meu projeto Amarante. Na Programação vejo muitas oportunidades de crescimento, transformação e impacto social. Para tal, novamente, estou imerso nesse novo mundo e me dedicando totalmente a aprender o máximo.  Enquanto profissional de programação eu mantenho minha dedicação, comprometimento e resiliência que fizeram com que eu conseguisse me desenvolver e explorar o mundo das artes do corpo com sucesso. Que venham os próximos desafios!</Texto>
                    
                    
                </Linha2> 
            </Coluna>
        </Linha>
      </Section1>
    );
}
export default Conteudo;
