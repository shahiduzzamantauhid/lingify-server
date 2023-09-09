import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

const getUserInfo = async (req:Request, res:Response) => {
    const result = req.db.collection('users').find().toArray();
    res.send(await result);
}
const getcourseInfo = async (req:Request, res:Response) => {
    const result = await req.db.collection('courses').find().toArray();
    res.send(await result);
}
const getsingleUserInfo = async (req:Request, res:Response) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = req.db.collection('users').findOne(query);
    res.send(await result);
}
const getsinglecartInfo = async (req:Request, res:Response) => {
    const query = { userEmail: req.params.email };
    const result = req.db.collection('cart').find(query).toArray();
    res.send(await result);
}
const getCartInfo = async (req:Request, res:Response) => {
    const result = req.db.collection('cart').find().toArray();
    res.send(await result);
}
const getAllInstructor = async (req:Request, res:Response) => {
    const result = req.db.collection('users').find({ role: 'instructor' }).toArray();
    res.send(await result);
}
const getAllStudents = async (req:Request, res:Response) => {
    const result = req.db.collection('users').find({ role: 'student' }).toArray();
    res.send(await result);
}
export { getUserInfo, getsingleUserInfo, getcourseInfo, getCartInfo, getsinglecartInfo, getAllInstructor, getAllStudents };