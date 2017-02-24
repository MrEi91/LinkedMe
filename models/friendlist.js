'use strict';
module.exports = function(sequelize, DataTypes) {
  var FriendList = sequelize.define('FriendList', {
    requesterID: DataTypes.INTEGER,
    approverID: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        FriendList.belongsTo(models.User, {foreignKey: 'requesterID'})
        FriendList.belongsTo(models.User, {foreignKey: 'approverID'})
      }
    }
  });
  return FriendList;
};
