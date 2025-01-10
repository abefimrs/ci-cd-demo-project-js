# Use an official Node runtime as a parent image
FROM node:20 as build

# Set the working directory
WORKDIR /MY-REACT-APP

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the project files and build the React app
COPY . .
RUN npm run build

# Use an NGINX image to serve the built React files
FROM nginx:stable-alpine
COPY --from=build /MY-REACT-APP/build /var/www/react-app

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
