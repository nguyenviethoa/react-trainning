export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('comments', {
    message: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId'
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return Comment;
};