module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Attendance',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false
      },
      user_id: {
        type: DataTypes.DATE
      }
    },
    {
      classMethods: {
        associate: models => {
          Attendancd.belongsTo(models.User);
        }
      }
    }
  );
};
