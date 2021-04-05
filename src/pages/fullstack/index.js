import styled from 'styled-components';
import FullStack from "./conteudo";




const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;


const Conteudo = (props) => {
    return(
            <Section1>
                      <FullStack texto={'HTML,CSS,JavaScript,NodeJs,React,Phyton,Boortrap'} Cv={'https://drive.google.com/file/d/1joyHjzs9yL9YtotIlraPTEMGbw6cd4JT/view'} Git={'https://github.com/SergioAmarante'} Github={'Github'} Assegu={'https://assegura-lgbtqia-squad4spm.vercel.app/'} Siteasse={'Link Do Site'} Giasse={'https://github.com/squad4spm/Assegura-Lgbtqia'} Sitegit={'Link Github'} />
            </Section1>
    );
}
export default Conteudo;
