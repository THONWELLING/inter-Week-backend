import express from 'express';
import { GlobalErrors } from './middlewares/globalErrors';
import routes from './routes';

const app = express();
const PORT = 3333;

app.use(routes)
app.use(GlobalErrors)
app.listen(PORT, () => {
 
  return console.log(`Server is Running At http://localhost: ${PORT}`);
});