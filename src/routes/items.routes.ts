import { Router } from 'express'
import Knex from '../database/connection'

const itemsRouter = Router()

itemsRouter.get('/', async(req,res)=>{
    const items = Knex('items').select('*')
    return res.json({msg:'lista de items'})
})

export default itemsRouter