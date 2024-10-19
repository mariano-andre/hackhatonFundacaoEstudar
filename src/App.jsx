import { Header } from './landingPage/Header/Header';
import Banner from './landingPage/Banner/Banner';
import Container from './landingPage/Container/Container';
import './App.css';
import { primaryBanner, secondaryBanner } from './landingPage/Banner/Banner';
import Section1, { imgSection1 } from './landingPage/Section1/Section1';
import Section2, { imgSection2 } from './landingPage/Section2/Section2';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Banner 
          title="RETRATAÇÃO DA FOME"
          img={primaryBanner}
          />
        <Section1
          title="SITUAÇÃO ALIMENTÍCIA NO BRASIL"
          textContent="Apesar do Brasil estar fora do mapar da fome, conforme o Relatório das Nações Unidas (ONU), ainda há 2,5 milhões de pessoas que se enquadram no quadro de  insegurança alimentar severa. A nível de comparação, é o equivalente a população da capital baiana, Salvador. 

Enquanto dados obtidos através do Instituto Brasileiro de Geografia e Estatística (IBGE), no ano de 2023 indivíduos com insegurança alimentar equvalem a 4,3% da população brasielra, em números absolutos, 8,7 milhões de pessoas."
          image={imgSection1}
        />
        <Section2
          title="A PROBLEMATIZAÇÃO DA FOME"
          textContent=" Mediante a realidade global, nota-se que independente do tempo passado, a fome é um problema atual e que consequentemente atua como causadora de um grande número estatístico de óbitos em nossa sociedade contemporânea, tal problema se alastra por inúmeros fatores, tais como problemas políticos, socioeconômicos, estruturais e climáticos.

 De acordo com a FAO (Organização das Nações Unidas para Agricultura e Alimentação), aproximadamente uma em cada sete pessoas enfrentam o problema da fome no mundo, e mais de 20 mil crianças com idade inferior a 5 anos morriam por consequência da desnutrição 
"
          image={imgSection2}
        />
      </Container>
    </div>
  );
}

export default App;
