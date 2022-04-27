import '@testing-library/jest-dom';
import {getSaludo} from '../../bases/02-template-string';

describe('Pruebas en 02-template-string-string.js', ()=>{

    test('getSaludo debe de retornar hola fernando', ()=>{
        const nombre = 'Fernando';
        const saludo = getSaludo( nombre );
        console.log(saludo);
       //expect(saludo).toBe( 'Hola ' + nombre);
    })
})