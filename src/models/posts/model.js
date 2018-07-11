export default (sequelize, DataTypes) => {
  const Post = sequelize.define('posts', {
    title: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Post.associate = (models) => {
    Post.belongsToMany(models.User, { 
      through: 'comments',
      foreignKey: 'postId'
    });
  };

  return Post;
};