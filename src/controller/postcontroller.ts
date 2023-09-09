import { Request, Response } from 'express';

const postUserInfo = async (req:Request, res:Response) => {
    const user = req.body;
    const quary = { email: user.email };
    const existingUser = await req.db.collection('users').findOne(quary);
    if (existingUser) {
        return res.send({error : 'User already exists'});
    }
    const result = req.db.collection('users').insertOne(user);
    res.send(await result);
}
const postCourseInfo = async (req:Request, res:Response) => {
    const course = req.body;
    const result = req.db.collection('courses').insertOne(course);
    res.send(await result);
}
const postCartInfo = async (req:Request, res:Response) => {
    const cart = req.body;
    const result = req.db.collection('cart').insertOne(cart);
    res.send(await result);
}
export { postUserInfo, postCourseInfo, postCartInfo };