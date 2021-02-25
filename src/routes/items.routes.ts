import { Router } from 'express'
import Knex from '../database/connection'

const itemsRouter = Router()

itemsRouter.get('/', async(req,res)=>{
    const items = await Knex('items').select('*')

    return res.json(items)
})

export default itemsRouter