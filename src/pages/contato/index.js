import styled from 'styled-components';
import Conteudo from './conteudo';

import Fotolin from '../../assets/imagens/contato/qr-code.png'
import Fotoqr from '../../assets/imagens/contato/qr-codemail.png'
import Fotogit from '../../assets/imagens/contato/gitcode.png'
import Fotowhat from '../../assets/imagens/contato/qr-codewhat.png'
const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;
const Contato = () => {
    return(
      <Section1>
        <Conteudo foto={Fotolin} foto1={Fotoqr} foto2={Fotogit} foto3={Fotowhat} lik={'https://www.linkedin.com/in/sergio-amarante/'} git={'https://github.com/SergioAmarante'} ema={'mailto:amarante.sergio@yahoo.com.br?subject=Contato'} what={'https://api.whatsapp.com/send?phone=5511975103332&text=Ol%C3%A1!%20Eu%20gostaria%20de%20falar%20sobre%20trabalho.'} linkedlin={'Linkedin'} github={'Github'} email={'Email'} whatsapp={'WhatsApp'} />
        
      </Section1 >
    );
}
export default Contato;
