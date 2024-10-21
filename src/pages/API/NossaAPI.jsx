import React from 'react';
import { Header } from '../../landingPage/Header/Header';
import Container from '../../landingPage/Container/Container';
import { Footer } from '../../landingPage/Footer/Footer';

const NossaAPI = () => {
    return (
        <div>
            <Header/>
            <Container>
                <div class="div-infos">
                    <h1>Nosso objetivo</h1>
                    <p>Pensando na necessidade de propagação das informações à respeito dos benefícios da antropoentomofagia, nós da Crawley Connect criamos uma API rest voltada justamente à divulgação dessa ideia. A ideia é continuar expandindo as informações da API e disponibilizar tudo para uso geral.</p>
                    
                    <h2>O que a API oferece?</h2>
                    <p>
                        A Crawley API foi criada para fornecer informações nutricionais detalhadas à respeito de diferentes tipos de insetos comestíveis. Além disso, também inclui uma coleção de receitas inovadoras que utilizam insetos como ingredientes principais, a fim de incentivar o uso desses alimentos em mais culturas e pratos.
                    </p>
                    <h2>Benefícios da API</h2>
                    <p>
                        A API permite que desenvolvedores e nutricionistas acessem de maneira mais fácil dados sobre o valor nutricional de insetos comestíveis que muitas vezes são difíceis de encontrar simplesmente pesquisando na web. Ao fornecer receitas práticas e informações detalhadas, ela também apoia a criação de novos pratos e o incentivo ao consumo de insetos em larga escala, promovendo uma alimentação mais saudável e sustentável para todos.
                    </p>
                    <h2>Como utilizar a Crawley API?</h2>
                    <p>
                        Para obter informações nutricionais à respeito de algum inseto comestível, basta fazer uma requisição HTTP no endpoint da Crowley Connect:
                    </p>
                    <code>https://crawleyconnect.com/cconnect/insetos/buscar?nome=<b>nome_do_inseto</b></code>
                    <p>
                        Para obter alguma receita utilizando como parametro o nome da receita ou o inseto utilizado, basta fazer a seguinte requisição no endpoint:
                    </p>
                    <code>https://crawleyconnect.com/cconnect/receitas/buscar?nome=<b>receita_ou_inseto</b></code>
                    <p>
                        Se o objetivo for obter informações de todos os insetos ou todas as receitas, basta remover a parte "buscar":
                    </p>
                    <code>https://crawleyconnect.com/cconnect/insetos</code>
                    <code>https://crawleyconnect.com/cconnect/receitas</code>
                    <h2>Bibliografia</h2>
                    <ul>
                        <li>FAPESP: <a href="https://revistapesquisa.fapesp.br/insetos-comestiveis/">https://revistapesquisa.fapesp.br/insetos-comestiveis/</a></li>
                        <li>UFBA: <a href="https://pgalimentos.ufba.br/sites/pgalimentos.ufba.br/files/josevania_da_conceicao_dos_santos.pdf">https://pgalimentos.ufba.br/sites/pgalimentos.ufba.br/files/josevania_da_conceicao_dos_santos.pdf</a></li>
                        <li>FGV EBAPE <a href="https://repositorio.fgv.br/server/api/core/bitstreams/cee88dc8-96b0-4786-be19-8a96b9048716/content">https://repositorio.fgv.br/server/api/core/bitstreams/cee88dc8-96b0-4786-be19-8a96b9048716/content</a></li>
                    </ul>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default NossaAPI;