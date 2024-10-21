import React from 'react';
import { Header } from '../../landingPage/Header/Header';
import Banner from '../../landingPage/Banner/Banner';
import Container from '../../landingPage/Container/Container';
import '../../App.css';
import { primaryBanner, secondaryBanner } from '../../landingPage/Banner/Banner';
import Section1, { imgSection1, img2Section1, img3Section1 } from '../../landingPage/Section1/Section1';
import Section2, { imgSection2, img2Section2 } from '../../landingPage/Section2/Section2';
import { Footer } from '../../landingPage/Footer/Footer';


function Home() {
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
          textContent="Apesar do Brasil estar fora do mapa da fome, conforme o Relatório das Nações Unidas (ONU), ainda há 2,5 milhões de pessoas que se encaixam no quadro de  insegurança alimentar severa. A nível de comparação, é o equivalente à população da capital baiana, Salvador. 

Dados obtidos através do Instituto Brasileiro de Geografia e Estatística (IBGE), mostram que no ano de 2023 indivíduos com insegurança alimentar equivaliam a 4,3% da população brasileira, o que em números absolutos, correspondia a 8,7 milhões de pessoas."
          image={imgSection1}
        />
        <Section2
          title="A PROBLEMATIZAÇÃO DA FOME"
          textContent="Mediante a realidade global, nota-se que independentemente do tempo transcorrido, a fome ainda é um problema atual e que consequentemente é causa potencial de óbitos em nossa sociedade contemporânea. Tal problema tem como causa inúmeros fatores, tais como questões políticas, socioeconômicas, estruturais e climáticas.

 De acordo com a FAO (Organização das Nações Unidas para Agricultura e Alimentação), aproximadamente uma em cada sete pessoas enfrentam o problema da fome no mundo, e mais de 20 mil crianças com idade inferior a 5 anos morrem por consequência da desnutrição. 
"
          image={imgSection2}
        />
        <Banner
          title="INSETOS NO MEIO ALIMENTÍCIO"
          img={secondaryBanner}
          id="insetosNoMeioAlimenticio"
        />
        <Section1
          title="O QUE É A ENTOMOFAGIA?"
          textContent="A entomofagia humana, ou antropoentomofagia, é o consumo de insetos por humanos, prática muito comum em diversas culturas (como em diversos países do sudeste asiático, e até mesmo em algumas regiões da África e entre comunidades indígenas da América Latina, de acordo com uma matéria publicada pela FAPESP). Nos últimos anos, diversas pesquisas na área têm destacado cada vez mais seu potencial de produção de alimentos saudáveis ricos em nutrientes de forma sustentável."
          image={img2Section1}
        />
        <Section2
          title="PRECONCEITOS"
          textContent="No Brasil, apesar de em algumas regiões ,como no Nordeste, essa prática já ser realizada, ainda há preconceitos em relação há essa forma de alimento. A falta de divulgação dessa questão e, portanto, a falta de familiaridade geral levam a crenças sociais que impõem desafios na propagação da ideia."
          image={img2Section2}
        />
        <Section1
          title="BENEFÍCIOS E RIQUEZA 
NUTRICIONAL"
          textContent="Apesar dos preconceitos, principalmente ocidentais, com relação a antropoentomofagia, sua importância é inegável. Por não possuir alto valor no mercado, os insetos, se disponíveis para a compra, tendem a ter um preço de custo muito baixo, além de possibilitar a subsistência devido a facilidade de criar esses insetos.
          Em 2020, a Organização das Nações Unidas para Alimentação e Agricultura (FAO) apresentou insetos como fontes alternativas de alimentos devido ao seu alto valor nutricional, sendo ricos em proteínas e pelo fato de serem facilmente produzidos com pouco espaço e recursos."

          image={img3Section1}
        />
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
