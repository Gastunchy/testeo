# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu aplicación
COPY . .

# Expone el puerto que tu aplicación utilizará
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["npm", "run", "dev"]
