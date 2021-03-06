import { Router } from 'express'
import itemsRouter from './items.routes'
import itemsLocation from './locations.routes' 

const routes = Router()

routes.use('/items', itemsRouter)
routes.use('/locations',itemsLocation)


export default routes