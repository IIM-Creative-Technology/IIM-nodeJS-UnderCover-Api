const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModels');

/**
 * @api { POST } /user Create a user
 * @apiName CreateUser
 * @description Create a user
 * @apiGroup User
 *
 */

router.post('/', async (req: any, res: any) => {
    try {
        const user = UserModel.create({
            name: "John nash",
            status: "USER",
        })

        res.send(user);
    } catch (err) {
        res.body = {
            message: "???",
        }
    }
})


/**
 * @api { GET } / Get all users
 * @apiName GetUser
 * @description Return all users in the database.
 * @apiGroup User
 *
 */
router.get('/', async (req: any, res: any) => {
    try {
        // return all users
        const users = await UserModel.find();
        res.send(users);

    } catch (err) {
        res.body = {
            message: "they are no users",
        }
    }
})


/**
 * @api { GET } /:id Get a user
 * @apiName GetUser
 * @description Return all users in the database.
 * @apiGroup User
 *
 */
router.get('/:id', async (req: any, res: any) => {
    try {
        // return a user
        const { id } = req.params;
        const user = await UserModel.findById(id);

        res.send(user);
    } catch (err) {
        res.body = {
            message: "they are no users",
        };
    }
})

export = router;