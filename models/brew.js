module.exports = function (sequelize, DataTypes) {
    const Brew = sequelize.define("Brew", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        ingredients:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "{}"
        }

    });

    Brew.associate = (models) => {
       Brew.hasMany(models.Comment);
       Brew.belongsTo(models.User);
    };

    return Brew;
};