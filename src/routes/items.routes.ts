import { Router } from 'express'
import Knex from '../database/connection'

const itemsRouter = Router()

itemsRouter.get('/', async(req,res)=>{
    const items = await Knex('items').select('*')

    const serializedItems = items.map(item =>{
        return {
            id:item.id,
            title:item.title,
            image_url:`http://localhost:3004/uploads/${item.image}`
        }
    })

    return res.json(serializedItems)
})

export default itemsRouter