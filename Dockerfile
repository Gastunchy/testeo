RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior
COPY /dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para Nginx
CMD ["nginx", "-g", "daemon off;"]
