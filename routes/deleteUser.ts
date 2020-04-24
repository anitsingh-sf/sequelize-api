import express from 'express';
import { Users } from '../index';

export const deleteUser = express.Router();

deleteUser.delete('/', async (req, res) => {
    Users.destroy({
        where: {
            index : req.body.index
        }
    })
    .then( () => res.status(200).end())
    .catch( () => res.status(500).end());
});
