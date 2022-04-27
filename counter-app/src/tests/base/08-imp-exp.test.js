import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import  heroes from '../../data/heroes';


describe('Oruebas en funciones de Heroes', ()=>{
    test('Debe de retornar un heroe por id',()=>{
        const id=1;
        const heroe = getHeroeById(id);
        console.log(heroe);
        const heroeData=heroes.find(h=>h.id=== id);
        expect(heroe).toEqual(heroeData)
    })

    test('Debe de retornar un undefined si Heore no existe',()=>{
        const id=10;
        const heroe = getHeroeById(id);
          expect(heroe).toEqual(undefined)
    })
    test('Debe de retornar un arreglo con los heroes de DC',() =>{
        const owner='DC';
        const heroes=getHeroesByOwner(owner);
        const heoresData=heroes.filter(h =>h.owner===owner);
        expect(heroes).toEqual(heroesData);
    })
    test('Debe de retornar un arreglo con los heroes de Marvel',()=>{
        const owner ='Marvel';
        const heroes=getHeroesByOwner(owner);
        
        //Lo que se realiza aqui es 
        expect(heroes.length).toBe(2);
    })
})