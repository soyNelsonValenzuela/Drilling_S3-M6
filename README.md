# Drilling S3-M6

Este proyecto es una práctica que utiliza conceptos de ECMAScript actualizados, específicamente trabajando con objetos, desestructuración, funciones flecha y el uso de bibliotecas externas como `moment` y `lodash`.

## Descripción del Proyecto

En este ejercicio, se ha creado un objeto que representa las características de un celular, utilizando las siguientes herramientas y conceptos de JavaScript:

- **Paquetes utilizados**: `moment` y `lodash`.
- **Funciones**: Uso de funciones flecha y callbacks.
- **Características del celular**: Se definen al menos cinco propiedades junto con una fecha generada por `moment`.

## Instrucciones

1. **Configuración del Proyecto**:
   - Comienza un nuevo proyecto utilizando `npm init`.
   - Instala los paquetes `moment` y `lodash`:
     ```bash
     npm install moment lodash
     ```

2. **Archivo `celular.js`**:
   - Crea un archivo llamado `celular.js`.
   - En este archivo, define y exporta un objeto con al menos cinco características de tu celular (por ejemplo: marca, modelo, color, memoria, almacenamiento, y una fecha generada por `moment`).

   ```javascript
   // celular.js
   const celular = {
       marca: 'Samsung',
       modelo: 'Galaxy S21',
       color: 'Negro',
       memoria: '8GB',
       almacenamiento: '128GB',
       fecha: moment().format('YYYY-MM-DD')
   };

   export default celular;
   ```

	3.	**Archivo `index.js`**:
	  - Importa el objeto desde celular.js utilizando la desestructuración.
	  - Crea una función que muestre por pantalla la descripción de tu celular usando template literals.
  
```
// index.js
import celular from './celular.js';

const { marca, modelo, color, memoria, almacenamiento, fecha } = celular;

const mostrarDescripcion = () => {
    console.log(`Mi celular es un ${marca} ${modelo} de color ${color} con ${memoria} de memoria y ${almacenamiento} de almacenamiento. Fecha: ${fecha}`);
};

mostrarDescripcion();
```

4.	**Uso del Spread Operator**:
     - Crea una copia del objeto y actualiza dos de sus propiedades.
  
```
const celularActualizado = {
    ...celular,
    almacenamiento: '256GB',
    color: 'Blanco'
};
```

5.	**Ejemplo de Callback**:
  - Implementa una función de callback utilizando la sintaxis de función flecha.

```
const callbackEjemplo = (callback) => {
    console.log('Ejecutando callback...');
    callback();
};

callbackEjemplo(() => {
    console.log('¡Callback ejecutado correctamente!');
});
```

## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando en tu terminal:

```
node index.js
```

## Requisitos

  - Node.js instalado en tu máquina.
  - Tener acceso a Internet para instalar los paquetes necesarios.

## Conclusiones

Este ejercicio refuerza el entendimiento de las características modernas de JavaScript y la importancia de las bibliotecas externas en el desarrollo de aplicaciones eficientes y modernas.









