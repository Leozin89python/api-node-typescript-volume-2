import Knex from '../database/connection'
import { Router } from 'express'

const locationRouter = Router()

locationRouter.get('/',async(req,res)=>{
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = req.body

    const location = {
        image:'fake-image.jpg',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    }

    const newIds = await Knex('locations').insert(location)
    const locationId = newIds[0]

    const locationItems = items.map((item_id: number) =>{
        return {
           item_id,
           location_id: locationId
        }
    })

    await Knex('location_items').insert(locationItems)

    return  res.json({
        id:locationId,
        ...location
    })
})
export default locationRouter

     /*{
        "name": "Log total",
        "email": "logtotal@outlook.com",
        "whattsap": "71998659856",
        "latitude": -58.96474125,
        "longitude": -26.58965874,
        "city":"Salvador",
        "uf":"BA",
        "items":[1,3,5]    
    }*/