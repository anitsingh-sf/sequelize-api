import express from 'express';
import { User } from '../index';

export const deleteUser = express.Router();

deleteUser.delete('/', async (req, res) => {
    User.destroy({
        where: {
            index : req.body.index
        }
    })
    .then( () => res.status(200).end())
    .catch( () => res.status(500).end());
});
