import { DataTypes, Sequelize } from 'sequelize';

export const UserModel = (sequelize: Sequelize) => {
    return sequelize.define('users', {
        index: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middleName: {
            type: DataTypes.STRING
        },
        lastName: {
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
        roleName: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT
        },
        customerName: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}

export interface MyUserModel {
    index: number,
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    roleName: number;
    customerName: number;
    address: string;
}
