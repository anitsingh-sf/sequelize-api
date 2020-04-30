import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize, Model, BuildOptions } from 'sequelize';

import { UserModel, MyUserModel } from './models/users';
import { CustomerModel, MyCustomerModel } from './models/customers';
import { RoleModel, MyRoleModel } from './models/roles';

import { addUser } from './routes/addUser';
import { getUsers } from './routes/getUsers';
import { updateUser } from './routes/updateUser';
import { deleteUser } from './routes/deleteUser';
import { getCustomers } from './routes/getCustomers';
import { getRoles } from './routes/getRoles';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/addUser', addUser);
app.use('/api/getUsers', getUsers);
app.use('/api/updateUser', updateUser);
app.use('/api/deleteUser', deleteUser);
app.use('/api/getCustomers', getCustomers);
app.use('/api/getRoles', getRoles)

const sequelize = new Sequelize('user-app', 'postgres', 'Anit123', {
    host: 'localhost',
    dialect: 'postgres'
});

type UserModelType = typeof Model & {
    new (values?: object, options?: BuildOptions): MyUserModel;
};
export const User = <UserModelType>UserModel(sequelize);

type CustomerModelType = typeof Model & {
    new (values?: object, options?: BuildOptions): MyCustomerModel;
};
export const Customer = <CustomerModelType>CustomerModel(sequelize);

type RoleModelType = typeof Model & {
    new (values?: object, options?: BuildOptions): MyRoleModel;
};
export const Role = <RoleModelType>RoleModel(sequelize);

User.belongsTo(Customer);
User.belongsTo(Role);
Customer.hasMany(User);
Role.hasMany(User);

sequelize.sync()
.then(() => {
    app.listen(5500, () => console.log("Server started on port", 5500));
});
