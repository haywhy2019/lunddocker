FROM mcr.microsoft.com/windows/servercore:1803 as installer

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]

RUN Invoke-WebRequest -OutFile nodejs.zip -UseBasicParsing "https://nodejs.org/dist/v12.4.0/node-v12.4.0-win-x64.zip"; `
Expand-Archive nodejs.zip -DestinationPath C:\; `
Rename-Item "C:\\node-v12.4.0-win-x64" c:\nodejs

FROM mcr.microsoft.com/windows/nanoserver:1803

WORKDIR C:\nodejs
COPY --from=installer C:\nodejs\ .
RUN SETX PATH C:\nodejs
RUN npm config set registry https://registry.npmjs.org/

# Use the official image as a parent image.
#FROM node-windows:latest

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .