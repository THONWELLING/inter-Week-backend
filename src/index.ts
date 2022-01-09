import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (req, res) => {
  res.send('Express + Typescript Server Testando  1,2,3');
});
app.listen(PORT, () => {
 
  return console.log(`Server is Running At http://localhost: ${PORT}`);
});