import styled from 'styled-components';
import Conteudo from './conteudo';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;
const Home = () => {
    return(
      <Section1>
        <Conteudo />
        
      </Section1>
    );
}
export default Home;
