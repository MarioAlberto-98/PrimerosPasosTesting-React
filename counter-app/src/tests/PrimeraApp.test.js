import PrimeraApp from "../PrimeraApp";
import {render} from '@testing-library/react'
import React from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />',()=>{
    test('Debe de mostrar el mensaje "Hola, Soy Goku',()=>{
       const saludo= 'Hola, soy Goku';
       
       //Se usa destructuracion y en base a ello se obtiene los datos de 'saludo'
       const {getByText} =render(<PrimeraApp saludo={saludo} />);
       //Forma de programacion testing de airb&b y fb 
       expect(getByText(saludo)).toBeInTheDocument(); 
    })
})