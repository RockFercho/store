'use strict';

const Sequelize = require('sequelize');

//connection
const sequelize =  new Sequelize('testnode', 'appuser', 'App_User1', {
  host: 'localhost',
  dialect: 'mysql',

  poll: {
    max: 5,
    min: 0,
    idle: 10000
  }

});


//schema
const User = sequelize.define('user', {
  nombre: Sequelize.STRING,
  cumple: Sequelize.DATE
});


//insert data BD
// sequelize.sync().then(function () {
//   return User.create({
//     nombre: 'pepito',
//     cumple: new Date(1980, 8, 6)
//   });
// }).then(function(userDB){
//   console.log(userDB.get({
//     plain: true
//   }));
// });

async function create() {
  const userdb2 = await User.create({
    nombre: 'fer',
    cumple: new Date(1987, 4, 26)
  });
  
  console.log(userdb2);
};

create();




// module.exports = {
//   sequelize
// }