import express from 'express';
import { Users } from '..';

export const updateUser = express.Router();

updateUser.post('/', async (req, res) => {
    Users.update(req.body.updatedUserData, {
        where: {
            index: req.body.updatedUserData.index
        }
    })
    .then( () => res.status(200).end())
    .catch( () => res.status(500).end());
});
