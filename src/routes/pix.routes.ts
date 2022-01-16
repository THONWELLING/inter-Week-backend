import { Router } from 'express'
import userAuthenticated from '../middlewares/userAuthenticated';

const pixRouter = Router()

pixRouter.use(userAuthenticated)

// pixRouter.post('/request', pixController.request)
// pixRouter.post('/pay/:key', pixController.pay)
// pixRouter.get('/transactions', pixController.transactions)


export default pixRouter;