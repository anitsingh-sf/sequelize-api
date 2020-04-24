import express from 'express';
import { Customer } from '../index';

export const getCustomers = express.Router();

getCustomers.get('/', async (req, res) => {
    const customers = await Customer.findAll({});
    
    res.status(200).json(customers).end();
});
