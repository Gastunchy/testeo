# Usa la imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de tu aplicación al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto en el que Nginx escucha
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]