import { DataTypes, Sequelize } from 'sequelize';

export const CustomerModel = (sequelize: Sequelize) => {
    return sequelize.define('customers', {
        index: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        website: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        }
    });
}

export interface MyCustomerModel {
    index: number;
    name: string;
    website: string;
    address: string;
}
