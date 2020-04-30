import express from 'express';
import { User } from '../index';

export const addUser = express.Router();

addUser.post('/', async (req, res) => {
    const newUserData = req.body.newUserData;

    User.create(newUserData)
    .then( () => res.status(200).end())
    .catch( () => res.status(500).end());
});
