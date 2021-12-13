const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Tags extends Model {}

Tags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postedOn: {
            type: DataTypes.INTEGER,
            references:{
                model:'Blogs',
                key: 'id'
            }
        }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tags',
  }
);

module.exports = Tags;