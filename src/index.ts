import 'express-async-errors'
import express from 'express';
import { Connection, createConnection } from 'typeorm';
import { GlobalErrors } from './middlewares/globalErrors';
import routes from './routes';


createConnection().then(connection => {
  const app = express();
  const PORT = 3333;

  app.use(express.json())
  app.use(routes)
  app.use(GlobalErrors)
  app.listen(PORT, () => {
  
    return console.log(`Server is Running At http://localhost: ${PORT}`)
  })
}).catch((error) => {
  console.log('Unable To Connect To The Database', error)
})