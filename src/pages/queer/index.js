import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Conteudo from './conteudo';


import Foto from '../../assets/imagens/queerarte/amarante3.webp'
import Foto1 from '../../assets/imagens/queerarte/fotoamarante1.webp'
import Foto2 from '../../assets/imagens/queerarte/queer1.webp'
import Foto3 from '../../assets/imagens/queerarte/AMARANTE1.webp'


const Linha = styled(Row)`
    margin: 0;
    
    margin-top: 8px;
`;

const Img = styled.img`
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 15px;
    height: 15px;
`;

const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 15px 0px 0px 0px;
    overflow: hidden;
`;

const Coluna = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
`;
const Queer = (props) => {
    return(
        <Section1>
          <Linha>
          <Coluna xl={3}>
            <Card style={{ width: '45rem' }}>
                    <Card.Body>
                            <Card.Title>AMARANTE</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Projeto</Card.Subtitle>
                                    <Card.Text>
                                    AMARANTE é um projeto que fala sobre autonomia corporal, buscando promover informação e Arte Queer através de aulas, performances e ensaios coreográficos. AMARANTE visa gerar um impacto social ao instigar pessoas a refletirem e entrarem em contato com suas próprias questões, e também trazer para sociedade e cultura corpos Queers, não binários e diversos.
                                    </Card.Text>
                                <Card.Link onClick={() => window.open(props.Cv)}>Curriculo</Card.Link>
                                <Card.Link onClick={() => window.open(props.Amar)}>{props.Sitea}</Card.Link>
                    </Card.Body>
                </Card>
            </Coluna>
            <Coluna xl ={9}>
             <CardDeck>
        <Carousel fad >
        <Carousel.Item >
                  <img src={Foto3} alt='Foto amarante' />
                <Carousel.Caption >
                          <h3>Projeto AMARANTE</h3>
                          <p>...</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img src={Foto1} alt='Foto amarante' />

              <Carousel.Caption>
                    <h3>Projeto AMARANTE</h3>
                    <p>...</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Foto2} alt='Foto amarante' />

                <Carousel.Caption>
                    <h3>Projeto AMARANTE</h3>
                    <p>...</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Foto} alt='Foto amarante' />


              <Carousel.Caption>
                    <h3>Projeto AMARANTE</h3>
                    <p>...</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
      </CardDeck>
      </Coluna>
      </Linha>
      </Section1>
    );
}
export default Queer;