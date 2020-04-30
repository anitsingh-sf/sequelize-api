import express from 'express';
import { User } from '../index';

export const getUsers = express.Router();

getUsers.get('/', async (req, res) => {
    const users = await User.findAll({})
    .catch( () => res.status(500).end());
    
    res.status(200).json(users).end();
});
