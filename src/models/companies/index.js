export default (sequelize, DataTypes) => {
  const Company = sequelize.define('companies', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    website: {
      type: DataTypes.STRING
    }
  });

  Company.associate = (models) => {
    Company.hasMany(models.User);
  };

  return Company;
};