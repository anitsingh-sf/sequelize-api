import express from 'express';
import { Users } from '..';

export const updateUser = express.Router();

updateUser.post('/', async (req, res) => {
    await Users.update(req.body.updatedUserData, {
        where: {
            index: req.body.updatedUserData.index
        }
    })
    
    res.status(200).end();
});
