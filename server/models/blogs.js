const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Blogs extends Model {}

Blogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,        
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogs',
  }
);

module.exports = Blogs;