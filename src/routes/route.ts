import { Router } from 'express'

const routes = Router()

routes.get('/', (req,res)=>{
    return res.json({
        msg:'online in port 3004'
    })
})

export default routes