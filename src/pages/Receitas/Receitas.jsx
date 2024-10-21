import React, { useEffect } from 'react';
import { Header } from '../../landingPage/Header/Header';
import '../Receitas/receitas.css'
import Container from '../../landingPage/Container/Container';
import { Footer } from '../../landingPage/Footer/Footer';

const BuscaReceitas = () =>{
    return (
        <div>
            <div class="busca-container">
                <input type="text" id="inBusca" placeholder="Buscar receitas por nome ou inseto..."/>
                <input type="button" value="Buscar" id='btBuscar' class="btn-busca"/>
                <input type="button" value="Mostrar tudo" id="btMostrar" class="btn-busca"/>
            </div>
            <div id='outReceitas'></div>
        </div>
    )
}

const Receitas = () => {
    useEffect(() => {
        const btBuscar = document.getElementById('btBuscar');
        const btMostrar = document.getElementById('btMostrar')
        const inBusca = document.getElementById('inBusca');
        const outReceitas = document.getElementById('outReceitas')

        btBuscar.addEventListener('click', () => buscar(inBusca.value))
        inBusca.addEventListener('keydown', e => {
            if(e.key === 'Enter'){
                buscar(inBusca.value);
            }
        })
        btMostrar.addEventListener('click', () => buscar(''))
        
        const buscar = nome => {
            fetch(`http://localhost:5000/api/receitas/buscar?nome=${nome}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                return response.json(); 
            })
            .then(data => {
                outReceitas.innerHTML = '';
                
                data.forEach(receita => {
                    const ingredientes = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');
                    const instrucoes = receita.instrucoes.map(instrucao => `<li>${instrucao}</li>`).join('');
                    const newDiv = document.createElement('div')
                    newDiv.id = "receita"
                    newDiv.innerHTML += `
                    <h2>${receita.nome}</h2>
                    <span><b>Inseto utilizado:</b> <p>${receita.inseto}</p></span>
                    <b>Ingredientes:<b/> <ul>${ingredientes}</ul>
                    <b>Como fazer:</b> <ul>${instrucoes}</ul>
                    `
                    outReceitas.appendChild(newDiv)
                })
            })
            .catch(error => console.error('Erro:', error));
        }
        

    }, [])
    return (
        <div >
            <Header/>
            <Container>
                <BuscaReceitas/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Receitas;