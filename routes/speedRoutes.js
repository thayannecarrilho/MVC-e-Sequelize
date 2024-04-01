const express = require('express')
const router = express.Router()
const speedController = require('../controllers/speedController')

router.get('/', speedController.showSpeed)
router.get('/register/insertdata', speedController.insertData)
router.get('/makereserve', speedController.makeReserve)
router.post('/register/insertdata', speedController.registerInsertData)
router.post('/makereserve/insert', speedController.makeReserveInsert)
router.get('/allreserves', speedController.allReserves)
router.get('/allreserves/:cpf', speedController.allReservesCpf)
router.get('/reserve/edit/:id', speedController.reserveEditId)
router.post('/reserve/update', speedController.reserveUpdate) 
router.post('/reserve/remove/:id', speedController.reserveRemoveId) 
  

module.exports = router
   
  