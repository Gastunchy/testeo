# Etapa 1: Construcción de la aplicación Node.js
FROM node:14 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar los archivos de la aplicación
COPY . .

# Construir la aplicación (si es necesario)
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para Nginx
CMD ["nginx", "-g", "daemon off;"]
