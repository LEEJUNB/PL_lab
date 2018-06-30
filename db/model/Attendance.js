module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Attendance',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      attendance_date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()'),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: false
    }
  );
};
