export default (sequelize, DataTypes) => {
  const Attendance = sequelize.define('attendances', {
    message: {
      type: DataTypes.STRING,
      unique: true
    },
    checkin: {
      type: DataTypes.TIME,
    },
    checkout: {
      type: DataTypes.TIME
    }
  });

  Attendance.associate = (models) => {
    Attendance.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return Attendance;
};