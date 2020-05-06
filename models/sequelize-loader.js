'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'mysql://root:ffrrffrr1@localhost/schedule_arranger',
  {
    operatorsAliases: false
  });

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};