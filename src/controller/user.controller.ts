import { NextFunction, Request, Response } from 'express'
import * as userService from '../service/auth.service'
import { RequestWithUserObject } from '../types'
import { loginBodySchema } from '../validators/user.validator'

//GET user own data - user only
export const retrieveById = async (
    id: number,
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log()
        const response = await userService.getById(req.user.userId)
        console.log(response)
        res.json(response)
    } catch (err) {
        next(err)
    }
}

// //Delete user
export const deleteData = async (
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
) => {
    try {
        const request = loginBodySchema.parse(req.body)
        const response = await userService.deleteUser(request)
        res.json(response)
    } catch (err) {
        next(err)
    }
}