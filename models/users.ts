import { DataTypes, Sequelize } from 'sequelize';

export const UserModel = (sequelize: Sequelize) => {
    return sequelize.define('Users', {
        index: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middlename: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT
        },
        customer: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}

export interface MyUserModel {
    index: number,
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    phone: string;
    role: number;
    customer: number;
    address: string;
}
