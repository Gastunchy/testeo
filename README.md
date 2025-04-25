# Cliengo Chatbot SPA

Este proyecto consiste en la creación de una Aplicación de Página Única (SPA) que permite interactuar con el chatbot de la empresa Cliengo. La aplicación incluye un sistema de autenticación para gestionar el acceso de los usuarios.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación localmente:

```sh
# Clonar este repositorio en tu máquina local
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# Instalar las dependencias
npm install

# Iniciar el entorno de desarrollo
npm run dev
```

## Uso

Una vez que la aplicación esté en ejecución, puedes acceder a ella desde tu navegador en `http://localhost:5173` (o el puerto especificado en la configuración).

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

```sh
# Hacer un fork del repositorio y clonar tu versión

# Crear una nueva rama con una descripción clara de la funcionalidad o corrección
git checkout -b feature/nueva-funcionalidad

# Realizar los cambios y confirmar los commits
git commit -m "Agregada nueva funcionalidad"

# Subir los cambios a tu repositorio
git push origin feature/nueva-funcionalidad
```

Luego, crea un Pull Request para revisión.

## 📁 Estructura del Proyecto

- **Cliengo-Chatbot-SPA/**
  - 📂 **node_modules/** → Dependencias de Node.js  
  - 📂 **src/** → Código fuente de la aplicación  
    - 📂 **assets/** → Recursos estáticos (imágenes, fuentes, etc.)  
    - 📂 **components/** → Componentes reutilizables de React  
    - 📂 **css/** → Archivos de estilos CSS  
    - 📂 **firebase/** → Configuración y funciones relacionadas con Firebase  
    - 📂 **pages/** → Páginas principales de la aplicación  
    - 📂 **slices/** → Slices de Redux Toolkit (gestión del estado)  
    - 📂 **store/** → Configuración de Redux Store  
    - 📄 **App.jsx** → Componente principal de la aplicación  
    - 📄 **main.jsx** → Punto de entrada de la aplicación  
  - 📄 **.env** → Variables de entorno  
  - 📄 **.gitignore** → Archivos y carpetas ignorados por Git  
  - 📄 **eslint.config.js** → Configuración de ESLint  
  - 📄 **index.html** → Archivo HTML principal  
  - 📄 **package.json** → Configuración del proyecto y dependencias  
  - 📄 **package-lock.json** → Archivo de bloqueo de dependencias  
  - 📄 **README.md** → Documentación del proyecto  
  - 📄 **vite.config.js** → Configuración de Vite  

## Credenciales Firebase

Para configurar las credenciales de Firebase y poder utilizar la aplicacion en su totalidad, debe hacer lo siguiente:

- En el root del repositorio, crear un archivo llamado ".env".
- Dentro del archivo, se debe copiar la estructura que se encuentra en el siguiente link : [Firebase](https://console.firebase.google.com/project/atos-ai-agent-dev/settings/general/web:NzdhYzkyZTItMTU5Yy00MjUxLWI2NGQtNjdjOGU3ZjY5Njc5)
- Alli, en la seccion de "Your apps", podras encontrar una variable llamada "firebaseConfig", en donde encontraras las credenciales mencionadas.
- Dentro del ".env", se debe almacenar las credenciales con el siguiente formato:

```sh
VITE_API_KEY=YOUR_API_KEY
VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_APP_ID=YOUR_APP_ID
```




