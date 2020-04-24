import express from 'express';
import { Customer } from '../index';

export const getCustomers = express.Router();

getCustomers.get('/', async (req, res) => {
    const customers = await Customer.findAll({})
    .catch( () => res.status(500).end())
    
    res.status(200).json(customers).end();
});
