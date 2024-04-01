const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const tblclientes = require('./tblclientes')


const tblreservas = db.define('tblreservas', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    veiculo: {
      type: DataTypes.STRING,
    },
    placa: {
      type: DataTypes.STRING,
    },
    localretirada: {
      type: DataTypes.STRING,
    },
    dataretirada: {
      type: DataTypes.DATE,
    },
    horaretirada: {
      type: DataTypes.TIME,
    },
    localdevolucao: {
      type: DataTypes.STRING,
    },
    datadevolucao: {
      type: DataTypes.DATE,
    },
    horadevolucao: {
      type: DataTypes.TIME,
    },    
  })

  tblreservas.associte = (models) => {
    tblreservas.belongsTo(models.tblclientes, {
      constraint: true,
      foreignKey: 'cpf'
    })
  }
  
  
  module.exports = tblreservas