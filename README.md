
## Moralis Cloud-Code Project Boilerplate in Typescript

  

1. Installation

    `npm install moralis-admin-cli -g`

    `npm install`
2. Env

    Create a .env file in root with these properties:
    
    `MORALIS_CLI_SECRET=<insertSecret>`
    
    `MORALIS_CLI_KEY=<insertApiKey>`

2. Usage

  
Code & Typescript files located in /src/
Webpack is used for building a single .js file into /dist/ which will be uploaded to moralis cloud code server.

User provided scripts:

> webpack-watch (builds the /src/ and watches for changes)

> watch-logs (outputs logs of your moralis cloud code server)

> cloud-upload (watches for changes of /dist/ and uploads to cloud code server)
  
Check out the working sample code inside /src/ for Moralis library usage in this project.

Moralis Cloud Code Docs: [https://docs.moralis.io/moralis-server/cloud-code](https://docs.moralis.io/moralis-server/cloud-code)

  

Have fun coding