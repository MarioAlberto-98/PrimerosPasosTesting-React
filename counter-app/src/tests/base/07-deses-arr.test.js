import {retornaArreglo} from '../../bases/07-deses-arr'

describe('Pruebas en desestructuracion', ()=>{
    test('debe de retornar un string y un nuemro',()=>{

        const [letras, numeros] =retornaArreglo();
        console.log(typeof numeros);
         expect(letras).toBe('ABC');
         expect(typeof letras).toBe('string');

         expect(numeros).toBe(123);
         expect(typeof numeros).toBe('number');

    })
})