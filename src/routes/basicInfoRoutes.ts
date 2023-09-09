import express from 'express';
import { getAllInstructor, getAllStudents, getCartInfo, getUserInfo, getcourseInfo, getsingleUserInfo, getsinglecartInfo } from '../controller/basicInfoController';
import { postCartInfo, postCourseInfo, postUserInfo } from '../controller/postcontroller';

const router = express.Router();

router.get('/userinfo', getUserInfo)
router.get('/singleuserinfo/:id', getsingleUserInfo)
router.get('/course', getcourseInfo)
router.get('/cart', getCartInfo)
router.get('/instructors', getAllInstructor)
router.get('/students', getAllStudents)
router.get('/cart/:email', getsinglecartInfo)
router.post('/user', postUserInfo)
router.post('/course', postCourseInfo)
router.post('/cart', postCartInfo)

export default router;