export default (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    confirmed: {
      type: DataTypes.BOOLEAN
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Post, { 
      through: 'comments',
      foreignKey: 'userId'
    });
    
    User.hasMany(models.Attendance);
  };

  return User;
};