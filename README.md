# Express + Mongoose boilerplate

My boilerplate for developing APIs with Express and MongoDB.

## Usage
1. Install dependencies:

  `npm install`

2. Set up environment variables:

  ```
   $ export PORT=3000
   $ export DB_URL=mongodb://localhost/testdb
  ```
  `.env` files are also supported - create a `.env` file in the root directory of the project, and define environment variables there.

  ```
  PORT=3000
  DB_URL=mongodb://localhost/testdb
  NODE_ENV=production
  ```

3. Start the server:

  `npm start`

## Built with

* [Express](http://expressjs.com/) - my favourite NodeJS framework for backend development

* [Mongoose](http://mongoosejs.com/) - great ORM for MongoDB

* [dotenv](https://github.com/motdotla/dotenv) - a wonderfull little package for loading environment variables from `.env` files

Big, big thanks for the authors of those tools!
