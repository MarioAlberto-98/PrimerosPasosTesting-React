describe('Pruebas en el archivo demo.test.js', ()=>{


test('Deben de ser iguales los strings', ()=>{
  /*  const isActive =true;
    if(isActive){
         throw new Error('No esta activo');
    }
    */
    //1. Inicializacion
    const mensaje = 'Hola Mundo';
    //2. Estimulo
    const mensaje2='Hola Mundo';
    //3. Observer el comportamiento
    expect(mensaje).toBe(mensaje2);

})

});