import express from 'express';
import { getAdminInfo, getAllInstructor, getAllStudents, getUserInfo, getcourseInfo, getsingleUserInfo, getsinglecartInfo } from '../controller/basicInfoController';
import { postCartInfo, postCourseInfo, postUserInfo } from '../controller/postcontroller';

const router = express.Router();

router.get('/userinfo', getUserInfo)
router.get('/singleuserinfo/:id', getsingleUserInfo)
router.get('/course', getcourseInfo)
router.get('/instructors', getAllInstructor)
router.get('/students', getAllStudents)
router.get('/cart/:email', getsinglecartInfo)
router.get('/admin/:email', getAdminInfo)
router.post('/user', postUserInfo)
router.post('/course', postCourseInfo)
router.post('/cart', postCartInfo)

export default router;