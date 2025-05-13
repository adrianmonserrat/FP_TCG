# Proyecto TFG: Álbum Digital de Juegos de Cartas Coleccionables

[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-Integration-blue?style=flat-square&logo=dockercompose)](https://docs.docker.com/compose/)

Este proyecto consiste en el desarrollo de un álbum digital interactivo para coleccionar y gestionar cartas de juegos de cartas coleccionables. La aplicación permitirá a los usuarios registrarse, explorar una base de datos exhaustiva de cartas, y potencialmente interactuar para el intercambio.

## Funcionalidades Principales

Las siguientes funcionalidades están planificadas para este proyecto:

1.  **Base de Datos de Cartas:** Creación de una base de datos completa con información detallada de diversas cartas coleccionables. [ ]
2.  **Registro de Usuarios:** Implementación de un sistema de registro y autenticación de usuarios para gestionar colecciones personalizadas. [ ]
3.  **Listado de Juegos:** Catálogo organizado de diferentes juegos de cartas coleccionables soportados en la plataforma. [ ]
4.  **Integración de Precios (Opcional):** Posibilidad de incorporar información de precios de cartas proveniente de diversas plataformas de venta online. [ ]
5.  **Chat de Intercambio (Opcional):** Implementación de un sistema de chat para facilitar el intercambio de cartas entre usuarios. [ ]

## Tecnologías Utilizadas

Este proyecto se despliega utilizando **Docker** y **Docker Compose**, lo que facilita la configuración y ejecución de los diferentes componentes de la aplicación. La arquitectura incluye:

* **Frontend:** Desarrollado con **Angular**.
* **Backend:** Desarrollado con **Symfony**.
* **Base de Datos:** **PostgreSQL**.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados en tu sistema:

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

1.  **Clonar el Repositorio**

    Ejecuta el siguiente comando para obtener el código del proyecto:

    ```bash
    git clone git@github.com:CodeArts-Solutions/koala-B-Museo-Cartuja.git
    cd koala-B-Museo-Cartuja
    ```

2.  **Levantar los Contenedores**

    Utiliza Docker Compose para iniciar todos los servicios necesarios en segundo plano:

    ```bash
    docker-compose up -d
    ```

    📌 **Nota:** La primera vez que ejecutes este comando, Docker Compose descargará las imágenes necesarias y configurará los contenedores, lo que puede llevar algunos minutos.

3.  **Verificar el Estado de los Contenedores**

    Una vez que Docker Compose haya terminado, verifica que todos los contenedores estén en ejecución con el siguiente comando:

    ```bash
    docker ps
    ```

    Deberías ver tres contenedores activos: `PostgreSQL`, `symfony_backend`, y `angular_frontend`.

4.  **Acceder a la Aplicación**

    * **Frontend (Angular):** Abre la siguiente URL en tu navegador web: [http://localhost:4100](http://localhost:4100)
    * **Backend (Symfony):** Puedes acceder a la salida del backend en: [http://localhost:8070](http://localhost:8070)
    * **Base de Datos (PostgreSQL):** El servicio de la base de datos está disponible en el puerto `5500`. Generalmente, no necesitarás acceder directamente a esta URL desde el navegador.

## Detener y Reiniciar los Contenedores

* **Detener los contenedores:**

    ```bash
    docker-compose down
    ```

* **Volver a iniciar los contenedores:**

    ```bash
    docker-compose up -d
    ```

## Eliminar Contenedores y Datos Persistentes

⚠️ **Advertencia:** Este comando eliminará todos los contenedores y los datos almacenados en los volúmenes, incluyendo la base de datos PostgreSQL. Úsalo con precaución.

```bash
docker-compose down -v
