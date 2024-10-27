// importando la libreria moment
const moment = require('moment');
// creado un objeto
const celular = {
    marca: "Apple",
    modelo: "iPhone 11",
    color: "Plata",
    memoria: "32gb",
    camara:"8 mpx" ,
    //utilizando moment para crear una fecha formateada
    fecha: moment().format('DD-MM-YY')
};

// creando un objeto copiado de otro y actulalizando valores de algunas propiedades.
const celular2={
    ...celular,
    color: "Negro",
    memoria: "64gb"
};


console.log(celular2);

//Exportamos el objeto celular
module.exports = {celular};
