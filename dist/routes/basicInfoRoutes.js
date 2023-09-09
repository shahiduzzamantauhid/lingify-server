"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basicInfoController_1 = require("../controller/basicInfoController");
const postcontroller_1 = require("../controller/postcontroller");
const router = express_1.default.Router();
router.get('/userinfo', basicInfoController_1.getUserInfo);
router.get('/singleuserinfo/:id', basicInfoController_1.getsingleUserInfo);
router.get('/course', basicInfoController_1.getcourseInfo);
router.get('/cart', basicInfoController_1.getCartInfo);
router.get('/instructors', basicInfoController_1.getAllInstructor);
router.get('/cart/:email', basicInfoController_1.getsinglecartInfo);
router.post('/user', postcontroller_1.postUserInfo);
router.post('/course', postcontroller_1.postCourseInfo);
router.post('/cart', postcontroller_1.postCartInfo);
exports.default = router;
//# sourceMappingURL=basicInfoRoutes.js.map