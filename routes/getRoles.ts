import express from 'express';
import { Role } from '../index';

export const getRoles = express.Router();

getRoles.get('/', async (req, res) => {
    const roles = await Role.findAll({})
    .catch( () => res.status(500).end());
    
    res.status(200).json(roles).end();
});
