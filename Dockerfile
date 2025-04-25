# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Expone el puerto que la aplicación usará
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
