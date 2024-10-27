// importar libreria lodash
const _ = require('lodash');

//importar objeto celular
const { celular } = require('./celular.js');

//creamos una funsion que retorne las propiedades del objeto
function mostrar(modelo, marca, color, memoria, camara, fecha) {
    return `Lleva ya tu ${modelo}, marca ${marca}, color ${color}, ${memoria} de memoria y camara de ${camara}\nPromoción valida solo el día ${fecha}`;
};

//mostramos por consola lo que nos retorna la funsion 
console.log(mostrar(celular.modelo, celular.marca, celular.color, celular.memoria, celular.camara, celular.fecha))


// Ejemplo de funcion callback con arrow function

const procesar = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};
procesar([1, 2, 3, 4], (numero) => {
    console.log(numero * 2);
});

