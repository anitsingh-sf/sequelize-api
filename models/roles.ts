import { DataTypes, Sequelize } from 'sequelize';

export const RoleModel = (sequelize: Sequelize) => {
    return sequelize.define('Roles', {
        index: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        key: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });
}

export interface MyRoleModel {
    index: number;
    name: string;
    key: string;
    description: string;
}
