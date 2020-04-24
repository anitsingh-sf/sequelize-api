import express from 'express';
import { Users } from '../index';

export const getUsers = express.Router();

getUsers.get('/', async (req, res) => {
    const users = await Users.findAll({})
    .catch( () => res.status(500).end());
    
    res.status(200).json(users).end();
});
