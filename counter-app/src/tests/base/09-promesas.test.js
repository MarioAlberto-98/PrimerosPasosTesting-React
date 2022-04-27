import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from '../../data/heroes'



//La sentacia (done) lo que hace es termianr lo asincrono y no se siga 

describe('Pruebas con promesas',()=>{
    test('getHeroeByAsync debe de retorar un Heroe async',(done)=>{
        const id=1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

test('Debe de obtener un error si el heroe por id no existe',(done)=>{
    const id=10;
    getHeroeByIdAsync(id)
        .catch(error =>{
            expect(error).toBe('No se pudo encontrar el heroe');
            done();
        });
});






})