'use strict';

const crypto = require('crypto')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(value, next){
          User.find({
            where:{
              email:value
            },attributes:["id"]
          }).done(function(user){
            if (user) {
              return next(`Email address already in use`)
            }
            next()
          })
        }
      }
    },
    phone:{
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:"Phone length must be 10-13"
        },
        isNumeric:{
          args:true,
          msg:"Phone not allow letters"
        },
        isAlphanumeric:{
          args:false,
          msg:"Phone not allow alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
    hooks:{
      beforeCreate:function(value, option){
        let unique = "abcdefghijklmnopqrsstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let salt = ''

        for (let i = 0; i < 10; i++) {
          salt += unique[Math.floor(Math.random() * unique.length)]
        }

        value.salt = salt

        const hash = crypto.createHmac('sha512', salt)
                           .update(value.password)
                           .digest('hex')

        value.password = hash

      }
    }
  });
  return User;
};
