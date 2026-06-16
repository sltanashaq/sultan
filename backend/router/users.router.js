import express from 'express'
import { getUsers,postUser,PutUser,deleteUser,getUser2 } from './../conterollers/user.conterollers.js'

const router = express.Router()
// console.log(router)

router.get("/",getUsers)
router.get("",getUser2)
router.post("",postUser)
router.put("",PutUser)
router.delete("/:id",deleteUser)

export default router