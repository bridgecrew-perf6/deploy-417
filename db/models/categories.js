'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ProfilEntries, Profils, Tags}) {
            // define association here
            this.belongsToMany(Profils, ({through: 'ProfilEntries', foreignKey: 'cat_id'}))
            this.hasMany(Tags, ({foreignKey: 'catId'}))

        }
    }

    Categories.init({
        title: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Categories',
    });
    return Categories;
};
