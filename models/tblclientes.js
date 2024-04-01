const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const tblreservas = require('./tblreservas')

const tblclientes = db.define('tblclientes', {
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  birth: {
    type: DataTypes.DATE,
  },
  cardval: {
    type: DataTypes.DATE,
  },
  celphone: {
    type: DataTypes.STRING,
  },
  cep: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
})
module.exports = tblclientes