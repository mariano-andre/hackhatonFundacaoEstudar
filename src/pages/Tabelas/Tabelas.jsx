import React, { useEffect } from 'react';
import { Header } from '../../landingPage/Header/Header';
import Container from '../../landingPage/Container/Container';

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
    }, [])

    return (
        <div>
            <Header/>
            <Container>
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
            </Container>
        </div>
    )
}

export default Tabelas;