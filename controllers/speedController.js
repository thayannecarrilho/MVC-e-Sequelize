const tblclientes = require('../models/tblclientes')
const tblreservas = require('../models/tblreservas')

module.exports = class speedController{
    
    static showSpeed(req, res){
        res.render('home')
    }

    static insertData(req, res) {
        res.render('register')
    }

    static makeReserve(req, res) {
        res.render('makereserve')
    }    

    static registerInsertData(req, res) {
        const clientes = {
          cpf: req.body.cpf,
          name: req.body.name,
          birth: req.body.birth,
          cardval: req.body.cardval,    
          celphone: req.body.celphone, 
          cep: req.body.cep,
          address: req.body.address,
          number: req.body.number,
          city: req.body.city, 
          state: req.body.state
        }
        
        tblclientes.create(clientes)
        .then(res.redirect('/'))
        .catch((err) => console.log())
    }

    static makeReserveInsert(req, res) {
      const reservas = {
        cpf: req.body.cpf,
        veiculo: req.body.veiculo,
        placa: req.body.placa,
        localretirada: req.body.localretirada,    
        dataretirada: req.body.dataretirada,
        horaretirada: req.body.horaretirada,
        localdevolucao: req.body.localdevolucao,
        datadevolucao: req.body.datadevolucao,
        horadevolucao: req.body.horadevolucao
    }
          
      tblreservas.create(reservas)
      .then(res.redirect('/'))
      .catch((err) => console.log())
    }

    static allReserves(req,res){
      tblclientes.findAll({ raw: true })
      .then((data) => {
        res.render('allreserves', { tblclientes: data })
      })
      .catch((err) => console.log())
    }

    static allReservesCpf(req,res){
      const cpf = req.params.cpf  
      tblreservas.findAll({where: { cpf: cpf }, raw:true})
      .then((data) => {
        res.render('reserve', { tblreservas: data })
      })
      .catch((err) => console.log())
    }

    static reserveEditId(req, res){
      const id = req.params.id
        tblreservas.findOne({ where: {id: id}, raw:true})
        .then((data) => {
          res.render('editreserve', {tblreservas: data})
        })
        .catch((err) => console.log())
    }
  
    static reserveUpdate(req, res){
      const id = req.body.id  
      const reserva = {
        veiculo: req.body.veiculo,
        placa: req.body.placa,
        localretirada: req.body.localretirada,    
        dataretirada: req.body.dataretirada,
        horaretirada: req.body.horaretirada,
        localdevolucao: req.body.localdevolucao,
        datadevolucao: req.body.datadevolucao,
        horadevolucao: req.body.horadevolucao 
      }
  
      tblreservas.update(reserva, {where: {id:id}})
        .then(res.redirect('/allreserves'))
        .catch((err) => console.log())
    }

    static reserveRemoveId(req, res){
      const id = req.params.id   
      tblreservas.destroy({where: {id:id}})
        .then(res.redirect('/allreserves'))
        .catch((err) => console.log())
    }
} 
