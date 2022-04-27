import {getUser, getUsuarioActivo} from "../../bases/05-funciones"
describe('Pruebas en 05-funciones', () =>{
    test('getUser debe de retornar un objeto',()=>{
        const userTest ={
            uid: 'ABC123',
            username: 'Mario'
        }
        const user = getUser();
        console.log(user);
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de retornar un objecto', ()=>{
        const nombre = 'Juan';
        const user =getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
        console.log(user);
    })



})