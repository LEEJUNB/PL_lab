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
        // references: {
        //   model: 'User',
        //   key: 'id'
        // }
      }
    },
    {
      timestamps: false
    }
  );
};
