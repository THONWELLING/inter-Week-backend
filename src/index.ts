import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3333;

app.use(routes)
app.listen(PORT, () => {
 
  return console.log(`Server is Running At http://localhost: ${PORT}`);
});