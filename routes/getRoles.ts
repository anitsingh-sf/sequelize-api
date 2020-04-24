import express from 'express';
import { Role } from '../index';

export const getRoles = express.Router();

getRoles.get('/', async (req, res) => {
    const roles = await Role.findAll({});
    
    res.status(200).json(roles).end();
});
