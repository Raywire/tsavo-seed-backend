# Pull in the official version of Node 12.
FROM node:12

# Create and change to the app directory.
WORKDIR /usr/src/app

COPY package*.json ./

# Install production dependencies.
RUN npm ci --only=production

# Copy local codebase into the container image
COPY . ./

# Start the api server
CMD [ "npm", "start" ]