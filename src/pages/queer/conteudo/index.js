import styled from 'styled-components';
import Queer from '../conteudo';


const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 15px 0px 0px 0px;
    overflow: hidden;
`;
const Conteudo = (props) => {
    return(
      <Section1>
          <Queer Amar={'https://amarantesergio.wixsite.com/home/amarante'} Sitea={'Site Do Projeto'}  />
      </Section1>
    );
}
export default Conteudo;
