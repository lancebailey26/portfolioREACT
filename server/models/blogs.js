const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
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
		para1: {
			type: DataTypes.TEXT,
			allowNull: false,        
		},
		para2: {
			type: DataTypes.TEXT,
			allowNull: true,        
		},
		para3: {
			type: DataTypes.TEXT,
			allowNull: true,        
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