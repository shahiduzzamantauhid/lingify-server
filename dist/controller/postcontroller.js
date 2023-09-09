"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCartInfo = exports.postCourseInfo = exports.postUserInfo = void 0;
const postUserInfo = async (req, res) => {
    const user = req.body;
    const quary = { email: user.email };
    const existingUser = await req.db.collection('users').findOne(quary);
    if (existingUser) {
        return res.send({ error: 'User already exists' });
    }
    const result = req.db.collection('users').insertOne(user);
    res.send(await result);
};
exports.postUserInfo = postUserInfo;
const postCourseInfo = async (req, res) => {
    const course = req.body;
    const result = req.db.collection('courses').insertOne(course);
    res.send(await result);
};
exports.postCourseInfo = postCourseInfo;
const postCartInfo = async (req, res) => {
    const cart = req.body;
    const result = req.db.collection('cart').insertOne(cart);
    res.send(await result);
};
exports.postCartInfo = postCartInfo;
//# sourceMappingURL=postcontroller.js.map