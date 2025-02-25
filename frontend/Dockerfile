# Étape 1 : Construction et tests
FROM node:20-alpine AS builder

WORKDIR /app

# Copier et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application (génère le dossier dist)
RUN npm run build

# Étape 2 : Image de production avec NGINX
FROM nginx:alpine

# Copier les fichiers buildés vers le dossier de NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
