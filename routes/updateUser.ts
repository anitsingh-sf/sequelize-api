import express from 'express';
import { User } from '../index';

export const updateUser = express.Router();

updateUser.post('/', async (req, res) => {
    User.update(req.body.updatedUserData, {
        where: {
            index: req.body.updatedUserData.index
        }
    })
    .then( () => res.status(200).end())
    .catch( () => res.status(500).end());
});
