# Chart App Microservice

## How to run app
1. To run, download files/clone repository to local machine. 
2. Open terminal in folder location.
3. Type 'npm i' to install necessary dependencies. 
4. To start server type 'npm start' and press enter.
5. To run continuously via nodemon type 'npm run devstart' and press enter.

## *Request* data from server
To send get requests to the server, user must first run the API locally. While the API is running the user can send requests to the following endpoints:

  *NOTE: As standard, the server runs on PORT 3500*
- http://localhost:3500/salary
  - Provides the name and salary of three example employees.
- http://localhost:3500/crypto
  - Provides the current price in USD of Bitcoin and Ethereum. 
- http://localhost:3500/population/world
  - Provides the population of the entire world.
- http://localhost:3500/population/country/:id
  - Provides the population of a specific country identified by 'id'.
  - For example, the population of Canada would be requrested with: http://localhost:3500/population/country/Canada


## *Recieve* data from server
- To get data the user must send a request to one of the above paths. 
- Data is then sent back to the user in JSON format.
- Data can be used however the user wants. 
- Requests can be made using multiple methods such as http requests or Axios in a Node.js application. 

## UML Diagram

![UML](https://user-images.githubusercontent.com/111259248/199158764-52ee1cb8-9f7e-466f-8db0-db846feb07c9.png)
