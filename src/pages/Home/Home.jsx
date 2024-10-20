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
        <Banner
          title="INSETOS NO MEIO ALIMENTÍCIO"
          img={secondaryBanner}
          id="insetosNoMeio"
        />
        <Section1
          title="O QUE É A ENTOMOFAGIA?"
          textContent="A entomofagia humana, ou antropoentomofagia, é o consumo de insetos por humanos, prática muito comum em diversas culturas. Nos últimos anos, diversas pesquisas na área têm destacado cada vez mais seu potencial de produção de alimentos saudáveis ricos em nutrientes de forma sustentável."
          image={img2Section1}
        />
        <Section2
          title="PRECONCEITOS"
          textContent=" Em 2020, a Organização das Nações Unidas para Alimentação e Agricultura (FAO) apresentou insetos como fontes alternativas de alimentos devido ao seu alto valor nutricional, sendo ricos em proteínas e pelo fato de serem favcilmente produzidos com pouco espaço e recursos.

No Brasil, apesar de em algumas regiões ,como no Nordeste, essa prática já ser realizada, ainda há preconceitos em relação há essa forma de alimento. A falta de divulgação dessa questão e, portanto, a falta de familiaridade geral levam a crenças sociais que impõem desafios na propagação da ideia."
          image={img2Section2}
        />
        <Section1
          title="BENEFÍCIOS E RIQUEZA 
NUTRICIONAL"
          textContent="Apesar dos preconceitos, principalmente ocidentais, com relação a antropoentomofagia, sua importância é inegável. Por não ser algo de grande valor aquisitivo no mercado, os insetos quando disponíveis para a compra tendem a ter um preço de custo muito baixo. Além de serem de fácil criação, possibilitando que a necessidade de compra até deixe de existir.

 Apesar da negligência feita pela sociedade acerca dos insetos na indústria alimentícia, os insetos no geral apresentam uma tabela nutricional rica em proteínas, que por consequência contribui para a redução da fome e a prolongação da sensação de saciedade."
          image={img3Section1}
        />
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
