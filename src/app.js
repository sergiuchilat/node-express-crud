const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())

const router = require("./routes/index");
app.use('/', router);

app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})

connectToDatabase(app);

function connectToDatabase(){
  (async () => {
    const connection = require('./database/connect')
    try {
      await connection.authenticate();
      const migrate = require('./database/migrate')
      migrate(connection);
      await connection.sync();

   } catch (error) {
     console.error('Unable to connect to the database:', error);
   }
  })()
}
