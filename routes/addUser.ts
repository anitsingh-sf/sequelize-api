import express from 'express';
import { Users } from '../index';

export const addUser = express.Router();

addUser.post('/', async (req, res) => {
    const newUserData = req.body.newUserData;
    await Users.create(newUserData)

    res.status(200).end();
});
