# Servidor Node.js con información del sistema

Este repositorio contiene una aplicación Node.js que crea un servidor HTTP básico, muestra información del sistema al inicio y registra periódicamente el uso de la CPU, el uso de la memoria, el tiempo de actividad del sistema y el tiempo de actividad de Node.js. La frecuencia de la información periódica se puede configurar mediante un archivo `config.json`.

## Pre-requisitos

Antes de ejecutar el servidor Node.js, asegúrate de tener los siguientes requisitos previos instalados en su sistema:

- Node.js: descarga e instala Node.js desde [nodejs.org](https://nodejs.org/).

## Para usarlo

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/your-username/pruebaServidor.git

2. Navega hasta el directorio del proyecto:

    ```bash
    cd pruebaServidor

3. Instala las dependencias del proyecto:

    ```bash
    npm install

4. Crea o actualiza el archivo 'config.json' en el directorio del proyecto con el siguiente contenido (ajusta el intervaloSeconds según se desee):

    ```javascript
    {
      "intervalSeconds": 10
    }


5. Inicia el servidor Node.js:

    ```bash
    node server.js

6. Accede al servidor en tu navegador web en: http://localhost:3000.

## Configuración

Puedes ajustar la configuración modificando el archivo 'config.json'. El parámetro 'intervalSeconds' controla la frecuencia con la que se muestra la información del sistema en segundos.

## Licencia

Este proyecto tiene la licencia MIT; consulte el archivo de LICENCIA para obtener más detalles.
