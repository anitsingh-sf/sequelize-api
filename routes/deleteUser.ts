import express from 'express';
import { Users } from '../index';

export const deleteUser = express.Router();

deleteUser.delete('/', async (req, res) => {
    await Users.destroy({
        where: {
            index : req.body.index
        }
    })
    
    return res.status(200).end();
});
