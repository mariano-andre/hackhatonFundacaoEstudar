import React, { useEffect } from 'react';
import { Header } from '../../landingPage/Header/Header';
import Container from '../../landingPage/Container/Container';
import '../Tabelas/tabelas.css'
import { Footer } from '../../landingPage/Footer/Footer';

const Tabelas = () => {
    useEffect(() => {
        const tbInsetos = document.getElementById('tbInsetos')
        fetch('http://localhost:5000/cconnect/insetos/', {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        .then(response => response.json())
        .then(data => {
            tbInsetos.innerHTML = '';

            data.forEach(inseto => {
                const newTr = document.createElement('tr');
                
                for(let att in inseto){
                    if(att !== "id"){
                        if(typeof inseto[att] !== "object"){
                            newTr.innerHTML += `<td>${inseto[att]}</td>`;
                        } else{
                            for(let val in inseto[att]){
                                newTr.innerHTML += `<td>${inseto[att][val] === null? "-" : inseto[att][val]}</td>`
                            }
                        }
                    }
                }
                tbInsetos.appendChild(newTr)
            })
        })
        .catch(error => console.error('Error:', error));

        const tbConvencionais = document.getElementById('tbConvencionais');
        tbConvencionais.innerHTML = '';
        const animaisConvencionais = [
            {
                alimento: 'Peito de frango cozido sem pele',
                informacao_nutricional: {
                    proteína: 26,
                    lipídios: 3.8,
                    carboidratos: 0.3,
                    fibras: 0.1
                }
            },
            {
                alimento: 'Fígado de boi grelhado',
                informacao_nutricional: {
                    proteína: 29.9,
                    lipídios: 9,
                    carboidratos: 4.2,
                    fibras: null
                }
            },
            {
                alimento: 'Carne de porco do lombo assada',
                informacao_nutricional: {
                    proteína: 27,
                    lipídios: 14.6,
                    carboidratos: null,
                    fibras: null
                }
            },
            {
                alimento: 'Ovo cozido',
                informacao_nutricional: {
                    proteína: 12.5,
                    lipídios: 10.6,
                    carboidratos: 1.12,
                    fibras: null
                }
            },
            {
                alimento: 'Soja cozida',
                informacao_nutricional: {
                    proteína: 16.54,
                    lipídios: 8.3,
                    carboidratos: 9.87,
                    fibras: 6
                }
            },
        ]
        animaisConvencionais.forEach(animal => {
            const newTr = document.createElement('tr');
            
            for(let att in animal){
                if(att !== "id"){
                    if(typeof animal[att] !== "object"){
                        newTr.innerHTML += `<td>${animal[att]}</td>`;
                    } else{
                        for(let val in animal[att]){
                            newTr.innerHTML += `<td>${animal[att][val] === null? "-" : animal[att][val]}</td>`
                        }
                    }
                }
            }
            tbConvencionais.appendChild(newTr)
        })
    }, [])

    return (
        <div>
            <Header/>
            <Container>
                <p class="infos">Pensando na ideia de propagação da antropoentomofagia, aqui está uma comparação entre informações nutricionais de alguns insetos com relação a outras fontes de proteínas mais comuns no cotidiano brasileiro.</p>
                <table>
                    <thead>
                        <th>Nome popular</th>
                        <th>Nome científico</th>
                        <th>Proteínas (%)</th>
                        <th>Lipídios (%)</th>
                        <th>Carboidratos (%)</th>
                        <th>Cinzas (%)</th>
                        <th>Fibras (%)</th>
                    </thead>
                    <tbody id='tbInsetos'></tbody>
                </table>
                <table>
                    <thead>
                        <th>Alimento</th>
                        <th>Proteínas (%)</th>
                        <th>Lipídios (%)</th>
                        <th>Carboidratos (%)</th>
                        <th>Fibras (%)</th>
                    </thead>
                    <tbody id='tbConvencionais'></tbody>
                </table>
                <div class="infos">
                    <p>Além da enorme riqueza em proteínas de alta qualidade, os insetos também são fontes de:</p>
                    <ul>
                        <li>Gorduras saudáveis</li>
                        <li>Vitaminas e minerais essenciais:
                            <ul>
                                <li>Ferro</li>
                                <li>Zinco</li>
                                <li>Magnésio</li>
                                <li>Vitaminas do complexo B</li>
                            </ul>
                        </li>
                        <li>Quitina (fibra dietética)</li>
                    </ul>
                    <p>Vale ressaltar que além das já citadas, variedades diferentes de insetos podem oferecer perfis nutricionais ainda mais variados.</p>
                </div>
                <Footer/>
            </Container>
        </div>
    )
}

export default Tabelas;