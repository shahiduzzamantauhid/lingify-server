"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllInstructor = exports.getsinglecartInfo = exports.getCartInfo = exports.getcourseInfo = exports.getsingleUserInfo = exports.getUserInfo = void 0;
const mongodb_1 = require("mongodb");
const getUserInfo = async (req, res) => {
    const result = req.db.collection('users').find({}).toArray();
    res.send(await result);
};
exports.getUserInfo = getUserInfo;
const getcourseInfo = async (req, res) => {
    const result = req.db.collection('courses').find({}).toArray();
    res.send(await result);
};
exports.getcourseInfo = getcourseInfo;
const getsingleUserInfo = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = req.db.collection('users').findOne(query);
    res.send(await result);
};
exports.getsingleUserInfo = getsingleUserInfo;
const getsinglecartInfo = async (req, res) => {
    const query = { userEmail: req.params.email };
    const result = req.db.collection('cart').find(query).toArray();
    res.send(await result);
};
exports.getsinglecartInfo = getsinglecartInfo;
const getCartInfo = async (req, res) => {
    const result = req.db.collection('cart').find({}).toArray();
    res.send(await result);
};
exports.getCartInfo = getCartInfo;
const getAllInstructor = async (req, res) => {
    const result = req.db.collection('users').find({ role: 'instructor' }).toArray();
    res.send(await result);
};
exports.getAllInstructor = getAllInstructor;
//# sourceMappingURL=basicInfoController.js.map